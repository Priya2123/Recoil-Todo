import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
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
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../base";

function Todos() {
  useEffect(() => {
    fetchTodo();

    return () => {
      setTodoList([]);
    };
  }, []);

  const todoList = useRecoilValue(todoListState);
  console.log(todoList);
  const setTodoList = useSetRecoilState(todoListState);
  const deleteTodo = async (index) => {
    const docRef = doc(db, "todos", todoList[index]["id"]);
    await deleteDoc(docRef);

    setTodoList((oldTodoList) => {
      const newTodoList = oldTodoList.filter((todo, i) => {
        return i !== index;
      });

      return newTodoList;
    });
  };
  const toggleTodo = async (index) => {
    const docRef = doc(db, "todos", todoList[index]["id"]);

    await setDoc(
      docRef,
      {
        isComplete: !todoList[index]["isComplete"],
      },
      {
        merge: true,
      }
    );
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

      return newTodoList;
    });
  };

  const fetchTodo = async () => {
    const q = query(
      collection(db, "todos"),
      where("userUid", "==", localStorage.getItem("userUid"))
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setTodoList((oldTodoList) => [...oldTodoList, doc.data()]);
      console.log(doc.id, " => ", doc.data());
    });
  };

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
