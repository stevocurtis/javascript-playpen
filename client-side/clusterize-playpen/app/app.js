buildAndDisplayData = function buildAndDisplayData() {
    var data = buildData(1000);
    displayTable(data);
}

buildData = function buildData(numRows) {
    var data = [];
    for (var i = 1; i <= numRows; i++) {
        data.push("<tr><td>" + i + "</td></tr>");
    }
    console.log("building data with numRows: " + numRows);
    return data;
}

displayTable = function displayTable(data) {
    var clusterize = new Clusterize({
        rows: data,
        scrollId: 'scrollArea',
        contentId: 'contentArea'
    });
}

exports.buildAndDisplayData = buildAndDisplayData;
exports.buildData = buildData;
exports.displayTable = displayTable;