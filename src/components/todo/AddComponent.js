import React, { useState } from "react";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
    title: '',
    content: '',
    dueDate: ''
}


function AddComponent(props) {

    const [todo, setTodo] = useState({...initState});

    const [result, setResult] = useState(null);

    const {moveToList} = useCustomMove()

    const handleChangeTodo = (e) => {

        console.log(e.target.name, e.target.value);

        todo[e.target.name] = e.target.value;

        setTodo({...todo})
    }

    const handleClickAdd = () => {
        // console.log(todo)
        postAdd(todo).then(result => {
            setResult(result.TNO)
            setTodo({...initState})
        })
    }

    const closeModal = () => {
        setResult(null);
        moveToList()
    }

    return (
        <div>
            <div>TITLE</div>
            <input name="title"
                type={'text'}
                value={todo.title}
                onChange={handleChangeTodo}
            >
            </input>

            <div>CONTENT</div>
            <input name="content"
                type={'text'}
                value={todo.content}
                onChange={handleChangeTodo}
            >
            </input>

            <div>DUEDATE</div>
            <input name="dueDate"
                type={'date'}
                value={todo.dueDate}
                onChange={handleChangeTodo}
            >
            </input>

            <button type="button" onClick={handleClickAdd}>
                ADD
            </button>

            { result ?  
                <ResultModal
                    title={'Add Result'}
                    content={`New ${result} Added`}
                    callbackFn={closeModal}
                />
                
                :
                <></>
            }
        </div>
    );
}

export default AddComponent;