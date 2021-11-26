import URL from './settings';

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function apiFacade() {

  const fetchData = (endpoint, updateAction) => {
    const options = makeOptions("GET");
    return fetch(URL + "/api/" + endpoint, options)
      .then(handleHttpErrors)
      .then((data) => updateAction(data))
  }

  const makeOptions = (method) => {
    var opts = {
      method: method,
      headers: {
        "User-Agent": "client",
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    return opts;
  }



  return {
    makeOptions,
    fetchData
  }
}
const facade = apiFacade();
export default facade;