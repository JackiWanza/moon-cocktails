document.addEventListener("DOMContentLoaded", handleDOMContentLoaded)

function handleDOMContentLoaded(event) {
    // console.log(event.target);
    const cocktailsForm = document.querySelector("#cocktails-form")
    cocktailsForm.addEventListener("submit", (event) => {
        // function call
        handleCocktailsForm(event)
    })


}

// function definition
function handleCocktailsForm(event) {
    // prevent refresh behavior
    event.preventDefault()
    const cocktailsInput = document.querySelector("#cocktails-input").value
    // console.log(cocktailsInput);

    //    console.log(event.target);

    // function call  
    fetchCocktails(cocktailsInput)
}

// function definition
function fetchCocktails(cocktailsInput) {
    // console.log(cocktailsInput);
    // fetch API syntax
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailsInput}`).then((response) => {
        // converts to json then returns a promise
        return response.json()
    }).then((data) => {

        // console.log(data);
        displayCocktails(data)
    }).catch()


}
// function definition
function displayCocktails(data){
 console.log(data.drinks);
 const cocktails=document.querySelector("#cocktails")
 cocktails.innerHTML=""

//  iterate data.drinks
data.drinks.forEach((drink)=>{
    console.log(drink);

    // how to create a tag
    const li=document.createElement("li")
    li.innerHTML=`
    <img src="${drink.strDrinkThumb}"/>
    <p>name: ${drink.strDrink}</p>
    <p>alcoholic: ${drink.strAlcoholic}</p>
    <p>glass: ${drink.strGlass}</p>
    <p>category: ${drink.strCategory}</p>
    
    
    
    `
    // attach all li to ul container
    cocktails.appendChild(li)
})
}
