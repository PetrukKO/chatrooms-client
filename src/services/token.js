export function decodeToken(token) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
}

export function isExpired(token) {
  const decoded = decodeToken(token);
  console.log(decoded);
  if (Date.now() >= decoded.exp * 1000) {
    return true;
  }
  return false;
}

export function getToken() {
  return localStorage.getItem("token");
}
