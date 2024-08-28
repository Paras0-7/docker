import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { explorerData } from './data';

function App() {

  const [data,setData] = useState(explorerData)
  return (
    <div className="App">
      <Folder data={data}/>
    </div>
  );
}


function Folder({data}){
  const [toggle,setToggle] = useState(false)
  return <div>
    <h3 onClick={()=>setToggle(!toggle)}>📂 {data.name}</h3>
    {toggle && <ul>
      {
        data.children.map(item=>{
          if(item.isFolder){
            return <li key={item.id} >{<Folder data={item}/>}</li>
          }
          return <li key={item.id}>🗒️ {item.name}</li>
        }
          
        )
      }
    </ul>}
  </div>
}

export default App;
