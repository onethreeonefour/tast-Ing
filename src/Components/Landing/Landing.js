import React, { useState } from 'react'
import Search from '../Search/Search'
import Chef from '../Chef/Chef'
import { withRouter } from 'react-router-dom';

function Landing(props) {

    const [Query, setQuery] = useState("")

    const onChangeQuery = (value) => {
        setQuery(value);
    }
    //Change query from 0 to 3 to some random value to a maximum of 3-5 - maybe in a carousel?
    const searchQuery = () => {
        props.history.push(`/search/${Query}`);
    }
    console.log(Query)
    return (
        <div>
            <div className="flex-container flex-center">
                <div className="message-box" style={{ textAlign: 'center' }}>
                    <h1>Feeling Hungry? Get some recipes right here!</h1>
                    <Search
                        query={onChangeQuery}
                        landingQuery={Query}
                    />
                    <button onClick={searchQuery} className="show-me-button-landing">Search!</button>
                    <Chef/>
                </div>
            </div>
        </div>

    )
}

export default withRouter(Landing)
