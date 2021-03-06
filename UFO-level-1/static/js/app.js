// from data.js
var tableData = data;

// console.log(tableData);
// YOUR CODE HERE!
console.log("app.js is loaded!")

// select the table body
var tbody = d3.select("tbody");

function create_table(ufoData) {
    tbody.html('');

    console.log("create table function was called");
    ufoData.forEach(function(ufo) {
        // console.log(ufoData);
        var row = tbody.append("tr");

        Object.values(ufo).forEach(function(value) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

var button = d3.select("#filter-btn");

button.on("click", handleClick);

function handleClick() {
    d3.event.preventDefault();
    console.log("button was clicked");
    var inputText = d3.select("#datetime");
    console.log(inputText);
    var inputValue = inputText.property("value");
    console.log("inputValue", inputValue);
    var filterData = tableData;
    if (inputText != "") {
       filterData = filterData.filter(function(filterRow) {
            if (filterRow.datetime === inputValue) {
                return true;
            };            
        });
        console.log(filterData);

        create_table(filterData);
    };
};

create_table(tableData);


