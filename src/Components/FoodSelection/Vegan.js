import React from 'react'
import Potato from '../../Images/potato.png'
import Pumpkin from '../../Images/pumpkin.png'
import Tofu from '../../Images/tofu.png'
import Tomato from '../../Images/tomato.png'

function Meat(props) {
    return (
        <div className="flex-container flex-center">
            <div onClick={() => props.onChangeComment("Potatoes Potatoes Potatoes")}>
                <img src={Potato} alt="vegan-potato" className="food-showcase"></img>
                <p>Potato</p>
            </div>
            <div onClick={() => props.onChangeComment("Big serving of Pumpkin coming up.")}>
                <img src={Pumpkin} alt="vegan-beef" className="food-showcase"></img>
                <p>Pumpkin</p>
            </div>
            <div onClick={() => props.onChangeComment("Tofu. ")}>
                <img src={Tofu} alt="vegan-tofu" className="food-showcase"></img>
                <p>Tofu</p>
            </div>
            <div onClick={() => props.onChangeComment("I'm a tomato!")}>
                <img src={Tomato} alt="vegan-tomato" className="food-showcase"></img>
                <p>Tomato</p>
            </div>
        </div>
    )
}

export default Meat
