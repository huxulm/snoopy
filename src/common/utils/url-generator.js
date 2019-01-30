export const host = () => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.REACT_APP_SNOOPY_HOST.split('//')[1];
  }
  if (process.env.LOCAL_SERVER) {
    return 'localhost:3000';
  }
  return 'codesandbox.dev';
};

export const protocolAndHost = () => `${window.location.protocol}//${host()}`;