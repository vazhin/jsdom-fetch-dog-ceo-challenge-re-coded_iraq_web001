console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
.then(response => response.json())
.then(result => {
  console.log(result.message);
  for (const element of result.message){
    console.log(element);
    let imgContainer = document.querySelector('#dog-image-container');
    let img = document.createElement('img');
    img.src = `${element}`;
    imgContainer.appendChild(img);
  }
})
