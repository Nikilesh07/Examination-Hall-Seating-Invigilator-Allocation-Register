let records = JSON.parse(localStorage.getItem("records")) || [];

function loadData() {
    if (records.length === 0) {
        fetch("data/records.json")
            .then(response => response.json())
            .then(data => {
                records = data;
                localStorage.setItem("records", JSON.stringify(records));
                displayRecords(records);
            })
            .catch(() => {
                document.getElementById("tableBody").innerHTML = `
                <tr>
                    <td colspan="8">Unable to load records.</td>
                </tr>`;
            });
    } else {
        displayRecords(records);
    }
}

function displayRecords(data) {
    const table = document.getElementById("tableBody");

    document.getElementById("recordCount").innerHTML = `Showing ${data.length} Records`;

    if (document.getElementById("studentCount")) {
        document.getElementById("studentCount").innerHTML = records.length;

        const halls = [...new Set(records.map(r => r.hall))];
        document.getElementById("hallCount").innerHTML = halls.length;

        const invigilators = [...new Set(records.map(r => r.invigilator))];
        document.getElementById("invigilatorCount").innerHTML = invigilators.length;
    }

    if (data.length === 0) {
        table.innerHTML = `
        <tr>
            <td colspan="8">No Records Found</td>
        </tr>`;
        return;
    }

    table.innerHTML = "";

    data.forEach(record => {
        table.innerHTML += `
        <tr>
            <td>${record.studentName}</td>
            <td>${record.registerNo}</td>
            <td>${record.subject}</td>
            <td>${record.hall}</td>
            <td>${record.seat}</td>
            <td>${record.session}</td>
            <td>${record.invigilator}</td>
            <td>
                <button onclick="viewRecord(${record.id})">View</button>
                <button onclick="editRecord(${record.id})">Edit</button>
            </td>
        </tr>
        `;
    });
}

function filterData() {
    const search = document.getElementById("search").value.toLowerCase();
    const hall = document.getElementById("hallFilter").value;

    const filtered = records.filter(record => {
        const matchSearch =
            record.studentName.toLowerCase().includes(search) ||
            record.registerNo.toLowerCase().includes(search);

        const matchHall =
            hall === "All" || record.hall === hall;

        return matchSearch && matchHall;
    });

    displayRecords(filtered);
}

function viewRecord(id) {
    localStorage.setItem("selectedRecord", id);
    window.location.href = "detail.html";
}

function editRecord(id) {
    localStorage.setItem("editRecord", id);
    window.location.href = "add.html";
}

document.getElementById("search").addEventListener("input", filterData);
document.getElementById("hallFilter").addEventListener("change", filterData);

loadData();