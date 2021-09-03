import React from "react";
import { Grid, Typography } from "@material-ui/core";
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import "./styles.css";
import TodoOo from "./TodoOo";
import { StyledGrid } from "../../toggle/StyledComponents";

const TodoPage = () => {
  return (
    <>
      <StyledGrid container lg={12} md={12} justify="center">
        <Grid item lg={8} md={8}>
          <div className="list pt3 br3">
            <TodoOo />
            <AddTodo />
          </div>
        </Grid>
      </StyledGrid>
    </>
  );
};

export default TodoPage;
