//searchTerm is parameter - argument is event.target.value
const fetchData = async (searchTerm) => {
    //await is to keep the code going (asynchronous)
    const response = await axios.get('http://www.omdbapi.com/', {
        //params attaches query string(appends) these on the end of the url
        params: {
            apikey: '332a1af0',
            s: searchTerm
        }
    });
    //data is the parameter to the response object
    console.log(response.data);
};
//calling the function
//fetchData();

const input = document.querySelector('input');
let timeoutId;
//calling onInput many times in a row (typing out "Avenger")
const onInput = (event) => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    //can take this variable -event.target.value and pass it into fetchData
    // going to call fetchData event.target.value;
    timeoutId = setTimeout(() => {
        //second time they push the key it will be defined- it will stop

        // in one second call fetchData
        fetchData(event.target.value);
    }, 1000)

};
input.addEventListener('input', onInput);

// can look up by going to console, Network, XHR (requests only from JS code)