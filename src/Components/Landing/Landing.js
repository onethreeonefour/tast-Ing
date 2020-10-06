import React, { useState } from 'react'
import Search from '../Search/Search'
import Meat from '../FoodSelection/Meat'
import Vegan from '../FoodSelection/Vegan'
import ChefTextBox from '../Chef/TextBox'
import Chef from '../Chef/Chef'
import { withRouter } from 'react-router-dom';

function Landing(props) {
    const [Diet, setDiet] = useState("alcohol-free")
    const [ChefComment, setChefComment] = useState("Let Chef Michele guide you. Click on a picture to start with the most popular ingredient or simply type something.")
    const [Query, setQuery] = useState("")


    const onChangeDiet = (e) => {
        setDiet(e.target.value)
        if (e.target.value === "Vegan") {
            setDiet("vegan");
            setQuery("");
        } else {
            setDiet("alcohol-free");
            setQuery("");
        }

        setChefComment(`Perhaps a ${e.target.value} diet today...`)
    }

    const onChangeComment = (value) => {
        setChefComment(value)
    }

    const onChangeQuery = (value) => {
        setQuery(value);
    }
    //Change query from 0 to 3 to some random value to a maximum of 3-5 - maybe in a carousel?
    const searchQuery = () => {
        props.history.push(`/search/${Query}/${Diet}`);
    }

    return (
        <div>
            <div className="flex-container flex-center">
                <div className="message-box" style={{ textAlign: 'center' }}>
                    <h1>Popular Ingredients</h1>
                    {Diet === "vegan" ?
                        <Vegan
                            onChangeComment={onChangeComment}
                            onChangeQuery={onChangeQuery}
                        />
                        :
                        <Meat
                            onChangeComment={onChangeComment}
                            onChangeQuery={onChangeQuery}
                        />
                    }
                    <Search
                        query={onChangeQuery}
                        landingQuery={Query}
                    />
                    <button onClick={searchQuery} className="show-me-button-landing">Search!</button>
                    <br />
                    <br />
                    <div onChange={onChangeDiet}>
                        <input type="radio" value="Meat" name="diet-selection" /> Meat
                        <input type="radio" value="Vegan" name="diet-selection" /> Vegan
                    </div>
                </div>
            </div>
            <br/>
            <Chef/>
            <ChefTextBox
                comment={ChefComment}
            />
        </div>

    )
}

export default withRouter(Landing)
