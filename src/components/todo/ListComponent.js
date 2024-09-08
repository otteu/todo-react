import React, { useEffect, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import { getList } from "../../api/todoApi";
import PageComponent from "../common/PageComponent";


const initState = {
    current: 0,
    dto_list: [],
    next: false,
    next_page: 0,
    page_num_list: [],
    page_request_dto: null,
    prev: false,
    prev_page: 0,
    total_count: 0,
    total_page: 0
}


function ListComponent(props) {

    const {page, size, refresh, moveToList, moveToRead} = useCustomMove()
    const [serverData, setServerData] = useState(initState)

    const [data, setData] = useState([]);
    

    useEffect(()  => {
        
        getList({page, size}).then(response => {
            console.log(response.dto_list);
            setServerData(response);

            setData(response.dto_list);
            console.log(data);
        })

    }, [page, size, refresh])

    
    return (
        <div>
            <div>
                <div>
                    {serverData.dto_list.map((item) => (
                        <div key={item.tno}
                            onClick={() => moveToRead(item.tno)}
                        >
                            <div>tn0 : {item.tno}</div>
                            <div>title : {item.title}</div>                        
                            <div>content : {item.content}</div>
                            <div>due_date : {item.due_date}</div>
                            <div>---------------</div>
                        </div>
                        
                    ))}
                        
                </div>
                
                

            </div>
            
            <PageComponent serverData={serverData} movePage={moveToList}></PageComponent>
        </div>
    );
}

export default ListComponent;
