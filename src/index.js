console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let imgContainer = document.querySelector('#dog-image-container');

fetch(imgUrl)
.then(response => response.json())
.then(result => {
  for (const img of result){
    let img = document.createElement('img');
    img.src = result;
  }
})
