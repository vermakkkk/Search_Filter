import React,{useState} from 'react';
import { Data } from './Data';
import './App.css';

function App() {
  const [search,setSearch]=useState('')
  return (
    <div className="App">
      <div>
        <input type='search' onChange={(e)=> setSearch(e.target.value)} placeholder="Search........"/>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>Fname</td>
              <td>Lastname</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            {Data.filter((item)=>{
              return search.toLocaleLowerCase() ==='' ? item : item.first_name.toLocaleLowerCase().includes(search)
            }).map((val, key) => 
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.first_name}</td>
                  <td>{val.last_name}</td>
                  <td>{val.email}</td>
                  <td>{val.mobile_no}</td>
                </tr>
            )}
     </tbody>
        </table>
      </div>
    </div>
  );
}
export default App;