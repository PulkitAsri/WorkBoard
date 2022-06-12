import { useState } from "react";
import "./App.css";

import { useDispatch } from "react-redux";
import { addTodoTask } from "./features/tasks/taskSlice";

import ColumnPane from "./components/ColumnPane/ColumnPane";
import { Button, IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

function App() {
  const [taskInputText, setTaskInputText] = useState("");
  const [searchTaskInputText, setSearchTaskInputText] = useState("");

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    // console.log(taskInputText);
    dispatch(
      addTodoTask({
        title: taskInputText,
      })
    );
    setTaskInputText("");
  };

  return (
    <div className="App">
      <div className="search_task_area">
        <TextField
          id="filled-search"
          label="Search Tasks"
          type="search"
          variant="standard"
          size="small"
          value={searchTaskInputText}
          onChange={(e) => setSearchTaskInputText(e.target.value)}
        />
        <IconButton size="small">
          <Search />
        </IconButton>
      </div>

      <div className="work_area">
        <ColumnPane type="todoTasks" searchText={searchTaskInputText} />
        <ColumnPane type="inProgressTasks" searchText={searchTaskInputText} />
        <ColumnPane type="completeTasks" searchText={searchTaskInputText} />
      </div>

      <div className="add_task_area">
        <TextField
          id="standard-basic"
          label="Enter Task"
          variant="standard"
          size="small"
          value={taskInputText}
          onChange={(e) => setTaskInputText(e.target.value)}
        />
        <Button variant="contained" size="small" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </div>
      {/* <Menu /> */}
    </div>
  );
}

export default App;
