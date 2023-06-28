import React, { useState } from "react";
import { styled } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { getDate } from "date-fns";
import BG from './img/BG.png'

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const showDate = () => {
    const todaysDateObj = new Date();
    const currentHour = todaysDateObj.getHours()
    const currentMinute = todaysDateObj.getMinutes()
    const timeLimit = todaysDateObj.setHours(23, 30)
    // const timeLeft = timeLimit - currentHour  

  // return `${currentHour}:${currentMinute}. ${timeLimit} left`
  return console.log(getDate(timeLimit))
  };

  return (
    <div className="App">
      <div className="container" style={{ backgroundImage: `url(${BG})` }}>
        <Header/>
        <Wrapper>
          <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
        />
         <TodoList
          todos={todos}
          handleDelete={handleDelete}
        />
        </Wrapper>
      </div>
    </div>
  );
};

export default App;

const Wrapper = styled.div`
width: 833px;
height: 765px;
display: flex;
flex-direction: row;
`