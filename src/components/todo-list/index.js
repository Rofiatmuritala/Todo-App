// import {useState, useEffect} from "react";
import {useLocalStorage} from "usehooks-ts";
import TodoItem from "../todo-item";

function TodoList () {
    // let todos = [];
    const [todos, setTodos] = useLocalStorage("TODO_KEY", []);



    return (
       <section>
        <botton
        className="btn btn-danger"
        onClick= {() => setTodos([])}
        >Clear Todos</botton>
         <ul className="list-group">
            {todos.map(function(todo, index){
                return <TodoItem todo={todo} index={index} />
            }) }
            

        </ul>

        </section>
    );
}

export default TodoList;