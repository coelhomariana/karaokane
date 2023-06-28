import React from "react";
import { styled } from "styled-components";
import TrashIcon from "../img/Trash";

const SongList = ({ todos, handleDelete}) => {
  return (
    <SongListWrapper>
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <StyledButton color="#961A0A" onClick={() => handleDelete(t.id)}><TrashIcon/></StyledButton>
        </li>
      ))}
    </ul>
</SongListWrapper>

  );
};

export default SongList;

const SongListWrapper = styled.div`
background: linear-gradient(164deg, rgba(150, 26, 10, 0.33) 0%, 
rgba(150, 26, 10, 0.23) 14.29%, rgba(112, 27, 13, 0.11) 28.57%, 
rgba(71, 19, 9, 0.17) 42.86%, rgba(63, 36, 30, 0.32) 57.14%, 
rgba(52, 35, 29, 0.33) 71.43%, rgba(41, 34, 29, 0.24) 85.71%, 
rgba(41, 34, 29, 0.37) 100%);
height: 523px;
width: 443px;
margin-left: 59px;
border: 1px solid black;
`

const StyledButton = styled.button`
background: transparent;
border: none;
`
