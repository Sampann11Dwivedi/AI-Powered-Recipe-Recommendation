import React from "react"
import ClaudeRecipe from "./RecipeShown"
import IngridientList from "./Ingredient";


export default function Body() {

    let ingredients = ["Chicken", "Oregano", "Tomatoes"]
    let [Ingredients,setIngredients] =  React.useState(ingredients);
    let [recipeShown,setRecipeShown] = React.useState(false);

    async function handleAction(formData) {
        console.log(formData);
        
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient)
        if(newIngredient == "") return ;
        setIngredients(Ingredients => [...Ingredients,newIngredient])
        console.log(Ingredients);        
    }


    async function handleRecipeShown()
    {
        setRecipeShown(rec => !rec);

    }
        
    return (
        <div className="mainBody">
            <div className="inputFields">
              <form  action = {handleAction} className="asd">
                <input type="text"
                placeholder="e.g oregano"
                aria-label="+Add Ingredient" 
                name="ingredient"
                />
                <button>+ Add Ingredient</button>
            </form>
            </div>
   
            {ingredients.length>0 &&  
                        //  <div className="ingredient">
                        //  {/* <h2>Ingridient On Hand</h2> */}
                        //  <ul>
                            //  {/* {ingredientData} */}
                             <IngridientList ingredients = {Ingredients} handleRecipeShown = {handleRecipeShown} />
                        //  </ul>
                    //  </div>
                      }
            {recipeShown && <ClaudeRecipe/>}
        </div>
        
    )
}


    // let ingredientData = Ingredients.map(n => <li key ={n}>{n}</li> )

    // function handleSubmit(event) {
    //     event.preventDefault()
    //     // console.log("asdfa");
    //     const formEl = event.currentTarget
    //     const formData = new FormData(formEl)

    //     const newIngredient = formData.get("ingredient")
    //     console.log(newIngredient)
    //     if(newIngredient == "") return ;
    //     // ingredientData = ingredientData.push(newIngredient)
    //     // let ingredientElement = <li key = {newIngredient}>{newIngredient}</li>
    //     // ingredientData.push(ingredientElement);
            // formData.reset()
    //     setIngredients(Ingredients => [...Ingredients,newIngredient])
    //     console.log(Ingredients);        
    // }
