window.onload = function(){
  const buscar = document.querySelector("#busca");

const cep = document.querySelector("#cep");

const opcao = {
  method:'GET',
  node: 'cors',
  cache: 'default'
}

  buscar.addEventListener("click", function(){
    fetch(`http://viacep.com.br/ws/${cep.value}/json/`, opcao)
    .then(response => {response.json()
      .then(data => {
        document.querySelector("#estado").value = data[`uf`];
        document.querySelector("#city").value = data[`localidade`];
        document.querySelector("#rua").value = data[`logradouro`];
        document.querySelector("#bairro").value = data[`bairro`];
      })
    })
  });
}
