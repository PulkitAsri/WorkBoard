import { Delete, Send } from "@mui/icons-material";
import {  FormControl, IconButton, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, send } from "../../features/tasks/taskSlice";

import "./TaskComponent.css";

const options = [
  "Send To Todo Tasks",
  "Send To InProgress Tasks",
  "Send to Completed Tasks",
];
const TaskComponent = ({ task, type }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask({ id: task.id, currentState: type }));
  };
  const handleSendTo = (destinationState) => {
    dispatch(
      send({
        id: task.id,
        currentState: type,
        destinationState: destinationState,
      })
    );
  };


  return (
    <>
      <div
        className="taskContainer"
        // onContextMenu={(e) => {
        //   console.log("contextMenu Clicked");
        //   e.preventDefault();
        // }}
      >
        <div className="taskBody">
          <h2>{task.title}</h2>
          {/* <span>{task.id}</span> */}
          <div className="options_container">
            <IconButton size="small" aria-label="delete" onClick={handleDelete}>
              <Delete />
            </IconButton>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"><Send /></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
								size="small"
								IconComponent={null}
								variant="standard"
              >
                <MenuItem disabled={type==="todoTasks"} onClick={()=> handleSendTo("todoTasks")}>{options[0]}</MenuItem>
                <MenuItem disabled={type==="inProgressTasks"} onClick={ ()=> handleSendTo("inProgressTasks") }>{options[1]}</MenuItem>
                <MenuItem disabled={type==="completeTasks"} onClick={ ()=> handleSendTo("completeTasks") }>{options[2]}</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        {/* <button onClick={ handleDelete }>🗑</button>
			<button onClick={()=> handleSendTo("inProgressTasks")}>toIP</button>
			<button onClick={ ()=> handleSendTo("completeTasks") }>toDone</button> */}

        {/* <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
      >
        <MenuItem onClick={handleClose}>{options[0]}</MenuItem>
				<MenuItem onClick={handleClose}>{options[1]}</MenuItem>
				<MenuItem onClick={handleClose}>{options[2]}</MenuItem>
      </Menu> */}
      </div>
    </>
  );
};

export default TaskComponent;
// dispatch(send({id: task.id, currentState: type, destinationState:"inProgressTasks"}))
// ()=> handleSendTo("inProgressTasks")
// ()=> handleSendTo("completeTasks")
