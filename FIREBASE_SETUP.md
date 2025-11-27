# Firebase Setup Instructions

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add Project"
3. Name it "jewish-cultural-map" (or your preferred name)
4. Disable Google Analytics (optional)
5. Click "Create Project"

## Step 2: Enable Authentication

1. In Firebase Console, go to **Build** → **Authentication**
2. Click "Get Started"
3. Enable the following sign-in methods:
   - **Email/Password** (click Enable)
   - **Google** (click Enable, add support email)

## Step 3: Create Firestore Database

1. Go to **Build** → **Firestore Database**
2. Click "Create Database"
3. Choose **Start in test mode** (we'll add security rules later)
4. Select a location (choose closest to your users)
5. Click "Enable"

## Step 4: Enable Storage

1. Go to **Build** → **Storage**
2. Click "Get Started"
3. Start in **test mode**
4. Click "Done"

## Step 5: Get Your Config Keys

1. Go to **Project Settings** (gear icon in sidebar)
2. Scroll down to "Your apps"
3. Click the web icon `</>`
4. Register your app with nickname "jewish-map-web"
5. Copy the `firebaseConfig` object

## Step 6: Add Config to Your App

1. Open `src/firebase/config.js`
2. Replace the placeholder values with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

## Step 7: Set Up Firestore Security Rules

In Firestore → Rules tab, replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // User profiles
    match /users/{userId} {
      allow read: if true; // Public profiles
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    // Contributions
    match /contributions/{contributionId} {
      allow read: if true; // All contributions are public
      allow create: if request.auth != null;
      allow update: if request.auth != null &&
        (request.auth.uid == resource.data.authorId ||
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'moderator');
      allow delete: if request.auth != null &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'moderator';
    }

    // Comments
    match /comments/{commentId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && request.auth.uid == resource.data.authorId;
    }

    // Follows
    match /follows/{followId} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == request.resource.data.followerId;
    }

    // Moderation queue
    match /moderation/{itemId} {
      allow read: if request.auth != null &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'moderator';
      allow write: if request.auth != null &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'moderator';
    }
  }
}
```

## Step 8: Set Up Storage Security Rules

In Storage → Rules tab:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /contributions/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null &&
                      request.resource.size < 10 * 1024 * 1024 && // 10MB max
                      request.resource.contentType.matches('image/.*');
    }

    match /profiles/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId &&
                      request.resource.size < 5 * 1024 * 1024; // 5MB max
    }
  }
}
```

## Data Structure

### Users Collection (`/users/{userId}`)
```json
{
  "uid": "string",
  "email": "string",
  "displayName": "string",
  "pseudonym": "string (optional)",
  "bio": "string",
  "languages": ["English", "Hebrew"],
  "regionsOfInterest": ["Morocco", "Iraq"],
  "photoURL": "string (optional)",
  "role": "user | moderator | verified",
  "badges": ["contributor", "scholar"],
  "createdAt": "timestamp",
  "contributionCount": 0,
  "followingCount": 0,
  "followerCount": 0
}
```

### Contributions Collection (`/contributions/{contributionId}`)
```json
{
  "id": "string",
  "cityId": "string",
  "cityName": "string",
  "authorId": "string",
  "authorName": "string",
  "type": "site | event | person | artifact | story",
  "title": "string",
  "description": "string",
  "citations": [
    {
      "source": "string",
      "url": "string (optional)",
      "type": "book | article | oral_history | archive"
    }
  ],
  "mediaUrls": ["string"],
  "tags": ["#Maghreb", "#19thCentury"],
  "languages": ["English"],
  "license": "CC-BY | CC-BY-SA | Public Domain",
  "status": "pending | approved | needs_revision | rejected",
  "createdAt": "timestamp",
  "updatedAt": "timestamp",
  "moderationNotes": "string",
  "editHistory": [],
  "reactionsCount": {
    "like": 0,
    "insightful": 0,
    "thankYou": 0
  },
  "commentsCount": 0
}
```

### Comments Collection (`/comments/{commentId}`)
```json
{
  "id": "string",
  "targetType": "contribution | city",
  "targetId": "string",
  "authorId": "string",
  "authorName": "string",
  "text": "string",
  "mentions": ["userId1", "userId2"],
  "parentCommentId": "string (optional for threads)",
  "createdAt": "timestamp",
  "reactionsCount": {
    "like": 0
  }
}
```

### Follows Collection (`/follows/{followId}`)
```json
{
  "followerId": "string",
  "targetType": "user | city | tag",
  "targetId": "string",
  "targetName": "string",
  "createdAt": "timestamp"
}
```

### Notifications Collection (`/notifications/{notificationId}`)
```json
{
  "userId": "string",
  "type": "comment | reaction | follow | mention | moderation | collaboration",
  "message": "string",
  "actorId": "string",
  "actorName": "string",
  "targetType": "contribution | comment | city",
  "targetId": "string",
  "read": false,
  "createdAt": "timestamp"
}
```

## Next Steps

After setup is complete:
1. Test authentication by signing up a test user
2. Verify Firestore writes work by submitting a test contribution
3. Check Storage by uploading a test image
4. Monitor usage in Firebase Console

## Development vs Production

For **development**:
- Test mode rules are fine
- Use emulators: `npm install -D firebase-tools && firebase emulators:start`

For **production**:
- Tighten security rules
- Enable App Check
- Set up billing alerts
- Add reCAPTCHA to forms
