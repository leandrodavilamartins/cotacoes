
const btn = document.getElementById('submitButton');
const nome = document.getElementById('nome');
const price = document.getElementById('price');
const paragraph = document.getElementById('dbdata'); 
const reqBtn = document.getElementById('reqBtn');
const select = document.getElementById('select');


console.log(select);

btn.addEventListener('click', event => {
    event.preventDefault();
    submitForm(); // salva dados do formulário no firebase 
})

reqBtn.addEventListener('click', () =>{
    reqData();
})


feedSelect();



function submitForm() { // envia formulário para banco de dados 
    db.collection('cotacoes').doc().set({
        nome:select.value,
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
        let options = "<select class='form-select' aria-label='Default select example'></select>";
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

        objs.forEach( obj => {
            return options += `<option value=${obj.ingrediente}>${obj.ingrediente}</option>`
        })
        options += "<select>"

        console.log(options);
    })
}

function feedSelect() {
    db.collection('estoque').get().then( res => {
        let objs = [];
        let options = "<select class='form-select' aria-label='Default select example'></select>";
        let docs = res.docs;
        //paragraph.innerText = docs;
        docs.forEach( doc => {
            return objs.push(doc.data());
        })
        //objs.forEach( obj => {
            //return text += JSON.stringify(obj);
        //})

        objs.forEach( obj => {
            return options += `<option value='${obj.ingrediente}'>${obj.ingrediente}</option>`
        })
        options += "</select>"

        console.log(options);

        select.innerHTML = options;
    })
}

function validation(price) {
    if(isNaN(parseInt(price))){
        console.log('Não é um número ! ');
    }else{
        console.log('é um número !');
        console.log(parseFloat(parseInt(price)).toFixed(2));
    }
}


