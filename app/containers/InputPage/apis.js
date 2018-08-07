import request from 'utils/request';

export const getFromUrl = url => request(url);

export const postToUrl = (url, data) =>
  request(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
