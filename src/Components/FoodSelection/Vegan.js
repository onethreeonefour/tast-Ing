import React from 'react'
import Potato from '../../Images/potato.png'
import Pumpkin from '../../Images/pumpkin.png'
import Tofu from '../../Images/tofu.png'
import Tomato from '../../Images/tomato.png'

import { ChefComments } from '../Chef/ChefComments'


function Meat(props) {
    return (
        <div className="flex-container flex-center">
            <div onClick={() => {
                props.onChangeComment(`Ahh the humble potato. ${ChefComments[Math.floor(Math.random()*ChefComments.length)].comment}`)
                props.onChangeQuery("Potato")
            }}>
                <img src={Potato} alt="vegan-potato" className="food-showcase"></img>
                <p>Potato</p>
            </div>
            <div onClick={() => {
                props.onChangeComment(`Pumpkin. ${ChefComments[Math.floor(Math.random()*ChefComments.length)].comment}`)
                props.onChangeQuery("Pumpkin")
            }}>
                <img src={Pumpkin} alt="vegan-beef" className="food-showcase"></img>
                <p>Pumpkin</p>
            </div>
            <div onClick={() => {
                props.onChangeComment(`The Tofu. ${ChefComments[Math.floor(Math.random()*ChefComments.length)].comment}`)
                props.onChangeQuery("Tofu")
            }}>
                <img src={Tofu} alt="vegan-tofu" className="food-showcase"></img>
                <p>Tofu</p>
            </div>
            <div onClick={() => {
                props.onChangeComment(`Tomatoes. ${ChefComments[Math.floor(Math.random()*ChefComments.length)].comment}`)
                props.onChangeQuery("Tomatoes")
            }}>
                <img src={Tomato} alt="vegan-tomato" className="food-showcase"></img>
                <p>Tomato</p>
            </div>
        </div>
    )
}

export default Meat
