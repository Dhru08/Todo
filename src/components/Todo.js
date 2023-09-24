import React from 'react'
import todologo from '../todo.png';

export default function Todo() {

    const handleClick = () => {
        console.log("Click");
    }

    return (
        <>
            <div className="d-flex justify-content-center mt-5">
                <div className="container text-center" style={{ width: "25rem" }}>
                    <img src={todologo} className="img-fluid card-img-top" style={{ width: "10rem" }} alt="todo logo" />
                    <div className="card-body">
                        <h5 className="card-title">Add your list here</h5>
                        <div className="card-text my-2 input-group">
                            <input type="text" className="form-control" placeholder="Enter Your Task" />
                            <span className="input-group-text" onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg>
                            </span>
                        </div>
                        <ul className="list-group text-start">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                First Task
                                <i className="bi bi-trash"></i>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Second Task
                                <i className="bi bi-trash"></i>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Third Task
                                <i className="bi bi-trash"></i>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Fourth Task
                                <i className="bi bi-trash"></i>
                            </li>
                        </ul>

                    </div>
                    <div className="btn btn-primary my-2">Check List</div>
                </div>
            </div >
        </>
    )
}
