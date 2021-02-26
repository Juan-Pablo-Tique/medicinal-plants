window.onload = getDataFromPlants();

function getDataFromPlants(){
    const _xhttp = new XMLHttpRequest();
    _xhttp.open('GET', 'src/data/data.json', true);
    _xhttp.send();
    _xhttp.onreadystatechange = function(){
        if(this.readyState===4 && this.status === 200){
            let dataParse = JSON.parse(this.responseText);
            let responseData = document.querySelector('#dataPlantsResponse');
            responseData.innerHTML = '';

            for (const itemData of dataParse) {
              let dataStructured = ''
              dataStructured += `
                <tr>
                <td>${itemData.common_name}</td>
                <td>${itemData.scientific_name}</td>
                <td>${itemData.family}</td>
                <td>${itemData.useful_part}</td>
                <td>${itemData.properties}</td>
                <td>${itemData.uses}</td>
                <td id="personalizado">`;
                let dataopc = '';

              for (let index = 0; index < itemData.contraindications.length; index++) {
                dataopc += `<span>${itemData.contraindications[index]}</span><br>`;
              }

              dataStructured += `${dataopc}</td>
                </tr>
                `;

                responseData.innerHTML += dataStructured;
            }
        }
    }
}