import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const Root = ({ children }) => {
    return (
        <div className='root'>
            <Navbar />
            <div className="temp">
            {children}
            </div>
        </div>
    )
}

export default Root
