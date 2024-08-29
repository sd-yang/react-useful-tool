/**
 * 获取cookie
 */
export function getCookieValue(cookieName) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName + '=') === 0) {
      // 解码cookie值并返回
      return decodeURIComponent(cookie.substring(cookieName.length + 1));
    }
  }
  return null;
}
