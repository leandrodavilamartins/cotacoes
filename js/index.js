
const btn = document.getElementById('submitButton');
const nome = document.getElementById('nome');
const price = document.getElementById('price');
const paragraph = document.getElementById('dbdata'); 
const reqBtn = document.getElementById('reqBtn');


btn.addEventListener('click', event => {
    event.preventDefault();
    submitForm(); // salva dados do formulário no firebase 
})

reqBtn.addEventListener('click', () =>{
    reqData();
})

function submitForm() { // envia formulário para banco de dados 
    db.collection('cotacoes').doc().set({
        nome:nome.value,
        price:price.value,
        timestamp: Date.now()
    })
    .then(() => {
        console.log('Dados salvos com sucesso!');
        let msg = document.getElementById('msg');
        msg.classList.add('unmasked');

    })
    .catch((error) => {
        console.error('Ocorreu um erro ao salvar os dados : ', error);
    })
}

function reqData() { // requisita dados 
    db.collection('estoque').get().then( res => {
        let objs = [];
        let text = "";
        let docs = res.docs;
        //paragraph.innerText = docs;
        docs.forEach( doc => {
            return objs.push(doc.data());
        })
        console.log(objs)
        objs.forEach( obj => {
            return text += JSON.stringify(obj);
        })
        paragraph.innerText = text;
    })
}


