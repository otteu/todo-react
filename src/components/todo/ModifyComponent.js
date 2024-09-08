import React, { useEffect, useState } from "react";
import { deleteOne, getOne, putOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import ResultModal from "../common/ResultModal";


const initState = {
    tno: 0,
    title: '',
    writer: '',
    dueDate: '',
    complete: false
}



function ModifyComponent({tno}) {

    const [todo, setTodo] = useState(initState);

    const [result, setResult] = useState(null);

    // 수정 -> 조회 이동 

    // 삭제 -> 목록
    const {moveToRead, moveToList} = useCustomMove()


    useEffect(() => {
        getOne(tno).then(data => {
            setTodo(data);
        })
    }, [tno]);

    const handleChangeTodo = (e) => {

        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const handleChangeTodoComplete = (e) => {
        const value = e.target.value
        todo.complete = (value === 'Y')
        setTodo({...todo})
    }

    const handleClickDelete = () => {
        deleteOne(tno).then(data => {
            console.log("delete result: " + data)
            setResult("Deleted")
        })
    }

    const handleClickModify = () => {
        putOne(todo).then(data => {
            console.log("Modify result: " + data)
            setResult("Modifyed")
        })
    }

    const closeModal = () => {
        if(result === "Deleted") {
            moveToList()
        } else {
            moveToRead(tno)
        }
    }

    return (


        <>
        
            <div className="w-1/5 p-6 text-right font-bold">TNO</div>
            <div className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100">
                {todo.tno}
            </div>
        
    
            <div className="w-1/5 p-6 text-right font-bold">CONTNET</div>
            <div className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100">
                {todo.content}
            </div>

            <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
            <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                    name="title"
                    type={'text'}
                    value={todo.title}
                    onChange={handleChangeTodo}
            >
            </input>
        
            <div className="w-1/5 p-6 text-right font-bold">DATE</div>
            <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md"
                    name="dueDate"
                    type={'date'}
                    value={todo.dueDate}
                    onChange={handleChangeTodo}
            >
            </input>
             
        <div>
            
            <select
                name="status"
                onChange={handleChangeTodoComplete}
                value={todo.complete? 'Y': 'N'}
            >
                <option value='Y'>Completed</option>
                <option value='N'>Not Yet</option>
            </select>
        </div>
        <div>

            

            <br></br>

            <button type="button"
                onClick={handleClickDelete}
            >
            Delete
            </button>
            <br></br>
            <button type="button"
                onClick={handleClickModify}
            >
            Modify
            </button>
        </div>

        {result ? <ResultModal title={"처리결과"} content={result} callbackFn={closeModal}></ResultModal> : <></>}
        </>
    );
}

export default ModifyComponent;