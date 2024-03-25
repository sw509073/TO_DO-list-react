import React, {useState} from "react";

function App() {
  const [item, setItem] = useState("");
  const [items,setList] = useState([]);

  function handleChange(params){
    const temp = params.target.value;
    setItem(temp);

  }
  function handleAdd(){
    setList((prev)=>{
      return [...prev, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value = {item} onChange = {handleChange}/>
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
       { 
          items.map((listItems)=>{
          return <li>{listItems}</li>
        })
        }
        </ul>
      </div>
    </div>
  );
}

export default App;
