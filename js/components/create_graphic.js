let myChart; 
printGraphic("cholesterol_levels")

async function getData(resource) {
    const response = await fetch(`js/data/${resource}.json`);
    const data = await response.json();
    return data;
}

function printGraphic(resource) {

    let graphic_title = resource.replace("_", " "); graphic_title = graphic_title.charAt(0).toUpperCase() + graphic_title.slice(1).toLowerCase();
    document.querySelector(".graphic__title").innerHTML = graphic_title

    getData(resource).then(data => {

        const date = []; const values = []; const last_value = data.length - 1; const cant = last_value - 5

        for (let i = last_value; i > cant; i--) {
            date.push(data[i]["date"]);
            values.push(data[i]["value"]);
        }
        
        let prom = 0;for (let i = 0; i < values.length; i++) {prom = prom + parseInt(values[i])};average_value = prom / 5
        document.querySelector("#average__value").innerHTML = average_value

        let max_value = Math.max(...values);document.querySelector("#maximum__value").innerHTML = max_value
        let min_value = Math.min(...values);document.querySelector("#minimum__value").innerHTML = min_value

        var datos = {
            labels: date,
            datasets: [{
                label: '',/*En caso de que sea grafico de barra se puede poner un label sobre lo que estas mostrando*/
                data: values,
                backgroundColor: "rgb(245,200,140)",
                borderWidth: 1 //Ancho del borde de las barras
            }]
        };

        // ConfiguraciÃ³n del grÃ¡fico
        var config = {
            type: 'bar', /*doughnut - bar*/
            data: datos,
            options: {
                indexAxis: 'x', //Y: barras horizontales ; X: barras verticales
                plugins: {
                    legend: {
                        position: 'top'
                    }
                }
            }
        };

        // Obtener el contenedor del grÃ¡fico
        var chartContainer = document.getElementById('chart-container');

        // Si existe, destruye el grafico
        if (myChart) { myChart.destroy(); }

        //Crea el grafico
        myChart = new Chart(
            document.getElementById('donutChart'),
            config
        );

        // FunciÃ³n para actualizar el tamaÃ±o del grÃ¡fico cuando cambia el tamaÃ±o del contenedor
        function updateChartSize() {
            var containerWidth = 350;
            var containerHeight = 180;

            myChart.canvas.parentNode.style.width = containerWidth + 'px';
            myChart.canvas.parentNode.style.height = containerHeight + 'px';
            myChart.canvas.width = containerWidth;
            myChart.canvas.height = containerHeight;
            myChart.resize();
        }

        // Actualizar el tamaÃ±o del grÃ¡fico al cargar la pÃ¡gina y al cambiar el tamaÃ±o de la ventana
        window.addEventListener('load', updateChartSize);
        window.addEventListener('resize', updateChartSize);

    })
}