//MIT license modified plugins from mdbootstrap.com:
$(document).ready(function() {
    $('#databoard').DataTable();
});


var ctxP = document.getElementById("pie_chart").getContext('2d');
var myPieChart = new Chart(ctxP, {
type: 'pie',
data: {
labels: ["Sci-Fi", "Comedy", "Drama", "Action", "Romance"],
datasets: [{
data: [100, 120, 60, 150, 40],
backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
}]
},
options: {
responsive: true
}
});

new Chart(document.getElementById("horizontal_bar"), {
"type": "horizontalBar",
"data": {
"labels": ["Website visits", "Total sales", "New users", "Movie bookings"],
"datasets": [{
"label": "Today",
"data": [7215, 6080, 261, 345],
"fill": false,
"backgroundColor": ["rgba(255, 99, 132, 0.5)", "rgba(255, 159, 64, 0.5)",
"rgba(255, 205, 86, 0.5)", "rgba(75, 192, 192, 0.5)"
],
"borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
"rgb(75, 192, 192)"
],
"borderWidth": 2
}]
},
"options": {
"scales": {
"xAxes": [{
"ticks": {
"beginAtZero": true
}
}]
}
}
});

var ctxL = document.getElementById("line_chart").getContext('2d');
var myLineChart = new Chart(ctxL, {
type: 'line',
data: {
labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
datasets: [{
label: "2018",
data: [210000, 190000, 160000, 170000, 150000, 200000, 180000, 190000, 175000, 165000, 215000, 150000],
backgroundColor: [
'rgba(105, 0, 132, .2)',
],
borderColor: [
'rgba(200, 99, 132, .7)',
],
borderWidth: 2
},
{
label: "2019",
data: [175000, 190000, 220000, 180000, 170000, 215000, 200000, 235000, 220000, 210000, 210000, 225000],
backgroundColor: [
'rgba(0, 137, 132, .2)',
],
borderColor: [
'rgba(0, 10, 130, .7)',
],
borderWidth: 2
}
]
},
options: {
responsive: true
}
});