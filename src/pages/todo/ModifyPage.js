import React from "react";
import ModifyComponent from "../../components/todo/ModifyComponent";
import { useNavigate, useParams } from "react-router-dom";

const ModifyPage = () => {

    const {tno} = useParams();

    return(
        <div>
            ModifyPage

            <ModifyComponent tno={tno} />
        </div>
    )
}

export default ModifyPage;