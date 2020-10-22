let name = '';
let date = '';
let amount = '';
let inputArr = [];
let createRow = document.createElement(tr); //???may need to do this in a function instead???
let fieldArr = [];

// Check whether input fields were all filled by user, if so then fill inputArr with the input values
function fillInputArray() {
    name = document.getElementById("name-field").value; //try merging these into initial let declarations (after this code passes testing)
    date = document.getElementById("date-field").value;
    amount = document.getElementById("amount-field".value);

    if(name != '' && date != '' && amount != '') {
        inputArr.push(name);
        inputArr.push(date);
        inputArr.push(amount);
        return inputArr;
    } else {
        alert("Please fill in all 3 fields!")
    }
}

// create table fields containing the input values from inputArr, & put them into fieldArr
function makeTableFields() {
    let i;
    for(i=0; i<inputArr.length; i++) {
        let field = document.createElement("td");
        let node = document.createTextNode(inputArr[i].value);
        field.appendChild(node);
        fieldArr.push(field);
    }
    appendToRow(feildArr);
}

// create new table row; fill it with the fields from fieldArr
function appendToRow() {
    row = createRow;
    let i;
    for(i=0; i<fieldArr.length; i++) {
        row.appendChild(fieldArr[i]);
        addDeleteButton(row);
    }
}

// create delete btn; append it to row
function addDeleteButton(row) {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.setAttribute("onclick", "deleteRow(this)");  
    row.appendChild(deleteButton);
    addRowToTbl(row);
}

// append completed new row to table of expenses
function addRowToTbl() {
    let tbl = document.getElementById("exp-table");
    let node = document.createTextNode("row");
    tbl.appendChild(node);
    clearFormFields();    
}

// delete a row when its 'x' button is clicked
function deleteRow(this) {
    this.parentNode.remove(); //???not sure using 'this' will work??
}

// clear input fields in form
function clearFormFields() {
    document.getElementsByTagName("input").value = '';
}

