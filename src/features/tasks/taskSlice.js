import { createSlice, current } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "tasks",
    initialState:{
        todoTasks:[
            { id: 1, title: "CSS positions of postits needed"},
            { id: 2, title: "Right Click Menu Bug"},
            { id: 3, title: "Solve and remove placeholder buttos"},
        ],
        inProgressTasks:[
            { id: 4, title: "todo4"},
        ],
        completedTasks:[
            { id: 5, title: "Structure Basic Code"},
            { id: 6, title: "New Redux Implementation (redux toolkit)"},
            { id: 7, title: "Methods to handle state"},
            { id: 8, title: "Send/ Delete/ Add tasks"},
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