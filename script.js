let searchBtn = document.getElementById("search-btn")
let countryInp = document.getElementById("country-inp")
let result = document.getElementById("result"); 


searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    

    console.log(finalUrl)

    fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0])
        result.innerHTML = `<img src="${data[0].flags.svg}" class = "flag-img">
        <h2>${data[0].name.common}</h2> 
        <div class="wrapper" >
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div> 
        <div class="wrapper" >
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div> 
        <div class="wrapper" >
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population.toLocaleString()/*.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")  rovnake riesenie*/}</span>   
            </div>
        </div> 
        <div class="wrapper" >
            <div class="data-wrapper">
                <h4>Currencies:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name}
                - ${Object.keys(data[0].currencies)}, 
                1000 ${data[0].currencies[Object.keys(data[0].currencies)].symbol}</span>
            </div>
        </div> 
        <div class="wrapper" >
            <div class="data-wrapper">
                <h4>Languages:</h4>
                <span>${Object.keys(data[0].languages).map( languageCode => {
                    const languageName = data[0].languages[languageCode]
                    return `${languageName} (${languageCode})`
                }).join(", ")}</span>
            </div>
        </div>        
        `
  
    })
   
})
