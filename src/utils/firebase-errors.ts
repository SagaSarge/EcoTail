export const getFirebaseErrorMessage = (errorCode: string): string => {
  const errorMessages: Record<string, string> = {
    'auth/user-not-found': 'No user found with this email address.',
    'auth/wrong-password': 'Invalid password.',
    'auth/email-already-in-use': 'Email address is already in use.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/invalid-email': 'Invalid email address.',
  };

  return errorMessages[errorCode] || 'An error occurred. Please try again.';
}; 