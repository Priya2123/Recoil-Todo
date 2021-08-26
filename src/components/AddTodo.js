import React from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import useLocalStorage from "../hooks/useLocalStorage";
import { textState, todoListState } from "../lib/atoms";

function AddTodo() {
  // const [persistedTodo, setPersistedTodo] = useLocalStorage("todos", []);
  const [text, setText] = useRecoilState(textState);
  // const todoListState = atom({
  //   key: "todoListState",
  //   default: persistedTodo,
  // });
  const setTodoList = useSetRecoilState(todoListState);
  const addItem = (e) => {
    e.preventDefault();
    if (!text.length) return;
    setTodoList((oldTodoList) => {
      const newTodoList = [
        ...oldTodoList,
        {
          text,
          isComplete: false,
        },
      ];
      // setPersistedTodo(newTodoList);
      return newTodoList;
    });
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="pb4 ph2">
      <input type="text" value={text} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </form>
  );
}

export default AddTodo;
