import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
function Search(props) {

    const [Query, setQuery] = useState("")

    const onChangeSearch = (e) => {
        setQuery(e.currentTarget.value)
    }

    const searchQuery = () => {
        props.history.push(`/search/${Query}`);
    }

    return (
        <div>
            <form onSubmit={searchQuery}>
                <input type="text" placeholder="I feel like..." className="search" onChange={onChangeSearch} required></input>
                <br/>
                <br/>
                <button className="show-me-button">Search</button>
            </form>
        </div>
    )
}

export default withRouter(Search)
