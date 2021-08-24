const getLocalStorage = () => {
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  if (!currentUser) {
    return [];
  }
};

export { getLocalStorage };
