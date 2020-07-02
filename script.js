/* let cities = [
  { Destino: 'New York', Score: 0},
  { Destino: 'Orlando', Score: 0},
  { Destino: 'Paris', Score: 0},
  { Destino: 'Sidney', Score: 0},
  { Destino: 'Londres', Score: 0},
  { Destino: 'Toronto', Score: 0},
  { Destino: 'Agra', Score: 0},
  { Destino: 'Rio de Janeiro', Score: 0},
  { Destino: 'Porto de Galinhas', Score: 0},
  { Destino: 'Maragogi', Score: 0},
  { Destino: 'Bonito-MS', Score: 0},
  { Destino: 'Capadócia', Score: 0},
  { Destino: 'Osasco', Score: 0},
  { Destino: 'Chernobyl', Score: 0},
  { Destino: 'Cidade do Cabo', Score: 0},
] */

document.querySelectorAll('.btn-grid').forEach(function (e) {
  e.addEventListener('click', function () {
    let value = e.lastElementChild;
    console.log(value)
  })
});

/* document.querySelectorAll('.btn').forEach(function(e) {
    e.addEventListener('click', function() {
      this.style.backgroundColor = "pink";
    })
  }); */

  