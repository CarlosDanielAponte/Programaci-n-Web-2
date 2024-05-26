function parseCSV(csvData) {
    const rows = csvData.split('\n');
    const tableBody = document.querySelector('#csvTable tbody');
    rows.forEach(row => {
        const colums = row.split(',');
        const tr = document.createElement('tr');
        colums.forEach(column => {
            const td = document.createElement('td');
            td.textContent = column;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

function readCSV(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        const csvData = e.target.result;
        parseCSV(csvData);
    }
    reader.readAsText(file);
}

document.querySelector('input[type="file"]').addEventListener('change', function (e) {
    const file = e.target.files[0];
    readCSV(file);
});


document.querySelector('#addDataButton').addEventListener('click', function () {
    const table = document.querySelector('#csvTable tbody');
    const newRow = document.createElement('tr');
    const col1 = prompt('Ingrese su nombre:');
    const col2 = prompt('Ingrese su correo:');
    const col3 = prompt('Ingrese edad:');
    
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    
    td1.textContent = col1;
    td2.textContent = col2;
    td3.textContent = col3;
    
    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(td3);
    
    table.appendChild(newRow);
});

document.querySelector('#deleteDataButton').addEventListener('click', function () {
    const table = document.querySelector('#csvTable tbody');
    const selectedRows = document.querySelectorAll('#csvTable tbody tr.selected');
    selectedRows.forEach(row => {
        table.removeChild(row);
    });
});

document.querySelector('#csvTable tbody').addEventListener('click', function (e) {
    const row = e.target.closest('tr');
    if (row) {
        row.classList.toggle('selected');
    }
});