import React from "react";
import { v4 as uuidv4 } from "uuid";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import useLocalStorage from "../../hooks/useLocalStorage";
import { textState, todoListState } from "../../lib/atoms";
import "./styles.css";
import { Grid, Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../base";

function AddTodo() {
  // const [persistedTodo, setPersistedTodo] = useLocalStorage("todos", []);
  const [text, setText] = useRecoilState(textState);
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      // setText("");
      addItem();
      // setText("");
    }
  };
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
          userUid: localStorage.getItem("userUid"),
        },
      ];
      // setPersistedTodo(newTodoList);
      return newTodoList;
      console.log(newTodoList);
    });
    const todoRef = doc(db, "todos", uuidv4());
    setDoc(todoRef, {
      text,
      isComplete: false,
      userUid: localStorage.getItem("userUid"),
    });
    setText("");
  };
  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form type="submit">
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={1} md={1}>
          <Tooltip title="Add" aria-label="add">
            <Fab
              // onClick={writeUserData}
              size="small"
              style={{ backgroundColor: "#e39ff6" }}
            >
              <AddIcon small onClick={addItem} style={{ color: "#fff" }} />
            </Fab>
          </Tooltip>
        </Grid>
        <Grid item lg={8} md={8}>
          <input
            style={{
              color: "#e39ff6",
              // border: "1px dashed #e39ff6",
              width: "100%",
            }}
            type="text"
            value={text}
            onChange={onChange}
            onKeyPress={handleKeypress}
            placeholder="Add Todo"
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default AddTodo;
