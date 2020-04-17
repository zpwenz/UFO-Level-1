// from data.js
var tableData = data;
var tbody = d3.select("tbody");

function maketable(uforeport) {
    d3.select("tbody").html("");
    uforeport.forEach(function (record) {
        var row = tbody.append("tr");
        Object.entries(record).forEach(function ([key, value]) {

            var cell = row.append("td");
            cell.text(value);
        });
    });
};
maketable(tableData);

var button = d3.select("#filter-btn");

button.on("click", function () {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    d3.select("tbody").selectAll("tr").remove();
    var filteredData = data.filter(data => data.datetime === inputValue);
    

    console.log(filteredData)
    
    maketable(filteredData);
});

