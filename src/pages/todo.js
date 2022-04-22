import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

export default class Todo extends React.Component{
    constructor(){
        super()
        this.State = {
            all : "",
            completeed : [],
            uncompleted : [],
            action : ""
        }
    }
    render(){
        return(
            <div className='container'>
                <div className='shadow p-3 mb-5 mt-5 w-75 bg-body rounded position-absolute top-50 start-50 translate-middle'>
                    <h4 className='text-center fw-bolder '>To Do List</h4>
                    <form>
                        <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Whats your plan?"  aria-describedby="button-addon2" />
                        <button class="btn btn-dark" type="button" id="button-addon2">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}