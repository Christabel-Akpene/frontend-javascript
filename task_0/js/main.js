var student1 = {
    firstName: "Akua",
    lastName: "Manu",
    age: 20,
    location: "Kumasi"
};
var student2 = {
    firstName: "Kofi",
    lastName: "Yeboah",
    age: 18,
    location: "Accra"
};
var studentList = [student1, student2];
var table = document.createElement("table");
document.body.appendChild(table);
studentList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
