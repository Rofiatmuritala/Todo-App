

function TodoItem({index, todo}) {
    return (
        <li className="list-group-item" key={index}>
        <input className="form-check-input me-1" 
        type="checkbox" 
        value="" id={index}/>
        <label
         className="form-check-label" 
        htmlFor={index}
        >{todo}</label>
{/* Take home Assignment: Implement Single Delete */}
        <button className="btn btn-danger">Delete</button>
         </li>

    );
}

export default TodoItem;