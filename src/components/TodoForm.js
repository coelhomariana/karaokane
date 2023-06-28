import React from "react";
import { styled } from "styled-components";
import Button from  '../img/BUTTON.png'
import Logo from '../img/LOGO.png'

const TodoForm = ({ handleSubmit, todo, setTodo, songTime, setSongTime }) => {
  return (
    <div>
     <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Adicionar música"
      />
      <input
        type="text"
        value={songTime}
        onChange={(e) => setSongTime(e.target.value)}
        placeholder="TEMPO DE DURAÇÃO"
      />
      <StyledButton type="submit"><img alt="Add song"src={Button}></img></StyledButton>
    </form>
    <img width="270px" alt="Mondo Cane"src={Logo}></img>
    <TimeSection>
      <div>Tempo disponível</div>
      <div>Tempo até as 23:30</div>
    </TimeSection>
    </div>

  );
};

export default TodoForm;

const StyledButton = styled.button`
background: transparent;
border: none;
margin-top: 28px;
margin-bottom: 18px;
`

const TimeSection = styled.div`
background: #000000;
font-size: 16px;
font-weight: 400;
color: white;
text-align: center;
width: 272px;
padding: 5px 0 5px 0;
margin-top: 28px;
`