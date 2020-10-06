import React from 'react'
import Beef from '../../Images/beef.png'
import Chicken from '../../Images/chicken.png'
import Pork from '../../Images/pork.png'
import Seafood from '../../Images/seafood.png'

import { ChefComments } from '../Chef/ChefComments'

function Meat(props) {
    return (
        <div className="flex-container flex-center">
            <div onClick={() => {
                props.onChangeComment(`Beef is whats for dinner.  ${ChefComments[Math.floor(Math.random() * ChefComments.length)].comment}`)
                props.onChangeQuery("Beef")
            }}>
                <img src={Beef} alt="meat-beef" className="food-showcase"></img>
                <p>Beef</p>
            </div>
            <div onClick={() => {
                props.onChangeComment(`Chicken Tonight?   ${ChefComments[Math.floor(Math.random() * ChefComments.length)].comment}`)
                props.onChangeQuery("Chicken")
            }}>
                <img src={Chicken} alt="meat-chicken" className="food-showcase"></img>
                <p>Chicken</p>
            </div>
            <div onClick={() => {
                props.onChangeComment(`Succulent Pig?  ${ChefComments[Math.floor(Math.random() * ChefComments.length)].comment}`)
                props.onChangeQuery("Pork")
            }}>
                <img src={Pork} alt="meat-pork" className="food-showcase"></img>
                <p>Pork</p>
            </div>
            <div onClick={() => {
                props.onChangeComment(`Shrimp?   ${ChefComments[Math.floor(Math.random() * ChefComments.length)].comment}`)
                props.onChangeQuery("Shrimp")
            }}>
                <img src={Seafood} alt="meat-seafood" className="food-showcase"></img>
                <p>Shrimp</p>
            </div>

        </div>
    )
}

export default Meat
