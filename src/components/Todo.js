import React, { useEffect, useState } from 'react'
import todologo from '../todo.png';

export default function Todo() {

    const [inputData, setInputData] = useState('');
    const [itemList, setItemList] = useState([]);

    const addItem = () => {
        const trimmedInput = inputData.trim();

        if (trimmedInput) {
            if (itemList.includes(trimmedInput)) {
                alert("Task Already Present in the List! Moving it to the top.");
                const updatedList = [trimmedInput, ...itemList.filter((item) => item !== trimmedInput)];
                setItemList(updatedList);
            } else {
                setItemList([trimmedInput, ...itemList]);
            }
        }
        setInputData('');
    };

    const removeItem = (itemToRemove) => {
        const updatedList = itemList.filter((item) => item !== itemToRemove);
        setItemList(updatedList);
    };

    const removeAllItem = () => {
        setItemList('');
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addItem();
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="container text-center" style={{ width: "25rem" }}>
                    <img src={todologo} className="img-fluid card-img-top" style={{ width: "8rem" }} alt="todo logo" />
                    <div className="card-body">
                        <h5 className="card-title mt-2">Add your list here</h5>
                        <div className="card-text mt-3 input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Task"
                                value={inputData}
                                onChange={(e) => setInputData(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <span className="input-group-text" onClick={addItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg>
                            </span>
                        </div>
                        {
                            itemList.length > 0 && <ul className={`list-group text-start ${itemList.length > 0 ? 'mt-3' : ''}`}>
                                {itemList.map((task, index) => (
                                    <li
                                        key={index}
                                        className="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                        {task}
                                        <i
                                            className="bi bi-trash"
                                            onClick={() => removeItem(task)}
                                        ></i>
                                    </li>
                                ))}
                            </ul>
                        }

                        {
                            itemList.length > 0 && <div className="btn btn-primary my-3" onClick={removeAllItem}>Remove All</div>
                        }
                    </div>
                </div>
            </div >
        </>
    )
}
