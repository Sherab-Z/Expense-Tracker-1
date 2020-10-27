// @ts-check



function addRowToTable() {
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
}

function addDeleteButton(row) {
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    deleteButton.setAttribute("onclick", "deleteRow(this)");  
    row.appendChild(deleteButton);
    console.log("addDeleteButton() successfully called; result: " + row);
}

/*function deleteRow(this) {
    this.parentNode.remove(); //???not sure using 'this' will work??
    console.log("deleteRow() successfully called; result: (see for yourself - is the target row gone?");
}
*/
/*function getInput() {
    let inputArr = [];
    let name = document.getElementById("name-field").value;
    let date = document.getElementById("date-field").value;
    let amount = document.getElementById("amount-field").value;

    if(name == '' && date == '' && amount == '') {
        alert("Please fill in all 3 fields!");
    } else {
        inputArr.push(name);
        inputArr.push(date);
        inputArr.push(amount); 
        // test logs
        console.log(name);
        console.log(date);
        console.log(amount);
        console.log("getInput() successfully called; result: " + inputArr);
        // end of test logs
        makeTableFields(inputArr);
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

//function clearFormFields() {
 //   document.getElementsByTagName("input")
//    console.log("clearFormFields() successfully called; result: (see for yourself - are the form feilds empty?");
//}


*/