import axios from "axios";

export function fetchAPIData(endpoint: string) {
  const result = axios.get(endpoint)
    .then(res => {
      if (res.status == 200) {
        // Process the response and update the view.
        // Recreate a setTimeout API call which will be fired after 1 second.
        return res.data;
      } else {
        // Failure case. If required, alert the user.
      }
    })
    .catch(function () {
      // Failure case. If required, alert the user.
    });

  return result
}