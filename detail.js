let records = JSON.parse(localStorage.getItem("records")) || [];

let id = localStorage.getItem("selectedRecord");

let record = records.find(r => r.id == id);

document.getElementById("totalStudents").innerHTML = records.length;

document.getElementById("availableSeats").innerHTML = 40 - records.length;

let table = document.getElementById("detailTable");

if(record){

table.innerHTML=`

<tr>

<th>Student Name</th>

<td>${record.studentName}</td>

</tr>

<tr>

<th>Register Number</th>

<td>${record.registerNo}</td>

</tr>

<tr>

<th>Subject</th>

<td>${record.subject}</td>

</tr>

<tr>

<th>Hall</th>

<td>${record.hall}</td>

</tr>

<tr>

<th>Seat</th>

<td>${record.seat}</td>

</tr>

<tr>

<th>Session</th>

<td>${record.session}</td>

</tr>

<tr>

<th>Invigilator</th>

<td>${record.invigilator}</td>

</tr>

`;

}

document.getElementById("deleteBtn").onclick=function(){

if(confirm("Delete this record?")){

records=records.filter(r=>r.id!=id);

localStorage.setItem("records",JSON.stringify(records));

window.location="index.html";

}

};