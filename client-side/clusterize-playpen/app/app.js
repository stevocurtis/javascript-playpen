function buildAndDisplayData() {
    var data = buildData(10);
    displayTable(data);
}

function buildData(numRows) {
    updateNotifications("building " + numRows + " data rows");
    var data = {};
    for (var i = 1; i <= numRows; i++) {
        data[i] = {
            column1: "col " + i + " val1",
            column2: "co2 " + i + " val2",
            column3: "co3 " + i + " val3"
        }
    }
    console.log("building data with numRows: " + numRows);
    return data;
}

function displayTable(data) {
    updateNotifications("rendering data rows");
}

function updateNotifications(notification) {
    document.getElementById("notifications").innerText = notification;
}

function testFunction() {
    return true;
}