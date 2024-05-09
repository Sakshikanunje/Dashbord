const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

const charts = document.querySelectorAll(".charts");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Request",
          data: [20, 10, 5, 8, 2],
          backgroundColor: [
           "green",
           "green",
           "green",
           "green",
           "green",
           "green",
          ],
          borderColor: [
            "green",
           "green",
           "green",
           "green",
           "green",
           "green",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});


const chartt = document.querySelectorAll(".chartt");

chartt.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Blood Request",
          data: [12, 19, 3, 5, 2],
          backgroundColor: "rgba(255, 99, 132, 1)",
          borderColor: "red",
          borderWidth: 1,
        },
        {
          label: "Approved",
          data: [3, 5, 2, 7, 10],
          backgroundColor:"rgba(54, 162, 235, 1)",
          borderColor: "blue",
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: 'x', // Change the index axis to x to make it grouped
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});


