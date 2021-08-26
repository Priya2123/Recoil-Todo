import React from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import useLocalStorage from "../../hooks/useLocalStorage";
import { todoListState } from "../../lib/atoms";
import "./styles.css";
import { Grid, Typography, TextField } from "@material-ui/core";

function Todos() {
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);
  const deleteTodo = (index) => {
    setTodoList((oldTodoList) => {
      const newTodoList = oldTodoList.filter((todo, i) => {
        return i !== index;
      });
      // setPersistedTodo(newTodoList);
      return newTodoList;
    });
  };
  const toggleTodo = (index) => {
    setTodoList((oldTodoList) => {
      const newTodoList = oldTodoList.map((todo, i) => {
        if (index === i) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        } else {
          return todo;
        }
      });
      // setPersistedTodo(newTodoList);
      return newTodoList;
    });
  };
  return (
    <Grid container lg={12} md={12} justify="center">
      <Grid item lg={7} md={7}>
        <ul>
          {todoList.map((todo, index) => (
            <>
              <li>
                <input
                  type="checkbox"
                  id="todo"
                  name="todo"
                  checked={todo.isComplete}
                  onChange={() => {
                    toggleTodo(index);
                  }}
                />
                <label
                  htmlFor="todo"
                  data-content={todo.text}
                  style={{
                    color: "#e39ff6",
                  }}
                >
                  {todo.text}
                </label>
                <button onClick={() => deleteTodo(index)}>x</button>
              </li>
            </>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export default Todos;
