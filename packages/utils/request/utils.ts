export const checkStatus = (res: Response) => {
  if (res.status >= 200 && res.status < 400) {
    return res;
  }
  const error = new Error(res.statusText);
  throw error;
};

export const parseData =
  (config: { responseType: XMLHttpRequestResponseType }) =>
  (response: Response) => {
    const responseType = config.responseType;
    let result;
    switch (responseType.toUpperCase()) {
      case 'JSON':
        result = response.json();
        break;
      case 'TEXT':
        result = response.text();
        break;
      case 'BLOB':
        result = response.blob();
        break;
      case 'ARRAYBUFFER':
        result = response.arrayBuffer();
        break;
    }
    return result;
  };
