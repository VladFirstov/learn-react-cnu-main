import {useEffect, useState} from "react";

export const useChangeTitle = () => {
    const [title, setTitle] = useState('')
    useEffect(() => {
        document.title = title ? title : 'Weather App'
    }, [title])

    return {title, setTitle}
}