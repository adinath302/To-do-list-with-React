// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [todolist, settodolist] = useState([])

  let savetodolist = (event) => {

    let todoname = event.target.todoname.value;
    if (!todolist.includes(todoname)) {
      let finaldolist = [...todolist, todoname]
      settodolist(finaldolist)
    } else {
      alert("ToDo Name Allready Exists ...")
    }

    // alert(todoname);

    event.preventDefault();
  }
  let list = todolist.map((value, index) => {
    return (
      <Todolistitems value={value} key={index} indexno={index} todolist={todolist} settodolist={settodolist} />
    )
  })
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <form onSubmit={savetodolist}>
        <input type='text' name='todoname' /> <button>Save</button>
      </form>
      <div className='outerdiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;


function Todolistitems({ value, indexno, todolist, settodolist }) {
  let [status, setstatus] = useState(false);

  let deleterow = () => {
    let finaldata = todolist.filter((v, i) => i != indexno)
    settodolist(finaldata)
  }
  let checkstatus = () => {
    setstatus(!status)
  }
  return (
    <li className={(status) ? "completetodo" : ""} onClick={checkstatus}> {indexno + 1}{value}<span onClick={deleterow}>&times;</span></li>
  )
}