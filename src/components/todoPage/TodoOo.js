import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../../lib/atoms";
import "./styles.css";
import { Grid } from "@material-ui/core";
import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../../base";

function Todos() {
  useEffect(() => {
    fetchTodo();
    // unsub();
  }, []);
  // const [persistedTodo, setPersistedTodo] = useLocalStorage("todos", []);
  // const todoListState = atom({
  //   key: "todoListState",
  //   default: persistedTodo,
  // });
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);
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
            userUid: localStorage.getItem("userUid"),
          };
        } else {
          return todo;
        }
      });
      // setPersistedTodo(newTodoList);
      return newTodoList;
    });
  };

  const data = {
    todo: todoList,
    // userUid: localStorage.getItem("userUid"),
  };
  const todoRef = doc(db, uuidv4(), "work");
  setDoc(todoRef, { todo: todoList }, { merge: true });

  setDoc(doc(db, "todos", "work"), data);

  const fetchTodo = async () => {
    const q = query(
      collection(db, "todos"),
      where("userUid", "==", localStorage.getItem("userUid"))
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setTodoList([...todoList, doc.data()]);
      console.log(doc.id, " => ", doc.data());
    });
  };

  // console.log(todoList);

  return (
    <Grid container lg={12} md={12} justify="center">
      <Grid item lg={7} md={7}>
        <ul>
          {todoList.map((todo, index) => (
            <>
              <li
                key={todo.id}
                style={{
                  paddingBottom: "1%",
                  borderBottom: "1px solid #e39ff6",
                }}
              >
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
