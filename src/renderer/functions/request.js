const request = require('request');

module.exports = function LCUrequest(reqData, method, body, endpoint) {
  const options = {
    rejectUnauthorized: false,
    headers: {
      Accept: 'application/json',
      Authorization: reqData.auth,
    },
    body,
    method,
    url: reqData.url + endpoint,
  };
  request(options, (err, res) => {
    if (err) console.log(err);
    console.log(res);
  });
};
