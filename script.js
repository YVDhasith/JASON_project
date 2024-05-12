function getStudent() {
    const studentId = document.getElementById('studentId').value;
    fetch(`student.php?sid=${studentId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('studentData').innerText = JSON.stringify(data, null, 2);
        })

}

function getAllStudent() {
    const studentId = document.getElementById('studentId').value;
    fetch(`all_students.php`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('studentData').innerText = JSON.stringify(data, null, 2);
        })

}