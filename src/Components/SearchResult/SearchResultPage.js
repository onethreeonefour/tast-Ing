import React, { useEffect, useState } from 'react';
import { API_ID, API_KEY } from '../../Config'

function SearchResultPage(props) {
    const [StartPoint, setStartPoint] = useState(0)
    const [EndPoint, setEndPoint] = useState(100)
    const [EndArray, setEndArray] = useState(8)

    const [Recipe, setRecipe] = useState([])

    useEffect(() => {
        fetch(`https://api.edamam.com/search?q=${props.match.params.query}&app_id=${API_ID}&app_key=${API_KEY}&from=${StartPoint}&to=${EndPoint}&health=${props.match.params.diet}`)
            .then(response => response.json())
            .then(response => {
                //console.log(response)
                setRecipe(response.hits)
            })
    }, [])

    console.log(Recipe)

    const renderCards = Recipe.slice(StartPoint, EndArray).map((recipe, index) => {
        return <div className="recipe-card" key={index}>
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} alt="food-image" className="recipe-card-image"></img>
            <h4>Author: {recipe.recipe.source}</h4>
        </div>
    })

    const handleShowMore = () => {
        if (EndArray <= EndPoint) {
            setEndArray(EndArray + 8)
        }

    }


    return (
        <div>
            {Recipe.length > 0 ?
                <div style={{textAlign:'center' }}>
                    <div className='grid-container col-four flex-center width-85'>
                        {renderCards}
                    </div>
                    <button onClick={handleShowMore} className="show-me-button">Show Me More!</button>
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

export default SearchResultPage
