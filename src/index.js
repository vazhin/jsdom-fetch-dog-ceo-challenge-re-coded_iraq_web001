console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
.then(response => response.json())
.then(result => {
  let imgContainer = document.querySelector('#dog-image-container');
  for (const element of result.message){
    let img = document.createElement('img');
    img.src = `${element}`;
    img.width = "300";
    imgContainer.appendChild(img);
  }
})

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(response => response.json())
.then(result => {
  let breedContainer = document.querySelector('#dog-breeds');
  console.log(result);
  for (const key in result.message){
    let breed = document.createElement('li');
    breed.innerText = key;
    breedContainer.appendChild(breed);
  }
})
