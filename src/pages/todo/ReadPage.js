import React from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";


function Readpage(props) {
    
    const {tno} = useParams()

    return (
        <div>
            Read Page {tno}
            
            <ReadComponent tno={tno}/>
            

            
        </div>
    )
}

export default Readpage;