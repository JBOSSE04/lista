google.charts.load('current', { packages: ['corechart', 'geochart'] });

        // Cargar las gráficas
        google.charts.setOnLoadCallback(drawCharts);

        // Datos iniciales  
        let congressData = [
           ['Partido', 'Diputados'],
            ['Partido 1', 110],
            ['Partido 2', 80],
            ['Partido 3', 50],
            ['Partido 4', 30],
            ['Otros', 20]
        ];

        // Datos actualizados para la animación
        let updatedCongressData = [
            ['Partido', 'Diputados'],
            ['Partido A', 130],
            ['Partido B', 80],
            ['Partido C', 60],
            ['Partido D', 30],
            ['Otros', 50]
        ];

        // Datos paises turisticos
        const tourismData = [
            ['Country', 'Visitors (millions)'],
            ['France', 89.4],
            ['Spain', 82.8],
            ['United States', 79.3],
            ['China', 62.9],
            ['Italy', 62.1]
        ];

        function drawCharts() {
            drawBarChart(congressData);
            drawPieChart(congressData);
            drawGeoChart(tourismData);

            // Cambiar los datos de las barras con la animacion
            setTimeout(() => {
                animateBarChart(updatedCongressData);
            }, 10000);
        }

        // Gráfico de Barras
        function drawBarChart(dataArray) {
            const data = google.visualization.arrayToDataTable(dataArray);
            const options = {
                title: 'Congreso de diputados',
                hAxis: { title: 'Diputados' },
                vAxis: { title: 'Partido' },
                animation: { duration: 1000, easing: 'out' }
            };
            const chart = new google.visualization.BarChart(document.getElementById('bar_chart'));
            chart.draw(data, options);
        }

        function animateBarChart(newDataArray) {
            const data = google.visualization.arrayToDataTable(newDataArray);
            const options = {
                title: 'Congreso de diputados. Actualizado',
                hAxis: { title: 'Diputados' },
                vAxis: { title: 'Partido' },
                animation: { duration: 1000, easing: 'inAndOut' }
            };
            const chart = new google.visualization.BarChart(document.getElementById('bar_chart'));
            chart.draw(data, options);
        }

        // Gráfico de Sectores
        function drawPieChart(dataArray) {
            const data = google.visualization.arrayToDataTable(dataArray);
            const options = {
                title: 'Representación en el Congreso de los Diputados',
                is3D: true
            };
            const chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
            chart.draw(data, options);
        }

        // Gráfico Geográfico
        function drawGeoChart(dataArray) {
            const data = google.visualization.arrayToDataTable(dataArray);
            const options = {
                title: 'Paises mas turisticos del mundo ',
                colorAxis: { colors: ['#e7f0fa', '#023858'] }
            };
            const chart = new google.visualization.GeoChart(document.getElementById('geo_chart'));
            chart.draw(data, options);
        }