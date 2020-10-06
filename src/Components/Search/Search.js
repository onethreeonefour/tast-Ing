import React, { useState } from 'react'

function Search(props) {

    const [Query, setQuery] = useState("")

    const onChangeSearch = (e) => {
        setQuery(e.currentTarget.value)
        props.query(Query)
    }

    return (
        <div>

            <input type="text" placeholder="I feel like..." className="search" onChange={onChangeSearch} value={props.landingQuery}></input>
            <br />
            <br />
           
        </div>
    )
}

export default Search
