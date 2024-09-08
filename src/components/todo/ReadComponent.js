import React, { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";


const initState = {
    tno: 0,
    title: '',
    writer: '',
    dueDate: '',
    complete: false
}

function ReadComponent({tno}) {

    const [todo, setTodo] = useState(initState);

    const {moveToList, moveToModify} = useCustomMove()

    useEffect(()=> {
        getOne(tno).then(data => {
            console.log(data)
            setTodo(data)
        })
    }, [tno]);

    return (
        <div>

            {makeDiv("Tno", todo.tno)}
            {makeDiv("Content", todo.content)}
            {makeDiv("Title", todo.title)}
            {makeDiv("Due Date", todo.dueDate)}
            {makeDiv("Complete", todo.complete ? 'Completed' : 'Not Yet')}

            <div>
                <button type="button"
                    onClick={() => moveToList()}
                >
                    List
                </button>

                <button type="button"
                    onClick={() => moveToModify(todo.tno)}
                >
                    moveToModify
                </button>
            </div>

        </div>
    )

}

const makeDiv = (title, value) => 
    <div className="flex justify-center">
        <div className="">
            {title} : {value}
        </div>
    </div>


export default ReadComponent;