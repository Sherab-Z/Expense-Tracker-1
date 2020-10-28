// gets input values & adds them to a new row at bottom of the table
function addRowToTable() {
    // get form input values
    let name = document.getElementById("name-field").value;
    let date = document.getElementById("date-field").value;
    let amount = document.getElementById("amount-field").value;

    if(name == '' || date == '' || amount == '') {
        alert("Please fill in all 3 fields!");
    } else {
    // gathering data from user input
    let name = document.getElementById("name-field").value;
    let date = document.getElementById("date-field").value;
    let amount = document.getElementById("amount-field").value;
    // getting table element
    let table = document.getElementById("exp-table");
    // creating new row
    let row = table.insertRow(table.length);
    // creating new cells in row
    let nameCell = row.insertCell(-1);
    let dateCell = row.insertCell(-1);
    let amountCell = row.insertCell(-1);
    
 
    // placing input data & delete btn into cells
    nameCell.innerHTML = name;
    dateCell.innerHTML = date;
    amountCell.innerHTML = amount;
    addDeleteButton(row);
    clearFormFields();
    return false;
    }
}

//  creates & appends delete btn to new row
function addDeleteButton(row) {
    let deleteBtnCell = row.insertCell(-1);
    const deleteButton = document.createElement("input");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("value", "x");
    deleteButton.setAttribute("onclick", "deleteRow(this)");  
    deleteBtnCell.appendChild(deleteButton);
    row.appendChild(deleteBtnCell);
}

// clears user input from form fields
function clearFormFields() {
    let formFieldsArr = document.getElementsByClassName("form-control");
    let i;
    for(i=0; i < formFieldsArr.length; i++) {
        formFieldsArr[i].value = "";
    }
}

// when user clicks a row's delete btn, this function deletes that row
function deleteRow(r) {
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById("exp-table").deleteRow(i);
}