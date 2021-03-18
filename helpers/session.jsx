const SESSION_KEY = 'zip';

const createSessionKey = (key) => {
  return `${SESSION_KEY}-${process.env.NODE_ENV}-${key}`;
}

const isAvailableSession = () => {
  if (('localStorage' in window) && (window.localStorage !== null)) {
    return true;
  }
  return false;
};

export const setSession = (key, value) => {
  if (isAvailableSession()) {
    window.localStorage.setItem(createSessionKey(key), value);
  }
}

export const getSession = (key) => {
  if (isAvailableSession()) {
    return window.localStorage.getItem(createSessionKey(key));
  }
  return null;
}

export const getSessionObject = (key) => {
  const data = getSession(key);
  let res = {};
  if (data) {
    try {
      res = JSON.parse(data);
    } catch (e) {
      //
    }
  }
  return res;
}

export const deleteSession = (key) => {
  if (isAvailableSession()) {
    window.localStorage.removeItem(createSessionKey(key));
  }
}
