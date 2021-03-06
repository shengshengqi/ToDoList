import config from "../config";

export default (path, body = {}) => {
  console.log(body);
  return fetch(`${config.domain}${path}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'multipart/form-data;charset=UTF-8'
    },
    body: JSON.stringify(body)
  })
    .then(res => {
      return res.json()
    })
    .catch(e => {
      console.log(e);
      return {
        status: -1
      };
    });
};
