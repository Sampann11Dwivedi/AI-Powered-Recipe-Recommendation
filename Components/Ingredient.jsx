import { Fragment } from "react"

export default function Ingridient(prop) {

    let ingredientData = prop.ingredients.map(n => <li key={n}>{n}</li>)
     console.log(import.meta.env.VITE_CHEF_API)

    return (
        // <div className="Ingredient">
        <Fragment>
            {
                ingredientData.length > 0 &&
                <div className="ingredient">
                    <h2>Ingridient On Hand</h2>
                    <ul>
                        {ingredientData}
                    </ul>
                </div>
            }

            {
                ingredientData.length >= 4 && <div className="getRecipe">
                    <h2>Ready for recpie</h2>
                    <div className="recip">
                        <p>Gnerate a repicpe from your list of ingrideint</p>
                        <button onClick={prop.handleRecipeShown}>Get A Recpipe</button>
                    </div>
                </div>
            }
            </Fragment>
    )
}