import React from 'react';
import "./changeTitile.css"
import {useChangeTitle} from "../hooks/useChangeTitle.jsx";

const ChangeTitle = () => {

    const {title, setTitle} = useChangeTitle()

    const handleTitle = e => {
        setTitle(e.target.value)
    }

    return (
        <div>
            <input value={title} onChange={handleTitle} placeholder={'Input your title...'} type="text"/>
        </div>
    );
};

export default ChangeTitle;