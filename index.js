//searchTerm is parameter - argument is event.target.value
const fetchData = async (searchTerm) => {
    //await is to keep the code going (asynchronous)
    const response = await axios.get('http://www.omdbapi.com/', {
        //params attaches query string(appends) these on the end of the url
        params: {
            apikey: '332a1af0',
            s: 'avengers'
        }
    });
    //data is the parameter to the response object
    console.log(response.data);
};
//calling the function
//fetchData();

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
    //can take this variable -event.target.value and pass it into fetchData
    // going to call fetchData event.target.value;
    fetchData(event.target.value);
});