import React from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import useLocalStorage from "../../hooks/useLocalStorage";
import { textState, todoListState } from "../../lib/atoms";
import "./styles.css";
import { Grid, Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

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
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      addItem();
    }
  };

  return (
    <form>
      <Grid container lg={12} md={12} justify="center">
        <Grid item lg={1} md={1}>
          <Tooltip title="Add" aria-label="add">
            <Fab style={{ backgroundColor: "#e39ff6" }}>
              <AddIcon onClick={addItem} style={{ color: "#fff" }} />
            </Fab>
          </Tooltip>
        </Grid>
        <Grid item lg={7} md={7}>
          <input
            style={{
              color: "#e39ff6",
              border: "1px dashed #e39ff6",
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
