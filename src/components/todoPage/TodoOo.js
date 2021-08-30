import React from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import { todoListState } from "../../lib/atoms";
import "./styles.css";
import { Grid } from "@material-ui/core";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../base";

function Todos() {
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
    // uid: auth.currentUser.uid,
  };
  const todoRef = doc(db, "todos", "work");
  setDoc(todoRef, { todo: todoList }, { merge: true });

  setDoc(doc(db, "todos", "work"), data);

  // db.collection("todos")
  //   .doc("work")
  //   .set(todoList)
  //   .then(() => {
  //     console.log("Document successfully written!");
  //   });

  // const docRef = await addDoc(collection(db, "todos"), {
  //   todo: todoList,
  //   uid: auth.currentUser.uid,
  // });
  // console.log("Document written with ID: ", docRef.id);

  // db.collection("todos")
  //   .add({
  //     todo: todoList,
  //     uid: auth.currentUser.uid,
  //   })
  //   .then((docRef) => {
  //     console.log("Document written with ID: ", docRef.id);
  //   })
  //   .catch((error) => {
  //     console.error("Error adding document: ", error);
  //   });

  // const data = {
  //   todo: todoList,
  //   uid: auth.currentUser.uid,
  // };

  // var newCityRef = db.collection("todos").doc();

  // // later...
  // newCityRef.set(data);

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
