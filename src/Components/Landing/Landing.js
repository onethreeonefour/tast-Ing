import React, { useEffect, useState } from 'react'
import { API_ID, API_KEY } from '../../Config'
import Search from '../Search/Search'

import Meat from '../FoodSelection/Meat'
import Vegan from '../FoodSelection/Vegan'
import ChefTextBox from '../Chef/TextBox'



function Landing() {
    const [Diet, setDiet] = useState()
    const [ChefComment, setChefComment] = useState("Whaddaya feel like eating today? You can ask me, click on the pictures or I can just give you a random dish!")

    useEffect(() => {
        /*fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })*/

    }, [])

    const onChangeDiet = (e) => {
        setDiet(e.target.value)
        setChefComment(`Perhaps a ${e.target.value} diet today...`)
    }

    const onChangeComment = (value) => {
        setChefComment(value)
    }

    return (
        <div>
            <div className="flex-container flex-center">
                <div className="message-box" style={{ textAlign: 'center' }}>
                    <h1>Popular Ingredients</h1>
                    {Diet === "Meat" ?
                        <Meat
                            onChangeComment={onChangeComment}
                        />
                        :
                        <Vegan
                            onChangeComment={onChangeComment}
                        />
                    }
                    <Search
                    />
                    <br />
                    <div onChange={onChangeDiet}>
                        <input type="radio" value="Meat" name="diet-selection" /> Meat
                        <input type="radio" value="Vegan" name="diet-selection" /> Vegan
                    </div>
                </div>
            </div>
            <ChefTextBox
                comment={ChefComment}
                buttonValue={Diet}
            />
        </div>

    )
}

export default Landing
