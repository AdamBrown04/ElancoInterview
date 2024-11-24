async function getCountryFlag(country) {
    const url = 'https://countriesnow.space/api/v0.1/countries/flag/images';
    try {
        const response = await fetch(url); //sends a GET request to the specified url
        const data = await response.json(); //parses the JSON response
        const countryData = data.data.find(item => item.name.toLowerCase() === country.toLowerCase()); //finds the country data by name
        if (countryData) {
            console.log(`Flag of ${country}: ${countryData.flag}`);
            document.getElementById('flag').src = countryData.flag; //my code
            
        } else {
            console.log(`Country ${country} not found.`);
        }
    } catch (error) {
        console.error('Error fetching country flag:', error);
    }
}

getCountryFlag('');

export { getCountryFlag }; //exports the function getCountryFlag