import React, { useEffect, useState } from 'react';
import { API_ID, API_KEY } from '../../Config'

function RecipePage(props) {
    const [Recipe, setRecipe] = useState([])
    useEffect(() => {
        fetch(`https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${props.match.params.recipe_uri}&app_id=${API_ID}&app_key=${API_KEY}`)
            .then(response => response.json())
            .then(response => {
                if (response.length > 0) {
                    setRecipe(response[0])
                }

            })
    }, [])

    return (
        <div >
            {Recipe.hasOwnProperty("url") ?
                <div className="grid-container col-two card-background width-85 recipe-container" style={{ margin: "auto", gap: "2rem" }}>
                    <div>
                        <img src={Recipe.image} alt="recipe-image"></img>
                        <h3>{Recipe.label}</h3>
                        <hr />
                        <h3>Ingredients</h3>
                        {Recipe.ingredientLines.map((ingredients, index) => (
                            <h4 className="light" key={index}>{ingredients}</h4>
                        ))
                        }
                        <hr />
                        <h3>Preparation</h3>
                        <br />
                        <a href={Recipe.url} className="preparation-link">Instructions</a>
                        <h4 className="light">Author: {Recipe.source}</h4>
                    </div>
                    <div>
                        <h3>Nutrition</h3>
                        <hr />
                        <div className="grid-container col-three">
                            <div>
                                <h4 className="light">{Math.round(Recipe.totalNutrients.ENERC_KCAL.quantity / Recipe.yield)}</h4>
                                <h4 className="light">Calories</h4>
                            </div>
                            <div>
                                <h4 className="light">{Math.round(Recipe.totalDaily.ENERC_KCAL.quantity / Recipe.yield)}</h4>
                                <h4 className="light">Daily Value</h4>
                            </div>
                            <div>
                                <h4 className="light">{Recipe.yield}</h4>
                                <h4 className="light">Servings</h4>
                            </div>
                        </div>
                        <hr />
                        <h4>Macros</h4>
                        <h4>Fat <span className="light">{Math.round(Recipe.totalNutrients.FAT.quantity / Recipe.yield)}{Recipe.totalNutrients.FAT.unit}</span></h4>
                        <h4>Carbs <span className="light">{Math.round(Recipe.totalNutrients.CHOCDF.quantity / Recipe.yield)}{Recipe.totalNutrients.CHOCDF.unit}</span></h4>
                        <h4>Cholesterol <span className="light">{Math.round(Recipe.totalNutrients.CHOLE.quantity / Recipe.yield)}{Recipe.totalNutrients.CHOLE.unit}</span></h4>
                        <h4>Sodium <span className="light">{Math.round(Recipe.totalNutrients.NA.quantity / Recipe.yield)}{Recipe.totalNutrients.NA.unit}</span></h4>
                        <h4>Magnesium <span className="light">{Math.round(Recipe.totalNutrients.MG.quantity / Recipe.yield)}{Recipe.totalNutrients.MG.unit}</span></h4>
                        <h4>Potassium <span className="light">{Math.round(Recipe.totalNutrients.K.quantity / Recipe.yield)}{Recipe.totalNutrients.K.unit}</span></h4>
                        <h4>Iron <span className="light">{Math.round(Recipe.totalNutrients.FE.quantity / Recipe.yield)}{Recipe.totalNutrients.FE.unit}</span></h4>
                        <h4>Zinc <span className="light">{Math.round(Recipe.totalNutrients.ZN.quantity / Recipe.yield)}{Recipe.totalNutrients.ZN.unit}</span></h4>
                        <h4>Phosphorus <span className="light">{Math.round(Recipe.totalNutrients.P.quantity / Recipe.yield)}{Recipe.totalNutrients.P.unit}</span></h4>
                        <h4>Vitamin A <span className="light">{Math.round(Recipe.totalNutrients.VITA_RAE.quantity / Recipe.yield)}{Recipe.totalNutrients.VITA_RAE.unit}</span></h4>
                        <h4>Vitamin C <span className="light">{Math.round(Recipe.totalNutrients.VITC.quantity / Recipe.yield)}{Recipe.totalNutrients.VITC.unit}</span></h4>
                        <h4>Thiamin (B1) <span className="light">{Math.round(Recipe.totalNutrients.THIA.quantity / Recipe.yield)}{Recipe.totalNutrients.THIA.unit}</span></h4>
                        <h4>Riboflavin (B2) <span className="light">{Math.round(Recipe.totalNutrients.RIBF.quantity / Recipe.yield)}{Recipe.totalNutrients.RIBF.unit}</span></h4>
                        <h4>Niacin (B3) <span className="light">{Math.round(Recipe.totalNutrients.NIA.quantity / Recipe.yield)}{Recipe.totalNutrients.NIA.unit}</span></h4>
                        <h4>Vitamin B6 <span className="light">{Math.round(Recipe.totalNutrients.VITB6A.quantity / Recipe.yield)}{Recipe.totalNutrients.VITB6A.unit}</span></h4>
                        <h4>Folate equivalent (total) <span className="light">{Math.round(Recipe.totalNutrients.FOLDFE.quantity / Recipe.yield)}{Recipe.totalNutrients.FOLDFE.unit}</span></h4>
                        <h4>Folate (food) <span className="light">{Math.round(Recipe.totalNutrients.FOLFD.quantity / Recipe.yield)}{Recipe.totalNutrients.FOLFD.unit}</span></h4>
                        <h4>Folic acid <span className="light">{Math.round(Recipe.totalNutrients.FOLAC.quantity / Recipe.yield)}{Recipe.totalNutrients.FOLAC.unit}</span></h4>
                        <h4>Vitamin B12 <span className="light">{Math.round(Recipe.totalNutrients.VITB12.quantity / Recipe.yield)}{Recipe.totalNutrients.VITB12.unit}</span></h4>
                        <h4>Vitamin D <span className="light">{Math.round(Recipe.totalNutrients.VITD.quantity / Recipe.yield)}{Recipe.totalNutrients.VITD.unit}</span></h4>
                        <h4>Vitamin E <span className="light">{Math.round(Recipe.totalNutrients.TOCPHA.quantity / Recipe.yield)}{Recipe.totalNutrients.TOCPHA.unit}</span></h4>
                        <h4>Vitamin K <span className="light">{Math.round(Recipe.totalNutrients.VITK1.quantity / Recipe.yield)}{Recipe.totalNutrients.VITK1.unit}</span></h4>
                        <h4>Water <span className="light">{Math.round(Recipe.totalNutrients.WATER.quantity / Recipe.yield)}{Recipe.totalNutrients.WATER.unit}</span></h4>
                    </div>
                </div>
                :
                <div className="loading-container">
                    <div>
                        <h1>Fetching...</h1>
                    </div>
                </div>
            }

        </div>
    )
}

export default RecipePage
