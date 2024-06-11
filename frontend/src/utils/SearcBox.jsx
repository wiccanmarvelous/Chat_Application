import React from 'react'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SearchIcon from '@mui/icons-material/Search';

const SearcBox = ({ handleChange, username }) => {
    return (
        <div className="searchBox">
            <PersonSearchIcon style={{ color: 'white' }} />
            <form>
                <input
                    type="text"
                    id="inp"
                    onChange={handleChange}
                    value={username}
                    placeholder="search username"
                />
            </form>
        </div>
    )
}

export default SearcBox
