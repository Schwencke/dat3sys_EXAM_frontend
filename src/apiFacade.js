const URL="https://deckofcardsapi.com";

let apiFacade =()=>{


    const fetchData=(endpoint,updateAction)=>{
        const options= makeOptions("GET")

        return fetch(URL+ "/api/"+ endpoint,options)
        .then ((data)=>updateAction(data))
    }


    const makeOptions=(method,body)=>{
        var options={
        method: method ,
        headers:
        {
        "Content-type":  "application/json",
        "Accept": "application/json",
        }
        }

        if(body)
        {
        options.body = JSON.stringify(body);
        }

        return options
        }
        return(
        makeOptions,
        fetchData
        )
}
const Facade = apiFacade();
export default Facade;