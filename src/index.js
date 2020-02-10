console.log('%c HI', 'color: firebrick')

function fetchImage() {
     fetch("https://dog.ceo/api/breeds/image/random/4")
     .then(function(response) {
       return response.json();
     })
     .then(function(json) {
       console.log(json)
     });
   }

//    function renderImage(json) {
//     const main = document.querySelector('div')
//     json.forEach(image => {
//       const h2 = document.createElement('h2')
//       h2.innerHTML = `<h2>${image}</h2>`
//       main.appendChild(h2)
//     })
//   }