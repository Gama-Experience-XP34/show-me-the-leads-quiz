let scores = localStorage.getItem('cities').split(',').map(x=>+x)
let cities = localStorage.getItem('city').split(',')
let value = scores.indexOf(Math.max.apply(null, scores ));
console.log(cities[value])
let dados = { 
'New York': "imgs/NY.jpg",
'Orlando': "imgs/Disney.jpg",
'Paris': "imgs/Paris.jpg",
'Sidney': "imgs/Sidney.jpg",
'Londres': "imgs/Londres.jpg",
'Toronto': "imgs/Toronto.jpg",
'Agra': "imgs/Agra.jpg",
'Rio de Janeiro': "imgs/RJ.jpg",
'Porto de Galinhas': "imgs/PortodeGalinhas.jpg",
'Maragogi': "imgs/Maragogi.jpg",
'Bonito - MS': "imgs/Bonito.jpg",
'Capadócia': "imgs/Capadocia.jpg",
'Osasco': "imgs/Osasco.jpg",
'Chernobyl': "imgs/Chernobyl.jpg",
'Cidade do Cabo': "imgs/Cabo.jpg"} 

let imagem = document.querySelector('.picture img')
let title = document.querySelector('.name')

title.innerHTML = cities[value];
imagem.attributes[0].nodeValue = dados[cities[value]]
