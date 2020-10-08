import React, { useEffect, useState } from 'react';
import { API_ID, API_KEY } from '../../Config'

function SearchResultPage(props) {
    const [StartPoint, setStartPoint] = useState(0)
    const [EndPoint, setEndPoint] = useState(100)
    const [EndArray, setEndArray] = useState(8)

    const [Recipe, setRecipe] = useState([])

    useEffect(() => {
        fetch(`https://api.edamam.com/search?q=${props.match.params.query}&app_id=${API_ID}&app_key=${API_KEY}&from=${StartPoint}&to=${EndPoint}`)
            .then(response => response.json())
            .then(response => {
                setRecipe(response.hits)
            })
    }, [])

    const renderCards = Recipe.slice(StartPoint, EndArray).map((recipe, index) => {
        return <a href={`/recipe/${recipe.recipe.uri.slice(44)}`} key={index} className="card-background">
            <div className="card-grid align-left">
                <div>
                    <p className="card-number subtle">{index + 1}</p>
                    <p className="light subtle">{recipe.recipe.source}</p>
                    {recipe.recipe.label.length > 35 ? <h3 className="card-title">{recipe.recipe.label.slice(0,25)}..</h3> : <h3 className="card-title">{recipe.recipe.label}</h3>}

                    <div className="grid-container col-two">
                        <p className="light">Serving Size <span className="light">{recipe.recipe.yield}</span></p>
                        <p className="light">Calories  <span className="light">{Math.round(recipe.recipe.calories)}</span></p>
                    </div>
                    <hr />
                    <p className="light subtle" style={{ textAlign: "right", fontSize: "0.75rem" }}>{recipe.recipe.healthLabels[0]}</p>
                </div>
                <div className="card-grid-image">
                    <div className="image-background" >
                        <img src={recipe.recipe.image} alt="food-image" className="recipe-card-image"></img>
                    </div>
                </div>
            </div>
        </a>
    })

    const handleShowMore = () => {
        if (EndArray <= EndPoint) {
            setEndArray(EndArray + 8)
        }

    }


    return (
        <div>
            {Recipe.length > 0 ?
                <div style={{ textAlign: 'center' }}>
                    <div className='grid-container search-col flex-center width-85' style={{ margin: "auto", gap: '1rem' }}>
                        {renderCards}
                    </div>
                    <button onClick={handleShowMore} className="show-me-button">Show Me More!</button>
                </div>
                :
                <div className="loading-container">
                    <div>
                        <h1 style={{ color: "#444444" }}>Fetching...</h1>
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchResultPage
