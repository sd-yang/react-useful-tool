export const request = (url: string) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then()
      .catch((reason) => {
        return reject(reason);
      });
  });
};
