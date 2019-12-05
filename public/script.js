console.log('running')

const tablePara = document.querySelector("section.game-main > p")

const showTable = () => {
    let xhr = new XMLHttpRequest();
    const url = "/table";
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            buildTable = JSON.parse(xhr.responseText);
            
            let rows = [];

            for (let i = 0; i < 20; i++) {
                rows.push(Object.values(buildTable[i]));
            }

            console.log(rows);

            tablePara.textContent = rows  ;

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