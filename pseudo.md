name string;
date string;
amount string;
createRow = create new table row element;
newExpense array;

'Add Expense' button pressed;
IF name value not empty AND date value not empty AND amount value not empty:

    append name, date, amount (in that order) to newExpense arr;
    row = createRow;
    FUNCTION creates table fields & fill them with input values;
        calls next function:
    FUNCTION appends fields to row;
        returns filled row;
    FUNCTION creates delete button & appends it to row;
    FUNCTION takes row & appends it to table;

    FUNCTION deletes a row upon pressing its own 'x' btn;

    FUNCTION clear form fields;

ELSE
    alert "Please give name, date & amount of your expense item!";




[CLOSE TO JS]:

    FUNCTION makeTableFields()
        var i;
        FOR each value in newExpense:
            var field = create new table data element;
            var node = create text node containing that value;
            append node to field;
            call appendFields;
    
    FUNCTION appendFields:
        append field element to row;
        return row;
    
    FUNCTION addDeleteBtn(row):
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "x";
        deleteButton.setAttribute("onclick", "deleteItem(this)");
        li.appendChild(deleteButton);

    FUNCTION addRow:
        append row to table
    








[EXTRA CODE]:
var date-box = create new table data element;
    var date-node = create text node containing date value;
    append date-node to date-box;

    var amount-box = create new table data element;
    var amount-node = create text node containing amount value;
    append amount-node to amount-box;