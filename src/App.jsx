import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import ShowTask from "./components/ShowTask";
import "./App.css";

  // const initialTasks = [
  //   {
  //     id: 10001,
  //     name: "TASK A",
  //     time: "2:09:01 AM 9/14/2023",
  //   },
  //   {
  //     id: 10002,
  //     name: "TASK B",
  //     time: "2:09:01 AM 9/14/2023",
  //   },
  //   {
  //     id: 10003,
  //     name: "TASK C",
  //     time: "2:09:01 AM 9/14/2023",
  //   },
  // ];
  
function App() {

  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  },[tasklist])

  return (
    <>
      <div className="App">
        <Header />
        <AddTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
        <ShowTask
          tasklist={tasklist}
          setTasklist={setTasklist}
          task={task}
          setTask={setTask}
        />
      </div>
    </>
  );
}

export default App;
