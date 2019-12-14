import config from "../config";

export default (path, params = {}, body = {}) => {
  return fetch(
    `${config.domain}${path}?${Object.keys(params)
      .map(k => `${k}=${params[k]}`)
      .join("&")}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        // "Content-Type": "application/json"
        // 'Content-Type': 'multipart/form-data;charset=UTF-8'
      }
    }
  )
    .then(res => {
      return res.json();
    })
    .catch(e => {
      console.log(e);
      return {
        status: -1
      };
    });
};
