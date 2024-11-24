import { getCountryFlag } from './flags.js';
const url = 'https://countriesnow.space/api/v0.1/countries/population';


async function getPopulationData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            console.error('Error fetching data:', data.msg);
            return [];
        }

        return data.data.map(country => {
            const population2018 = country.populationCounts.find(pop => pop.year === 2018);
            return {
                country: country.country,
                population: population2018 ? population2018.value : 'Data not available'
            };
        });
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

async function generatePopulationTable() {
    const populationData = await getPopulationData();
    if (!Array.isArray(populationData)) {
        console.error('Expected populationData to be an array, but got:', typeof populationData);
        return;
    }
    const tableBody = document.querySelector('#population-table tbody');

    for (let i = 46; i < populationData.length; i++) {
        const country = populationData[i];
        const row = document.createElement('tr');
        const flagCell = document.createElement('td');
        const countryCell = document.createElement('td');
        const populationCell = document.createElement('td');

        // Create an img element and set its src attribute
        const flagImg = document.createElement('img');
        flagImg.src = await getCountryFlag(country.country);
        flagImg.alt = `Flag of ${country.country}`;
        flagImg.classList.add('flag'); // Add a class for styling if needed

        // Append the img element to the flagCell
        flagCell.appendChild(flagImg);
        countryCell.textContent = country.country;
        populationCell.textContent = country.population;

        row.appendChild(flagCell);
        row.appendChild(countryCell);
        row.appendChild(populationCell);

        tableBody.appendChild(row);
    }
}

generatePopulationTable();
