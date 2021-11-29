
import URL from './settings';

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({status: res.status, fullError: res.json() })
    //fejlhåndtering er ikke ordentligt implementeret :/
  }
  return res.json();
}

function apiFacade() {

  // const fetchData = (endpoint, updateAction) => {
  //   const options = makeOptions("GET");
  //   return fetch(URL + "/api/" + endpoint, options)
  //     .then(handleHttpErrors)
  //     .then((data) => updateAction(data))
  // }

  const fetchData = (endpoint) => {
    const options = makeOptions("GET");
     return fetch(URL + "/api/" + endpoint, options)
      .then(handleHttpErrors)
      //.then((res) => res.json()) // data retuneres af fejlhåndteringen
    }


  const makeOptions = (method) => {
    var opts = {
      method: method,
      headers: {
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
