import React from 'react'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize: '1rem',
            backgroundColor: '#444444',
            color:'white'
        }}>
            <p> By Terry Nguyen </p>
            <a href="http://lightontheland.net/" className="website-link">lightontheland.net</a>
        </div>
    )
}

export default Footer
