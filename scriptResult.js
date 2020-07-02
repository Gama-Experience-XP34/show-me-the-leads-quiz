let scores = localStorage.getItem('cities').split(',').map(x=>+x)
let cities = localStorage.getItem('city').split(',')
let value = scores.indexOf(Math.max.apply(null, scores ));
console.log(cities[value])
let dados = { 
'New York': "imgs/logo.jpeg",
'Orlando': "imgs/logo.jpeg",
'Paris': "imgs/logo.jpeg",
'Sidney': "imgs/logo.jpeg",
'Londres': "imgs/logo.jpeg",
'Toronto': "imgs/logo.jpeg",
'Agra': "imgs/logo.jpeg",
'Rio de Janeiro': "imgs/logo.jpeg",
'Porto de Galinhas': "imgs/logo.jpeg",
'Maragogi': "imgs/logo.jpeg",
'Bonito - MS': "imgs/logo.jpeg",
'Capadócia': "imgs/logo.jpeg",
'Osasco': "imgs/logo.jpeg",
'Chernobyl': "imgs/logo.jpeg",
'Cidade do Cabo': "imgs/logo.jpeg"} 

let imagem = document.querySelector('.picture img')
let title = document.querySelector('.name')

title.innerHTML = cities[value];
imagem.attributes[0].nodeValue = dados[cities[value]]