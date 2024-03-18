// import {useState, useEffect} from "react";
import TodoItem from "../todo-item";
import { useEffect, useState } from "react";

function TodoList() {
  // let todos
  const [todos, setTodos] = useState([]);

  // Define a function getTodos to fetch todo from todo api

  const getTodos = async () => {
    const response = await fetch("http://localhost:4000/todos");
    const data = await response.json();
    console.log(data);
    setTodos(data);
  };

  const deleteTodos = async () => {
    const response = await fetch("http://localhost:4000/todos", {
      method: "DELETE",
    });
    const data = response.json();
    console.log(data)
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <section>
      <button className="btn btn-danger" onClick={deleteTodos}>
        Clear Todos
      </button>
      <ul className="list-group">
        {todos.map(function (todo, index) {
          return <TodoItem key={todo._id} todo={todo.title} index={index} />;
        })}
      </ul>
    </section>
  );
}

export default TodoList;
