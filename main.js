const palabra = document.getElementById('palabra');

async function searchGif(palabra){
  try{
  const url = `https://api.giphy.com/v1/gifs/search?api_key=93u5Wz0vbhhoSppBDUs4pxfSkMa1WBQH&q=${palabra}&limit=6&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  const gifs = result.data.map((g, index) => ({
    id: g.id,
    url: g.images.fixed_height.url,
    title: g.title,
 }));
  renderGif(gifs);
} catch(error){
console.error('Error al obtener GIF', error);
}
}

function renderGif(gifs) {
  const gifListHTML = gifs.map((gif) => `
  <div>
  <div> ${gif.id}</div>
  <img src="${gif.url}"alt=gifurl">
  <div> ${gif.title}</div>
  </div>
  `
  )
  .join('');
  app.innerHTML = gifListHTML;
}
buton.addEventListener('click',async ()=>{
  await searchGif(palabra.value);
});