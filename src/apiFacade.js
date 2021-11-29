const URL="http://localhost:8080/CA3";

function handleHttpErrors(res)
{
    if (!res.ok)
    {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

let apiFacade = () =>
{

    const fetchData = (endpoint, updateAction, SetErrorMessage) =>
    {
        const options = makeOptions("GET");
        return fetch(URL + "/api/" + endpoint, options)
            .then(handleHttpErrors)
            .then((data) => updateAction(data))
            .catch(err =>
            {
                if (err.status)
                {
                    console.log(err)
                    err.fullError.then(e => SetErrorMessage(e.code + ": " + e.message))
                }
                else { SetErrorMessage("Network error"); }
            })
    }

    const makeOptions = (method) =>
    {
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
        fetchData,
        
    }

}

const facade = apiFacade()

export default facade
