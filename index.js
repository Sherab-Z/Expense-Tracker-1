function getInput() {
    let inputArr = [];
    let name = document.getElementById("name-field").value;
    let date = document.getElementById("date-field").value;
    let amount = document.getElementById("amount-field").value;

    if(name != '' && date != '' && amount != 0) {
        inputArr.push(name);
        inputArr.push(date);
        inputArr.push(amount); 
        // test logs
        console.log(name);
        console.log(date);
        console.log(amount);
        console.log("fillInputArr() successfully called; result: " + inputArr);
        // end of test logs
        makeTableFields(inputArr);
    } else {
        alert("Please fill in all 3 fields!")
    }
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
    console.log("makeTableFields() successfully called; result: " + fieldArr);
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

function addDeleteButton(newRow) {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.setAttribute("onclick", "deleteRow(this)");  
    newRow.appendChild(deleteButton);
    console.log("addDeleteButton() successfully called; result: " + newRow);
    addRowToTbl(newRow);
}

function addRowToTbl(newRow) {
    let tbl = document.getElementById("exp-table");
    let node = document.createTextNode(newRow);
    tbl.appendChild(node);
    console.log("addRowToTbl successfully called; result: " + tbl);
    //clearFormFields();    
}

