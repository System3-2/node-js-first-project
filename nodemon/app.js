// URL = "https://library-api.postmanlabs.com/books";

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => console.log(data));


const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=lekki&format=json&u=f';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6d125e38fdmshd3d62d472692b99p12ce84jsn06599c1a1b4b',
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
  }
};

fetch('https://library-api.postmanlabs.com/books')
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));