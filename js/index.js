
const btn = document.getElementById('submitButton');
const nome = document.getElementById('nome')
const price = document.getElementById('price')

btn.addEventListener('click', event => {
    event.preventDefault();
    submitForm(); // salva dados do formulário no firebase 
    //console.log(nome.value);
    //console.log(price.value)
})

function submitForm() {
    db.collection('cotacoes').doc().set({
        nome:nome.value,
        price:price.value,
        timestamp: Date.now()
    })
    .then(() => {
        console.log('Dados salvos com sucesso!');
    })
    .catch((error) => {
        console.error('Ocorreu um erro ao salvar os dados : ', error);
    })
}

