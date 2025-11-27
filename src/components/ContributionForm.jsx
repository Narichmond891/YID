import React, { useState } from 'react';

function ContributionForm({ city, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    contributorName: '',
    contributorEmail: '',
    contributionType: 'story',
    content: '',
    year: new Date().getFullYear()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const contribution = {
      ...formData,
      cityId: city.id,
      cityName: city.name,
      timestamp: new Date().toISOString()
    };
    onSubmit(contribution);
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#0A1F44',
    fontFamily: "'Montserrat', sans-serif"
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid rgba(212, 175, 55, 0.3)',
    borderRadius: '8px',
    fontSize: '15px',
    boxSizing: 'border-box',
    fontFamily: "'Montserrat', sans-serif",
    transition: 'all 0.2s ease',
    backgroundColor: 'white'
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#D4AF37';
    e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 31, 68, 0.75)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        padding: '35px',
        width: '90%',
        maxWidth: '550px',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 20px 40px rgba(10, 31, 68, 0.3)',
        border: '1px solid rgba(212, 175, 55, 0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
          <h2 style={{
            margin: '0',
            fontSize: '28px',
            fontFamily: "'Playfair Display', serif",
            color: '#0A1F44',
            fontWeight: '700'
          }}>
            Contribute to {city.name}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(212, 175, 55, 0.1)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#D4AF37',
              padding: '0',
              lineHeight: '1',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
            }}
          >
            ×
          </button>
        </div>

        <p style={{
          fontSize: '15px',
          color: '#4a5568',
          marginBottom: '25px',
          lineHeight: '1.6',
          fontWeight: '400'
        }}>
          Share your knowledge, stories, or historical information about the Jewish community in {city.name}.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '18px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#0A1F44',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Your Name
            </label>
            <input
              type="text"
              name="contributorName"
              value={formData.contributorName}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '8px',
                fontSize: '15px',
                boxSizing: 'border-box',
                fontFamily: "'Montserrat', sans-serif",
                transition: 'all 0.2s ease',
                backgroundColor: 'white'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#D4AF37';
                e.target.style.boxShadow = '0 0 0 3px rgba(212, 175, 55, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>
              Email (optional)
            </label>
            <input
              type="email"
              name="contributorEmail"
              value={formData.contributorEmail}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>
              Contribution Type
            </label>
            <select
              name="contributionType"
              value={formData.contributionType}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            >
              <option value="story">Personal Story</option>
              <option value="historical">Historical Information</option>
              <option value="landmark">Landmark/Location</option>
              <option value="tradition">Cultural Tradition</option>
              <option value="population">Population Data</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>
              Related Year (if applicable)
            </label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              min="1800"
              max={new Date().getFullYear()}
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', marginBottom: '5px', color: '#333' }}>
              Your Contribution
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Share your story, knowledge, or information here..."
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'inherit',
                resize: 'vertical',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="submit"
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#3949ab',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Submit Contribution
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#f5f5f5',
                color: '#333',
                border: '1px solid #ddd',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
          </div>
        </form>

        <p style={{ fontSize: '12px', color: '#999', marginTop: '15px', textAlign: 'center' }}>
          Note: For this prototype, contributions are stored locally in your browser
        </p>
      </div>
    </div>
  );
}

export default ContributionForm;
