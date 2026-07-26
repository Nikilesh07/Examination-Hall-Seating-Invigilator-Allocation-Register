
let records = JSON.parse(localStorage.getItem("records")) || [];

let editId = localStorage.getItem("editRecord");

if (editId) {
    let rec = records.find(r => r.id == editId);

    if (rec) {
        document.getElementById("studentName").value = rec.studentName;
        document.getElementById("registerNo").value = rec.registerNo;
        document.getElementById("subject").value = rec.subject;
        document.getElementById("hall").value = rec.hall;
        document.getElementById("seat").value = rec.seat;
        document.getElementById("session").value = rec.session;
        document.getElementById("invigilator").value = rec.invigilator;
    }
}
document.getElementById("recordForm").addEventListener("submit", function (e) {

    e.preventDefault();

    let studentName = document.getElementById("studentName").value.trim();
    let registerNo = document.getElementById("registerNo").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let hall = document.getElementById("hall").value;
    let seat = document.getElementById("seat").value.trim();
    let session = document.getElementById("session").value;
    let invigilator = document.getElementById("invigilator").value.trim();
    if (
        studentName === "" ||
        registerNo === "" ||
        subject === "" ||
        hall === "" ||
        seat === "" ||
        session === "" ||
        invigilator === ""
    ) {
        alert("Please fill all fields.");
        return;
    }
    let seatExists = records.some(r =>
        r.id != editId &&
        r.hall === hall &&
        r.seat === seat &&
        r.session === session
    );

    if (seatExists) {
        alert("Seat already allocated in this hall and session.");
        return;
    }
    let invigilatorExists = records.some(r =>
    r.id != editId &&
    r.invigilator.toLowerCase() === invigilator.toLowerCase() &&
    r.session === session &&
    r.hall !== hall
);
    if (invigilatorExists) {
        alert("This invigilator is already assigned in this session.");
        return;
    }
    let hallStudents = records.filter(r =>
        r.hall === hall &&
        r.id != editId
    ).length;

    if (hallStudents >= 40) {
        alert("Hall capacity exceeded.");
        return;
    }
    let newRecord = {
        id: editId ? Number(editId) : Date.now(),
        studentName,
        registerNo,
        subject,
        hall,
        seat,
        session,
        invigilator
    };

    if (editId) {
        records = records.filter(r => r.id != editId);
        localStorage.removeItem("editRecord");
    }

    records.push(newRecord);

    localStorage.setItem("records", JSON.stringify(records));

    alert("Record Saved Successfully!");

    window.location.href = "index.html";

});