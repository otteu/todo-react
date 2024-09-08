import React, { useCallback } from "react";
import BasicLayout from "../../layouts/BasicLayout";
import { Outlet, useNavigate } from "react-router-dom";

function IndexPage(props) {

    const navigate = useNavigate();

    const handleClickList = useCallback(() => {
        navigate({pathname: 'list'})
    }, [])

    const handleClickAdd = useCallback(() => {
        navigate({pathname: 'add'})
    }, [])


    return (
        <BasicLayout>
            <div>
                <div onClick={handleClickList}>LIST</div>
                <div onClick={handleClickAdd}>ADD</div>
            </div>
            <br></br>
            <div>
                <Outlet/>
            </div>
        </BasicLayout>
    )
}

export default IndexPage;