import React,{useState} from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import MyVerticallyCenteredModal from './UpdateTask';
import { useSelector } from "react-redux";
import { setSelectedTask } from "../Slices/taskSlice.js"
import { useDispatch } from "react-redux"


const TasksList = () => {
  let dispatch=useDispatch()
  const {taskList}=useSelector((state)=>state.tasks)
  const updateTask = (task) => {
    console.log("update Task");
    setModalShow(true)
    dispatch(setSelectedTask(task))
  };

  const deleteTask = () => {
    console.log("delete task");
  };

  const [modalShow,setModalShow] = useState(false)
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            taskList && taskList.map((task,i)=>{
              return(     <tr className="text-center" key={i}>
              <td>{i}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <Button
                  variant="primary"
                  className="mx-3"
                  onClick={() => updateTask(task)}
                >
                  <i className="bi bi-pencil-square"></i>
                </Button>
                <Button variant="primary">
                  <i className="bi bi-trash3" onClick={() => deleteTask()}></i>
                </Button>
              </td>
            </tr>)
            })
          }
     
        </tbody>
      </Table>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default TasksList;
