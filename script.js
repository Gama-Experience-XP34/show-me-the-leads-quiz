var cidades = ['New York', 'Orlando', 'Paris', 'Sidney', 'Londres', 'Toronto', 'Agra', 'Rio de Janeiro', 'Porto de Galinhas', 'Maragogi', 'Bonito-MS', 'Capadócia', 'Osasco', 'Chernobyl', 'Cidade do Cabo']

document.querySelectorAll('.btn').forEach(function(e) {
    e.addEventListener('click', function() {
      this.style.backgroundColor = "pink";
    })
  });