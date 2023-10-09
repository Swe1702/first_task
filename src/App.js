import React,{useState} from "react";
import List from "./list";
import './App.css';
import data from "./data";

function App() {

  const [people,setPeople] = useState(data);

  return (
      <main>
      <section className="container">
      <h3> {people.length} Birthday Today</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All </button>
      
      </section>
      </main>
      
  
  );
}

export default App;
