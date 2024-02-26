import { createSlice } from "@reduxjs/toolkit"

const initialState={
    taskList:[],
    selectedTask:{}
}

const taskSlice=createSlice({
    name:"taskSlice",
    initialState,
    reducers:{
        addTaskToList:(state,action)=>{
            const id=Math.random()*100;
            let task={...action.payload,id};
            state.taskList.push(task);
        },
        removeTaskfromList:(state,action)=>{
            state.taskList=state.taskList.filter(val=>val.id !==action.payload.id)
        },
        updatedTaskInList:(state,action)=>{
            state.taskList=state.taskList.map(val=>val.id===action.payload.id?action.payload:val)
        },
        setSelectedTask:(state,action)=>{
            state.selectedTask=action.payload
        },
    }
})

console.log(taskSlice);
export const{addTaskToList,removeTaskfromList,updatedTaskInList,setSelectedTask}=taskSlice.actions;

export default taskSlice.reducer;
