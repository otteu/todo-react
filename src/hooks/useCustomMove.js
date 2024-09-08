import { useState } from "react"
import { createSearchParams, Navigate, useNavigate, useSearchParams } from "react-router-dom"

const getNum = (param, defaultValue) => {
    if(!param) {
        return defaultValue
    }
    return parseInt(param)
}

const useCustomMove =  ()  => {

    const [refresh, setRefresh ] = useState(false);

    const navigate = useNavigate()

    const [queryParams] = useSearchParams()

    const page = getNum(queryParams.get('page'), 1)
    const size = getNum(queryParams.get('size'), 10)

    const queryDefault = createSearchParams({page, size}).toString()

    const moveToList = (pageParam) => {

        
        let queryStr = ""
    
       
        if (pageParam) {
        
            const pageNum = getNum(pageParam.page, 1)
            const sizeNum = getNum(queryParams.get('size'), 10)
            queryStr = createSearchParams({page: pageNum, size: sizeNum}).toString()
        } else {
            queryStr = queryDefault
        }

        setRefresh(!refresh)

        
        navigate({pathname: `../list`, search: queryStr})
    }


    const moveToModify = (num) => {
        navigate({
            pathname:`../modify/${num}`,
            search: queryDefault
        })
    }

    const moveToRead = (num) => {
        navigate({
            pathname:`../read/${num}`,
            search: queryDefault
        })
    }

    return {moveToList, moveToModify, page, size, refresh, moveToRead}
}


// page=3&size=10



export default useCustomMove