import React, { useState } from 'react'
import Search from '../Search/Search'
import Logo from '../../Images/logo.png'

function Landing() {

    const [Query, setQuery] = useState("")

    const onChangeQuery = (value) => {
        setQuery(value);
    }

    return (

        <div className="flex-container flex-center">
            <div className="landing-splash" style={{ textAlign: 'center' }}>
                <h1 className="landing-title">Tast.Ing</h1>            
                <h4 className="landing-subtitle">Find Recipes Across The Globe</h4>
                <img src={Logo} alt="tast.ing" className="splash-logo"></img>
                <Search
                    query={onChangeQuery}
                    landingQuery={Query}
                />
            </div>
        </div>


    )
}

export default Landing
