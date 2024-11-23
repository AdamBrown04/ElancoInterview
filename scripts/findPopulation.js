const url = 'https://countriesnow.space/api/v0.1/countries/population';

async function getPopulationData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error('Error fetching data:', data.msg);
            return;
        }

        const populationData2018 = data.data.map(country => {
            const population2018 = country.populationCounts.find(pop => pop.year === 2018);
            return {
                country: country.country,
                population: population2018 ? population2018.value : 'Data not available'
            };
        });

        console.log(populationData2018);
    } catch (error) {
        console.error('Error:', error);
    }
}
isUndefined(getPopulationData());
async function generatePopulationTable() {
    const populationData = await getPopulationData(); //popdata is not an array according to isArray
    const table = document.getElementById('population-table');

    populationData.forEach(country => {
        const row = document.createElement('tr');
        const flagCell = document.createElement('td');
        const countryCell = document.createElement('td');
        const populationCell = document.createElement('td');

        countryCell.textContent = country.country;
        populationCell.textContent = country.population;

        row.appendChild(countryCell);
        row.appendChild(populationCell);

        table.appendChild(row);
    });
}


generatePopulationTable();

/*
 <tr>
    <td></td>
    <td></td>
    <td></td>
</tr>
*/