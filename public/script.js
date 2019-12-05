console.log('running')

const tablePara = document.querySelector("section.game-main > p")

const showTable = () => {
    let xhr = new XMLHttpRequest();
    const url = "/table";
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            buildTable = JSON.parse(xhr.responseText);
            console.log(buildTable)

            tablePara.textContent = buildTable[0].;
        //     let textTable = document.createTextNode(`The weather in ${searchTerm} is ${originLocation.weather}`); // Create a text node
        // paraWeatherCondition.appendChild(textWeatherCondition);
        // weatherSection.appendChild(paraWeatherCondition);

        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

window.onload = showTable()




// const getInventoryData = () => {
//     const xhr = new XMLHttpRequest();
//     const url = "/getinventory";
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         const inventoryArray = JSON.parse(xhr.responseText);
//         populateInventoryTable(inventoryArray);
//       }
//     };
//     xhr.open("GET", url);
//     xhr.send();
//   };