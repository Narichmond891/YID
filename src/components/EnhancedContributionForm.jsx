import React, { useState } from 'react';
import { collection, addDoc, updateDoc, doc, increment } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage, isConfigured } from '../firebase/config';
import { useAuth } from '../contexts/AuthContext';

function EnhancedContributionForm({ city, onClose, onSubmit }) {
  const { currentUser, userProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    type: 'story',
    title: '',
    description: '',
    tags: [],
    languages: ['English'],
    license: 'CC-BY'
  });

  const [citations, setCitations] = useState([
    { source: '', url: '', type: 'book' }
  ]);

  const [mediaFiles, setMediaFiles] = useState([]);
  const [newTag, setNewTag] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addCitation = () => {
    setCitations([...citations, { source: '', url: '', type: 'book' }]);
  };

  const updateCitation = (index, field, value) => {
    const updated = [...citations];
    updated[index][field] = value;
    setCitations(updated);
  };

  const removeCitation = (index) => {
    setCitations(citations.filter((_, i) => i !== index));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + mediaFiles.length > 5) {
      setError('Maximum 5 images allowed');
      return;
    }

    // Check file sizes
    const oversized = files.filter((file) => file.size > 10 * 1024 * 1024);
    if (oversized.length > 0) {
      setError('Each image must be less than 10MB');
      return;
    }

    setMediaFiles([...mediaFiles, ...files]);
    setError('');
  };

  const removeFile = (index) => {
    setMediaFiles(mediaFiles.filter((_, i) => i !== index));
  };

  const addTag = () => {
    const tag = newTag.trim().startsWith('#') ? newTag.trim() : `#${newTag.trim()}`;
    if (tag.length > 1 && !formData.tags.includes(tag)) {
      setFormData({ ...formData, tags: [...formData.tags, tag] });
      setNewTag('');
    }
  };

  const removeTag = (tag) => {
    setFormData({ ...formData, tags: formData.tags.filter((t) => t !== tag) });
  };

  const uploadImages = async () => {
    const uploadPromises = mediaFiles.map(async (file) => {
      const timestamp = Date.now();
      const filename = `${timestamp}_${file.name}`;
      const storageRef = ref(storage, `contributions/${city.id}/${filename}`);

      await uploadBytes(storageRef, file);
      return await getDownloadURL(storageRef);
    });

    return await Promise.all(uploadPromises);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isConfigured) {
      setError('Firebase is not configured. See FIREBASE_SETUP.md to enable cloud features.');
      return;
    }

    if (!currentUser) {
      setError('You must be signed in to contribute');
      return;
    }

    if (!formData.title.trim() || !formData.description.trim()) {
      setError('Title and description are required');
      return;
    }

    // Check citations
    const validCitations = citations.filter((c) => c.source.trim());
    if (validCitations.length === 0 && formData.type !== 'story') {
      setError('At least one citation is required (or mark as "oral history")');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Upload images
      const mediaUrls = mediaFiles.length > 0 ? await uploadImages() : [];

      // Create contribution document
      const contribution = {
        cityId: city.id || city.name,
        cityName: city.name,
        authorId: currentUser.uid,
        authorName: userProfile?.displayName || currentUser.displayName,
        type: formData.type,
        title: formData.title,
        description: formData.description,
        citations: validCitations.length > 0 ? validCitations : [{ source: 'Oral History', type: 'oral_history' }],
        mediaUrls: mediaUrls,
        tags: formData.tags,
        languages: formData.languages,
        license: formData.license,
        status: 'pending',
        createdAt: new Date(),
        updatedAt: new Date(),
        moderationNotes: '',
        editHistory: [],
        reactionsCount: {
          like: 0,
          insightful: 0,
          thankYou: 0
        },
        commentsCount: 0
      };

      // Add to Firestore
      const docRef = await addDoc(collection(db, 'contributions'), contribution);

      // Update user's contribution count
      const userRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userRef, {
        contributionCount: increment(1)
      });

      // Call parent onSubmit (for local state)
      onSubmit({
        id: docRef.id,
        ...contribution,
        timestamp: new Date().toISOString()
      });

      onClose();
    } catch (err) {
      console.error('Error submitting contribution:', err);
      setError(`Failed to submit: ${err.message}`);
    }

    setLoading(false);
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#0A1F44',
    fontFamily: "'Montserrat', sans-serif"
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #E2E8F0',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: "'Montserrat', sans-serif",
    outline: 'none'
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10001,
        backdropFilter: 'blur(4px)',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '700px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 8px 32px rgba(10, 31, 68, 0.3)',
          fontFamily: "'Montserrat', sans-serif"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <h2
            style={{
              margin: '0 0 8px 0',
              fontSize: '24px',
              fontWeight: '700',
              fontFamily: "'Playfair Display', serif",
              color: '#0A1F44'
            }}
          >
            Contribute to {city.name}
          </h2>
          <p style={{ margin: 0, fontSize: '14px', color: '#4a5568' }}>
            Share stories, sites, artifacts, or historical information
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div
            style={{
              padding: '12px 16px',
              background: '#FEE2E2',
              border: '1px solid #FCA5A5',
              borderRadius: '8px',
              color: '#DC2626',
              fontSize: '14px',
              marginBottom: '20px'
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Type */}
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Contribution Type *</label>
            <select name="type" value={formData.type} onChange={handleChange} style={inputStyle}>
              <option value="story">Personal Story</option>
              <option value="site">Historical Site/Landmark</option>
              <option value="event">Historical Event</option>
              <option value="person">Notable Person</option>
              <option value="artifact">Artifact/Document</option>
            </select>
          </div>

          {/* Title */}
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Brief, descriptive title"
              required
              style={inputStyle}
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Detailed description of your contribution..."
              rows={5}
              required
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          {/* Citations */}
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Sources & Citations</label>
            <p style={{ fontSize: '12px', color: '#4a5568', margin: '0 0 12px 0' }}>
              Add sources to support your contribution. Use "Oral History" for personal stories.
            </p>

            {citations.map((citation, index) => (
              <div
                key={index}
                style={{
                  padding: '16px',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  marginBottom: '12px',
                  background: '#F7FAFC'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: '#0A1F44' }}>
                    Citation {index + 1}
                  </span>
                  {citations.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeCitation(index)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#DC2626',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}
                    >
                      Remove
                    </button>
                  )}
                </div>

                <input
                  type="text"
                  placeholder="Source (e.g., Book title, Website, Oral History)"
                  value={citation.source}
                  onChange={(e) => updateCitation(index, 'source', e.target.value)}
                  style={{ ...inputStyle, marginBottom: '8px' }}
                />

                <input
                  type="url"
                  placeholder="URL (optional)"
                  value={citation.url}
                  onChange={(e) => updateCitation(index, 'url', e.target.value)}
                  style={{ ...inputStyle, marginBottom: '8px' }}
                />

                <select
                  value={citation.type}
                  onChange={(e) => updateCitation(index, 'type', e.target.value)}
                  style={inputStyle}
                >
                  <option value="book">Book</option>
                  <option value="article">Article</option>
                  <option value="archive">Archive/Museum</option>
                  <option value="oral_history">Oral History</option>
                  <option value="website">Website</option>
                </select>
              </div>
            ))}

            <button
              type="button"
              onClick={addCitation}
              style={{
                padding: '8px 16px',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: '600',
                color: '#0A1F44',
                cursor: 'pointer'
              }}
            >
              + Add Another Citation
            </button>
          </div>

          {/* Media Upload */}
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Images (Optional, max 5)</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              style={{
                display: 'inline-block',
                padding: '10px 20px',
                background: '#F7FAFC',
                border: '2px dashed #E2E8F0',
                borderRadius: '8px',
                fontSize: '14px',
                color: '#0A1F44',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              📷 Choose Images
            </label>

            {mediaFiles.length > 0 && (
              <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {mediaFiles.map((file, index) => (
                  <div
                    key={index}
                    style={{
                      position: 'relative',
                      width: '80px',
                      height: '80px',
                      borderRadius: '8px',
                      border: '1px solid #E2E8F0',
                      background: '#F7FAFC',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      padding: '4px'
                    }}
                  >
                    <span style={{ fontSize: '10px', textAlign: 'center', wordBreak: 'break-all' }}>
                      {file.name.substring(0, 15)}...
                    </span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      style={{
                        position: 'absolute',
                        top: '-6px',
                        right: '-6px',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: '#DC2626',
                        color: '#FFFFFF',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tags */}
          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>Tags (e.g., #Maghreb, #19thCentury)</label>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <input
                type="text"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                placeholder="Add tag"
                style={{ flex: 1, ...inputStyle }}
              />
              <button
                type="button"
                onClick={addTag}
                style={{
                  padding: '10px 20px',
                  background: '#0A1F44',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Add
              </button>
            </div>

            {formData.tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {formData.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '6px 12px',
                      background: '#F7FAFC',
                      border: '1px solid #E2E8F0',
                      borderRadius: '6px',
                      fontSize: '13px',
                      color: '#0A1F44',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#4a5568',
                        cursor: 'pointer',
                        fontSize: '16px'
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* License */}
          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>Content License *</label>
            <select name="license" value={formData.license} onChange={handleChange} style={inputStyle}>
              <option value="CC-BY">CC-BY (Attribution)</option>
              <option value="CC-BY-SA">CC-BY-SA (Attribution-ShareAlike)</option>
              <option value="Public Domain">Public Domain</option>
            </select>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="submit"
              disabled={loading || !currentUser}
              style={{
                flex: 1,
                padding: '14px',
                background: loading ? '#4a5568' : 'linear-gradient(135deg, #0A1F44 0%, #1E3A5F 100%)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: loading || !currentUser ? 'not-allowed' : 'pointer',
                opacity: loading || !currentUser ? 0.6 : 1
              }}
            >
              {loading ? 'Submitting...' : 'Submit Contribution'}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              style={{
                flex: 1,
                padding: '14px',
                background: '#FFFFFF',
                color: '#4a5568',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              Cancel
            </button>
          </div>

          {!currentUser && (
            <p style={{ marginTop: '12px', fontSize: '13px', color: '#DC2626', textAlign: 'center' }}>
              You must be signed in to submit contributions
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default EnhancedContributionForm;
