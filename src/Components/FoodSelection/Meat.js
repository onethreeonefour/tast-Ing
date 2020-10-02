import React from 'react'
import Beef from '../../Images/beef.png'
import Chicken from '../../Images/chicken.png'
import Pork from '../../Images/pork.png'
import Seafood from '../../Images/seafood.png'

function Meat(props) {
    return (
        <div className="flex-container flex-center">
            <div onClick={() => props.onChangeComment("Beef is whats for dinner.")}>
                <img src={Beef} alt="meat-beef" className="food-showcase"></img>
                <p>Beef</p>
            </div>
            <div onClick={() => props.onChangeComment("I feel like chicken tonight!")}>
                <img src={Chicken} alt="meat-chicken" className="food-showcase"></img>
                <p>Chicken</p>
            </div>
            <div onClick={() => props.onChangeComment("Succulent Pig?")}>
                <img src={Pork} alt="meat-pork" className="food-showcase"></img>
                <p>Pork</p>
            </div>
            <div onClick={() => props.onChangeComment("I see food.")}>
                <img src={Seafood} alt="meat-seafood" className="food-showcase"></img>
                <p>Seafood</p>
            </div>

        </div>
    )
}

export default Meat
