function addStudent() {
    var studentId = document.getElementById("studentId").value;
    var studentName = document.getElementById("studentName").value;
    var studentType = document.getElementById("studentType").value;
    var mathScore = parseFloat(document.getElementById("mathScore").value);
    var literatureScore = parseFloat(document.getElementById("literatureScore").value);

    var averageScore = (mathScore + literatureScore) / 2;
    var classification = '';

    if (averageScore >= 9) {
        classification = 'Xuất Sắc';
    } else if (averageScore >= 7) {
        classification = 'Giỏi';
    } else if (averageScore >= 5) {
        classification = 'Khá';
    } else {
        classification = 'Yếu';
    }

    var table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();

    newRow.insertCell(0).innerText = studentId;
    newRow.insertCell(1).innerText = studentName;
    newRow.insertCell(2).innerText = studentType;
    newRow.insertCell(3).innerText = mathScore;
    newRow.insertCell(4).innerText = literatureScore;
    newRow.insertCell(5).innerText = averageScore.toFixed(2);
    newRow.insertCell(6).innerText = classification;

    var actionsCell = newRow.insertCell(7);
    actionsCell.innerHTML = `<button class="btn btn-warning btn-sm" onclick="editStudent(this)">Sửa</button> 
                             <button class="btn btn-danger btn-sm" onclick="deleteStudent(this)">Xóa</button>`;

    document.getElementById("studentForm").reset();
}

function editStudent(button) {
    var row = button.parentNode.parentNode;
    document.getElementById("studentId").value = row.cells[0].innerText;
    document.getElementById("studentName").value = row.cells[1].innerText;
    document.getElementById("studentType").value = row.cells[2].innerText;
    document.getElementById("mathScore").value = row.cells[3].innerText;
    document.getElementById("literatureScore").value = row.cells[4].innerText;

    row.parentNode.removeChild(row);
}

function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}