import { createSlice, current } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState:{
        todoTasks:[
            { id: 1, title: "todo1"},
            { id: 2, title: "todo2"},
            { id: 3, title: "todo3"},
            // { id: 111, title: "todo1"},
            // { id: 22, title: "todo2"},
            // { id: 32, title: "todo3"},
            // { id: 43, title: "todo4"},
        ],
        inProgressTasks:[
            { id: 4, title: "todo4"},
            { id: 5, title: "todo5"},
            
        ],
        completeTasks:[
            { id: 6, title: "todo6"},
            { id: 7, title: "todo7"},
            { id: 8, title: "todo8"},
        ]
    },
    reducers:{
        addTodoTask:(state,action)=>{
            const newTodo = {
                id: Date.now(),
                title: action.payload.title
            };
            state.todoTasks.push(newTodo);
        },
        deleteTask: (state,action)=>{

            // console.log(current(state[action.payload.currentState]));
            // console.log( action.payload.id);
            let arr=current(state[action.payload.currentState]);
            return { ...state,
                [action.payload.currentState] : arr.filter((task) => task.id!== action.payload.id)
            };
        },
        // deleteInProgressTask: (state,action)=>{
        //     return state.inProgressTasks.filter((task) => task.id!== action.payload.id);
        // },
        // deleteCompleteTask: (state,action)=>{
        //     return state.inProgressTasks.filter((task) => task.id!== action.payload.id);
        // },
        send:(state,action)=>{
            let arr=current(state[action.payload.currentState]);
            let idx=arr.findIndex( task=> task.id === action.payload.id)
            const task= current(state[action.payload.currentState].splice(idx,1)[0]);
            console.log(task);
            state[action.payload.destinationState].push(task);
        },
        

        startTodo:(state,action)=>{

        }
    }
});

export const { addTodoTask, deleteTask, send }= taskSlice.actions;
export default taskSlice.reducer;