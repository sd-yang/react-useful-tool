import { getCookieValue } from '../../store/cookie';

Object.defineProperty(window.document, 'cookie', {
  writable: true,
  value: 'cookieName=valueOfCookie;'
});

describe('getCookieValue', () => {
  it('should return the value of a cookie when it exists', () => {
    const result = getCookieValue('cookieName');
    expect(result).toBe('valueOfCookie');
  });

  it('should return null when the cookie does not exist', () => {
    const result = getCookieValue('nonExistentCookie');
    expect(result).toBeNull();
  });

  it('should return the value of a cookie even if there are multiple cookies', () => {
    document.cookie = 'cookieName1=valueOfCookie1; cookieName2=valueOfCookie2;';
    const result = getCookieValue('cookieName2');
    expect(result).toBe('valueOfCookie2');
  });

  it('should decode the value of a cookie if it is URI encoded', () => {
    const encodedValue = encodeURIComponent('cookieValue&=+');
    document.cookie = `cookieName=${encodedValue};`;
    const result = getCookieValue('cookieName');
    expect(result).toBe('cookieValue&=+');
  });
});
