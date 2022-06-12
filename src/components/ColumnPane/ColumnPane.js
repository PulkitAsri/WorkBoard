import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { convertCamelcaseToString } from "../../util/convertCamelcaseToString";
import TaskComponent from "../TaskComponent/TaskComponent";
import "./ColumnPane.css";

const ColumnPane = ({ type, searchText}) => {
  const tasks = useSelector((state) => state.tasks[type]);
  // console.log(searchText);
  return (
    <div className="column_pane">
      <h1>{ convertCamelcaseToString(type)}</h1>
      <div className="tasks_wrapper">
        <Grid container spacing={2}>
          {tasks
          .filter(task=> (task.title.startsWith(searchText)))
          .map((task) => (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} key={task.id}>
              <TaskComponent className="task" task={task} type={type} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ColumnPane;
