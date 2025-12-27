// Environment variables for API keys
// IMPORTANT: Create a .env file in the root directory and add these variables
// Never commit .env file to version control!


// Firebase configuration (if not using firebaseConfig.js)
export const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY || '';
export const FIREBASE_AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '';
export const FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID || '';

// Email service configuration (for appointment confirmations)
export const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID || '';
export const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID || '';
export const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY || '';
