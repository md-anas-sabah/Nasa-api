const searchBtn = document.querySelector('#search');

searchBtn.addEventListener('click', () => {
  console.log('Button Pressed');
  sendApiRequest();
});

async function sendApiRequest() {
  let API_KEY = 'Hzmriyz1kc48mwpFo6icg7rkg48atrL995Jt6O1z';
  let response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );

  let data = await response.json();
  console.log(data);
  useApiData(data);
}
function useApiData(data) {
  document.querySelector('#content').innerHTML += data.explanation;
  document.querySelector('#content').innerHTML += `<img src="${data.url}">`;
}
