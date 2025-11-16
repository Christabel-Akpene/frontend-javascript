interface Student  {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Akua",
    lastName: "Manu",
    age: 20,
    location: "Kumasi"
}

const student2: Student = {
    firstName: "Kofi",
    lastName: "Yeboah",
    age: 18,
    location: "Accra"
}

const studentList: Student[] = [student1, student2]

const table = document.createElement("table");
document.body.appendChild(table);

studentList.forEach((student) => {
    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);

})