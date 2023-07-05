import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Login from "./components/Login";
import Clock from "./components/Clock";
import Quotes from "./components/Quotes";
import Weather from "./components/Weather";

const App = () => {
  const [username, setUsername] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLoginSubmit = (newUsername) => {
    localStorage.setItem("username", newUsername);
    setUsername(newUsername);
  };

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    if (todoInput.trim() === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: todoInput,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoInput("");
  };

  const handleTodoDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <MainSection>
      <Weather />
      <Clock />
      {!username ? (
        <Login onLoginSubmit={handleLoginSubmit} />
      ) : (
        <>
          <Greeting>Welcome~! {username} ✨</Greeting>
          <ToDoSection>
            <FormSection>
              <form onSubmit={handleTodoSubmit}>
                <input
                  type="text"
                  placeholder="Please Write your tasks"
                  autoFocus
                  required
                  value={todoInput}
                  onChange={(event) => setTodoInput(event.target.value)}
                />
                <button type="submit"></button>
              </form>
            </FormSection>
            <TodoList>
              {todos.map((todo) => (
                <TodoItem key={todo.id}>
                  {todo.text}
                  <button onClick={() => handleTodoDelete(todo.id)}>❌</button>
                </TodoItem>
              ))}
            </TodoList>
          </ToDoSection>
        </>
      )}
      <Quotes />
    </MainSection>
  );
};

const MainSection = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 1rem;
  color: floralwhite;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080);
  background-size: 100% 100%;
`;

const ToDoSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  height: 20%;
`;

const FormSection = styled.div`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 42px;
  input {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 2rem;
    color: floralwhite;
    text-align: center;
  }
  button {
    display: none;
  }
`;

const Greeting = styled.div`
  font-size: min(2.5rem, 5vw);
`;

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  list-style: none;
  font-size: min(38px, 3.5vw);
  padding: 0;
  height: 23vh;
  overflow-y: auto;

  & li:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  /* Webkit 기반 브라우저용 스크롤바 숨김 */
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  /* IE, Edge용 스크롤바 숨김 */
  -ms-overflow-style: none;
  scrollbar-width: none;

  & button {
    margin-left: 5px;
    height: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

const TodoItem = styled.li`
  width: 50%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export default App;
