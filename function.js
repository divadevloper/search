
let input = document.getElementById("inputone")
let display = document.getElementById("display")

function search() {
     fetch(`https://restcountries.com/v3.1/all`)
.then(fetcher => fetcher.json())
.then(data => {console.log(data)
    let serchterms = input.value
    let countrynames = data.filter( country => country.name.common.toLowerCase().startsWith(serchterms.toLowerCase()))
    // console.log(serchterms);
    console.log(countrynames);
    countrynames.forEach(element => {
        display.innerHTML += element.name.common + "<br/> "               
       serchterms = " "
    });
})

}