import axios from "axios";

export function get(endpoint: string, cb?: (args: any) => void) {
  const result = axios.get(endpoint)
    .then(res => {
      if (res.status == 200) {
        if (cb) {
          return cb(res.data);
        }
        return res.data;
      } else {
        console.log('MISTAKE FETCHING DATA => ', { res })
        // Failure case. If required, alert the user.
      }
    })
    .catch(function (err) {
      console.log('Error FETCHING DATA => ', { err })
      // Failure case. If required, alert the user.
    });

  return result
}