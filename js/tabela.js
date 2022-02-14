const tableDiv = document.getElementById('tableDiv');


db.collection('estoque').get().then(res =>{

    const docs = res.docs;
    
    let table = '<table class="table"><thead><tr><th scope="col">#</th><th scope="col">Item</th><th scope="col">Estoque</th><th scope="col">Consumo</th></tr></thead><tbody>'

    //console.log(docs[0].data());

    let rowIndex = 0;

    docs.forEach( doc => {
        rowIndex += 1;
        return table += `<tr>
        <th scope="row">${rowIndex}</th>
        <td>${doc.data().ingrediente}</td>
        <td>${doc.data().estoque}</td>
        <td>${doc.data().consumoDiario}</td>
      </tr>`
    })

    table += "</tbody></table>"

    console.log(table);

    tableDiv.innerHTML = table;
})