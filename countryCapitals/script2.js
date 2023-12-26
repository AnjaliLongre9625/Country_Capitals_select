      // Sample data for demonstration purposes
const countriesData = [
    { name: "CANADA", capital: "OTTAWA", flag: "canadaflag.jpeg", flag1: "chinapm.jpg" },
    { name: "INDIA", capital: "NEW DELHI", flag: "indiaflag copy.jpeg", flag1: "indiapm.jpeg"},
    { name: "CHINA", capital: "BEIJING", flag: "chinaflag.png", flag1: "chinapm.jpg"},
    { name: "AUSTRALIA", capital: "CANBERRA", flag: "AUSFLAG.jpeg", flag1: "AusPM.jpg" },
    { name: "SWITZERLAND", capital: "BERN", flag: "switzerlandflag.jpeg", flag1: "switzerlandpm.jpeg"},
    ];
    
    const countrySelect = document.getElementById("country-select");
    const capitalElement = document.getElementById("capital");
    const flagElement = document.getElementById("flag");
    const flag1Element = document.getElementById("flag1");
    
    // Populate the country select options
    countriesData.forEach(country => {
        const option = document.createElement("option");
        option.text = country.name;
        countrySelect.add(option);
    });
    
// Event listener for select change
countrySelect.addEventListener("change", () => {
    const selectedCountry = countrySelect.value;
    const selectedData = countriesData.find(country => country.name === selectedCountry);
    
    if (selectedData) {
    capitalElement.textContent = selectedData.capital;
    flagElement.src = selectedData.flag;
    flag1Element.src = selectedData.flag1;
    } 
    else {
    capitalElement.textContent = "";
    flagElement1.src = "";
        }
    });
    