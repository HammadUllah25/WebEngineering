function addRowToTable(tableId, nameId, cityId, ageId, phoneId, yearId) {
    const name = document.getElementById(nameId).value;
    const city = document.getElementById(cityId).value;
    const age = document.getElementById(ageId).value;
    const phone = document.getElementById(phoneId).value;
    const year = document.getElementById(yearId).value;

    if (!name || !city || !age || !phone || !year) {
        alert("Please fill out all fields");
        return;
    }

    const table = document.getElementById(tableId);
    let tbody = table.getElementsByTagName('tbody')[0];

    // If <tbody> does not exist, create it and append it to the table
    // if (!tbody) {
    //     tbody = document.createElement('tbody');
    //     table.appendChild(tbody);
    // }

    // Create a new row and cells
    const newRow = tbody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    // Add the user data to the cells
    cell1.innerHTML = name;
    cell2.innerHTML = city;
    cell3.innerHTML = age;
    cell4.innerHTML = phone;
    cell5.innerHTML = year;

    // Clear the input fields
    document.getElementById(nameId).value = "";
    document.getElementById(cityId).value = "";
    document.getElementById(ageId).value = "";
    document.getElementById(phoneId).value = "";
    document.getElementById(yearId).value = "";
}
