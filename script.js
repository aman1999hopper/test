document.getElementById("gobutton").addEventListener("click", function(){
    let firstValue = document.getElementById("dropdown1").value;
    let secondValue = document.getElementById("dropdown2").value;

    const apiURL = `https://financialmodelingprep.com/api/v3/search-ticker?query=${firstValue}&limit=10&exchange=NASDAQ&apikey=tcS9Ooe2ldE1lHqwzx1KjOqzDz5GJktF`;
     
    // console.log(apiURL)

    fetch(apiURL)
    .then(response => {
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        // Your code to display the chart data goes here. For example:
        // document.getElementById("chart").innerHTML = data.chart.result[0].meta.chartPreviousCloseDate;
    })
    .catch(error => console.log(error));
});                