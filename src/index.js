console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
let imgContainer = document.querySelector('#dog-image-container');

fetch(imgUrl)
.then(response => response.json())
.then(result => {
  console.log(result.message);
  for (const element of result.message){
    console.log(element);
    let img = document.createElement('div');
    img.src = `${element}`;
    imgContainer.appendChild(img);
  }
})
