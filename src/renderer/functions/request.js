
const request = require('request');

async function LCUrequest(reqData, method, body, endpoint) {
  // eslint-disable-next-line no-new
  return new Promise(async (resolve) => {
    const options = {
      rejectUnauthorized: false,
      headers: {
        Accept: 'application/json',
        Authorization: reqData.auth,
      },
      body,
      method,
      url: `${reqData.url}${endpoint}`,
    };
    console.log(options);
    request(options, (err, res) => {
      resolve(res);
      console.log(err);
      // if (err) reject(new Error('An error occurred while making the requested connection'));
      // else {
      //   resolve(res);
      // }
    });
  });
}
// eslint-disable-next-line import/prefer-default-export
export { LCUrequest };
// module.exports = async function LCUrequest(reqData, method, body, endpoint) {
//   const options = {
//     rejectUnauthorized: false,
//     headers: {
//       Accept: 'application/json',
//       Authorization: reqData.auth,
//     },
//     body,
//     method,
//     url: `${reqData.url}ewewewe${endpoint}`,
//   };
//   try {
//     await request(options, (err) => {
//       if (err) throw new Error('An error occurred while making the requested connection');
//     });
//   } catch (err) {
//     throw new Error(err);
//   }
// };
