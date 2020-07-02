let cities = { 
  'New York': 0,
  'Orlando': 0,
  'Paris': 0,
  'Sidney': 0,
  'Londres': 0,
  'Toronto': 0,
  'Agra': 0,
  'Rio de Janeiro': 0,
  'Porto de Galinhas': 0,
  'Maragogi': 0,
  'Bonito - MS': 0,
  'Capadócia': 0,
  'Osasco': 0,
  'Chernobyl': 0,
  'Cidade do Cabo': 0}

  var oito = 4
  var dez = 5
  var doce = 6
  var quince = 7.5
  const city = [
    'New York',
    'Orlando',
    'Paris',
    'Sidney',
    'Londres',
    'Toronto',
    'Agra',
    'Rio de Janeiro',
    'Porto de Galinhas',
    'Maragogi',
    'Bonito - MS',
    'Capadócia',
    'Osasco',
    'Chernobyl',
    'Cidade do Cabo'
  ]

document.querySelectorAll('.btn-grid').forEach(function (e) {
  e.addEventListener('click', function () {
    let value = e.childNodes[3];
    switch(value.name){
      case 'weather':
        if(value.id === 'frio'){
          cities['New York'] = cities['New York'] + oito;
          cities['Paris'] = cities['Paris'] + oito;
          cities['Londres'] = cities['Londres'] + oito;
          e.parentElement.parentElement.remove()
        }
        else if(value.id === 'mfrio'){
          cities['Chernobyl'] = cities['Chernobyl'] + quince;
          cities['Toronto'] = cities['Toronto'] + quince;
          e.parentElement.parentElement.remove()
        }
        else if(value.id === 'quente'){
          cities['Capadócia'] = cities['Capadócia'] + dez;
          cities['Orlando'] = cities['Orlando'] + dez;
          cities['Cidade do Cabo'] = cities['Cidade do Cabo'] + dez;
          cities['Sidney'] = cities['Sidney'] + dez;
          e.parentElement.parentElement.remove()
        }
        else {
          cities['Agra'] = cities['Agra'] + doce;
          cities['Maragogi'] = cities['Maragogi'] + doce;
          cities['Osasco'] = cities['Osasco'] + doce;
          cities['Porto de Galinhas'] = cities['orto de Galinhas'] + doce;
          cities['Rio de Janeiro'] = cities['Rio de Janeiro'] + doce;
          cities['Bonito - MS'] = cities['Bonito - MS'] + doce;
          e.parentElement.parentElement.remove()
        }
        break;

      case 'bag':
      if(value.id === 'sunga'){
        cities['Orlando'] = cities['Orlando'] + dez;
        cities['Cidade do Cabo'] = cities['Cidade do Cabo'] + dez;
        cities['Sidney'] = cities['Sidney'] + dez;
        cities['Osasco'] = cities['Osasco'] + dez;
        cities['Rio de Janeiro'] = cities['Rio de Janeiro'] + dez;
        e.parentElement.parentElement.remove()
      }
      else if(value.id === 'jaqueta'){
        cities['New York'] = cities['New York'] + doce;
        cities['Paris'] = cities['Paris'] + doce;
        cities['Londres'] = cities['Londres'] + doce;
        cities['Chernobyl'] = cities['Chernobyl'] + doce;
        cities['Toronto'] = cities['Toronto'] + doce;
        e.parentElement.parentElement.remove()
      }
      else if(value.id === 'Pselfie'){
        cities['Capadócia'] = cities['Capadócia'] + quince;
        cities['Agra'] = cities['Agra'] + quince;
        cities['Maragogi'] = cities['Maragogi'] + quince;
        cities['Bonito - MS'] = cities['Bonito - MS'] + quince;
        e.parentElement.parentElement.remove()
      }
      else {
        cities['Capadócia'] = cities['Capadócia'] + oito;
        cities['Agra'] = cities['Agra'] + oito;
        cities['Cidade do Cabo'] = cities['Cidade do Cabo'] + oito;
        e.parentElement.parentElement.remove()
      }
      break;
      
      case 'friend':
        if(value.id === 'pet'){
          cities['Paris'] = cities['Paris'] + doce;
          cities['Londres'] = cities['Londres'] + doce;
          cities['Cidade do Cabo'] = cities['Cidade do Cabo'] + doce;
          cities['Sidney'] = cities['Sidney'] + doce;
          cities['Agra'] = cities['Agra'] + doce;
          e.parentElement.parentElement.remove()
        }
        else if(value.id === 'sozinho'){
          cities['Orlando'] = cities['Orlando'] + dez;
          cities['Osasco'] = cities['Osasco'] + dez;
          cities['Rio de Janeiro'] = cities['Rio de Janeiro'] + dez;
          cities['New York'] = cities['New York'] + dez;
          cities['Chernobyl'] = cities['Chernobyl'] + dez;
          e.parentElement.parentElement.remove()
        }
        else if(value.id === 'amor'){
          cities['Capadócia'] = cities['Capadócia'] + oito;
          cities['Paris'] = cities['Paris'] + oito;
          cities['Londres'] = cities['Londres'] + oito;
          cities['Maragogi'] = cities['Maragogi'] + oito;
          cities['Bonito - MS'] = cities['Bonito - MS'] + oito;
          cities['Porto de Galinhas'] = cities['Porto de Galinhas'] + oito;
          e.parentElement.parentElement.remove()
        }
        else {
          cities['Sidney'] = cities['Sidney'] + quince;
          cities['Londres'] = cities['Londres'] + quince;
          e.parentElement.parentElement.remove()
        }
        break;
      
      case 'food':
        if(value.id === 'fast'){
          cities['Orlando'] = cities['Orlando'] + oito;
          cities['New York'] = cities['New York'] + oito;
          cities['Londres'] = cities['Londres'] + oito;
          cities['Toronto'] = cities['Toronto'] + oito;
          e.parentElement.parentElement.remove()
        }
        else if(value.id === 'restaurant'){
          cities['Cidade do Cabo'] = cities['Cidade do Cabo'] + dez;
          cities['Sidney'] = cities['Sidney'] + dez;
          cities['Paris'] = cities['Paris'] + dez;
          cities['Capadócia'] = cities['Capadócia'] + dez;
          e.parentElement.parentElement.remove()
        }
        else if(value.id === 'marmita'){
          cities['Agra'] = cities['Agra'] + doce;
          cities['Rio de Janeiro'] = cities['Rio de Janeiro'] + doce;
          cities['Porto de Galinhas'] = cities['Porto de Galinhas'] + doce;
          e.parentElement.parentElement.remove()
        }
        else {
          cities['Osasco'] = cities['Osasco'] + quince;
          cities['Bonito - MS'] = cities['Bonito - MS'] + quince;
          cities['Maragogi'] = cities['Maragogi'] + quince;
          cities['Chernobyl'] = cities['Chernobyl'] + quince;
          e.parentElement.parentElement.remove()
        }
        break;

      case 'music':
        if(value.id === 'funk'){
          cities['Osasco'] = cities['Osasco'] + dez;
          cities['Chernobyl'] = cities['Chernobyl'] + dez;
          cities['Rio de Janeiro'] = cities['Rio de Janeiro'] + dez;
          e.parentElement.parentElement.remove()
        }
        else if(value.id === 'pagodeira'){
          cities['Cidade do Cabo'] = cities['Cidade do Cabo'] + doce;
          cities['Agra'] = cities['Agra'] + doce;
          cities['Maragogi'] = cities['Maragogi'] + doce;
          cities['Bonito - MS'] = cities['Bonito - MS'] + doce;
          cities['Porto de Galinhas'] = cities['Porto de Galinhas'] + doce;
          cities['Capadócia'] = cities['Capadócia'] + doce;
          e.parentElement.parentElement.remove()
        }
        else if(value.id === 'dance'){
          cities['New York'] = cities['New York'] + quince;
          cities['Londres'] = cities['Londres'] + quince;
          cities['Paris'] = cities['Paris'] + doce;
          cities['Londres'] = cities['Londres'] + doce;
          cities['Sidney'] = cities['Sidney'] + doce;
          cities['Orlando'] = cities['Orlando'] + dez;
          cities['Paris'] = cities['Paris'] + oito;
          e.parentElement.parentElement.remove()
        }
        else {
          cities['New York'] = cities['New York'] + quince;
          cities['Paris'] = cities['Paris'] + oito;
          cities['Sidney'] = cities['Sidney'] + quince;
          cities['Toronto'] = cities['Toronto'] + quince;
          e.parentElement.parentElement.remove()
        }
        break;
        
      case 'time':
        if(value.id === 'party'){
          cities['New York'] = cities['New York'] + oito;
          cities['Sidney'] = cities['Sidney'] + oito;
          cities['Toronto'] = cities['Toronto'] + oito;
          cities['Rio de Janeiro'] = cities['Rio de Janeiro'] + oito;
          e.parentElement.parentElement.remove()
        }
        else if(value.id === 'nature'){
          cities['Toronto'] = cities['Toronto'] + oito;
          cities['Agra'] = cities['Agra'] + doce;
          cities['Porto de Galinhas'] = cities['Porto de Galinhas'] + doce;
          cities['Maragogi'] = cities['Maragogi'] + doce;
          cities['Bonito - MS'] = cities['Bonito - MS'] + doce;
          cities['Capadócia'] = cities['Capadócia'] + doce;
          e.parentElement.parentElement.remove()
        }
        else if(value.id === 'power'){
          cities['Chernobyl'] = cities['Chernobyl'] + dez;
          e.parentElement.parentElement.remove()
        }
        else {
          cities['Orlando'] = cities['Orlando'] + dez;
          cities['Paris'] = cities['Paris'] + dez;
          cities['New York'] = cities['New York'] + dez;
          cities['Osasco'] = cities['Osasco'] + dez;
          e.parentElement.parentElement.remove()
        }
        break;
        
        case 'pics':
          if(value.id === 'lot'){
            cities['New York'] = cities['New York'] + oito;
            cities['Orlando'] = cities['Orlando'] + oito;
            cities['Paris'] = cities['Paris'] + oito;
            cities['Londres'] = cities['Londres'] + oito;
            cities['Porto de Galinhas'] = cities['Porto de Galinhas'] + oito;
            e.parentElement.parentElement.remove()
          }
          else if(value.id === 'many'){
            cities['Toronto'] = cities['Toronto'] + dez;
            cities['Rio de Janeiro'] = cities['Rio de Janeiro'] + dez;
            cities['Maragogi'] = cities['Maragogi'] + dez;
            cities['Sidney'] = cities['Sidney'] + dez;
            cities['Bonito - MS'] = cities['Bonito - MS'] + dez;
            e.parentElement.parentElement.remove()
          }
          else if(value.id === 'some'){
            cities['Agra'] = cities['Agra'] + doce;
            cities['Capadócia'] = cities['Capadócia'] + doce;
            cities['Cidade do Cabo'] = cities['Cidade do Cabo'] + doce;
            e.parentElement.parentElement.remove()
          }
          else {
            cities['Chernobyl'] = cities['Chernobyl'] + quince;
            cities['Osasco'] = cities['Osasco'] + quince;
            e.parentElement.parentElement.remove()
          }
          break;
      default:
        console.log('opçao errada')
      
    }
  })
});

var butonSubmit = document.querySelector('.submitButton')
butonSubmit.addEventListener('click', () => {
  let score = []
  for(let city in cities){
    score.push(cities[city])
  }
  localStorage.setItem('cities', score)
  localStorage.setItem('city', city)
})
/* document.querySelectorAll('.btn').forEach(function(e) {
    e.addEventListener('click', function() {
      this.style.backgroundColor = "pink";
    })
  }); */

  