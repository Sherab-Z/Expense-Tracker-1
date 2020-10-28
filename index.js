// @ts-check

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

function addDeleteButton(row) {
    let deleteBtnCell = row.insertCell(-1);
    const deleteButton = document.createElement("input");
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("value", "x");
    deleteButton.setAttribute("onclick", "deleteRow(this)");  
    deleteBtnCell.appendChild(deleteButton);
    row.appendChild(deleteBtnCell);
    console.log("addDeleteButton() successfully called; result: " + row);
}

function clearFormFields() {
    let formFieldsArr = document.getElementsByClassName("form-control");
    let i;
    for(i=0; i < formFieldsArr.length; i++) {
        formFieldsArr[i].value = "";
    }
}


function deleteRow(r) {
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById("exp-table").deleteRow(i);
}

/*function deleteRow(this) {
    this.parentNode.remove(); //???not sure using 'this' will work??
    console.log("deleteRow() successfully called; result: (see for yourself - is the target row gone?");
}
*/
/*function getInput() {
    let inputArr = [];
    

    
}

function makeTableFields(inputArr) {
    let fieldArr = [];
    let i;
    for(i=0; i<inputArr.length; i++) {
        let field = document.createElement("td");
        let node = document.createTextNode(inputArr[i]);
        field.appendChild(node);
        fieldArr.push(field);
    }
    console.log("makeTableFields() successfully called; result: " + fieldArr[0]);
    appendToRow(fieldArr);
}

// create new table row; fill it with the fields from fieldArr
function appendToRow(fieldArr) {
    let newRow = document.createElement("tr");
    let i;
    for(i=0; i<fieldArr.length; i++) {
        newRow.appendChild(fieldArr[i]);
        console.log("appendToRow() successfully called; result: " + newRow);
        addDeleteButton(newRow);
    }
}



function addRowToTbl(newRow) {
    let tbl = document.getElementById("exp-table");
    let node = document.createTextNode(newRow);
    tbl.appendChild(node);
    console.log("addRowToTbl successfully called; result: " + tbl);
    //clearFormFields();    
}



*/