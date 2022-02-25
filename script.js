var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["StudentName"] = document.getElementById("StudentName").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Gender"] = document.getElementById("Gender").value;
    formData["Website"] = document.getElementById("Website").value;
    formData["Skill"] = document.getElementById("Skill").value;
    formData["Phone"] = document.getElementById("Phone").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.StudentName;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Email;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Gender;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.Website;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.Skill;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.Phone;
    cell6 = newRow.insertCell(6);
        cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("StudentName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Gender").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Website").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Skill").value = selectedRow.cells[4].innerHTML;
    document.getElementById("Phone").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.StudentName;
    selectedRow.cells[1].innerHTML = formData.Email;
    selectedRow.cells[2].innerHTML = formData.Gender;
    selectedRow.cells[3].innerHTML = formData.Website;
    selectedRow.cells[4].innerHTML = formData.Skill;
    selectedRow.cells[5].innerHTML = formData.Phone;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("StudentName").value = '';
    document.getElementById("Email").value = '';
    document.getElementById("Gender").value = '';
    document.getElementById("Website").value = '';
    document.getElementById("Skill").value = '';
    document.getElementById("Phone").value = '';
    selectedRow = null;
}