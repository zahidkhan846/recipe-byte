export const databseUrl = (node: string) => {
  return `https://anguler-recipe-book-default-rtdb.firebaseio.com/${node}.json`;
};

export const userDataUrl = (userId: string) => {
  return `https://anguler-recipe-book-default-rtdb.firebaseio.com/users/${userId}.json`;
};

export const signUpUrl = (apiKey: string) => {
  return `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
};

export const signInUrl = (apiKey: string) => {
  return `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
};
