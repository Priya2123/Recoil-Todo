import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useRecoilState, useSetRecoilState } from "recoil";
import { textState, todoListState } from "../../lib/atoms";
import "./styles.css";
import { Grid, Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../base";
import { StyledGrid, StyledInput } from "../../toggle/StyledComponents";

function AddTodo() {
  const [text, setText] = useRecoilState(textState);
  const handleKeypress = (e) => {
    // it triggers by pressing the enter key
    if (e.keyCode === 13) {
      addItem();
    }
  };
  const setTodoList = useSetRecoilState(todoListState);
  const addItem = (e) => {
    e.preventDefault();
    if (!text.length) return;
    const todoId = uuidv4();
    setTodoList((oldTodoList) => {
      const newTodoList = [
        ...oldTodoList,
        {
          text,
          isComplete: false,
          userUid: localStorage.getItem("userUid"),
          id: todoId,
        },
      ];
      return newTodoList;
    });
    const todoRef = doc(db, "todos", todoId);
    setDoc(todoRef, {
      text,
      isComplete: false,
      userUid: localStorage.getItem("userUid"),
      id: todoId,
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
        <StyledGrid item lg={8} md={8}>
          <StyledInput
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
        </StyledGrid>
      </Grid>
    </form>
  );
}

export default AddTodo;
