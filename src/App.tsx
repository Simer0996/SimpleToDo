import React from 'react';
import './App.css';

let name: string = "leo"
let age: number = 5
let isStudent: boolean = false;
let hobbies: string[];
let role: [number, string];

role = [5, "lucky"]

type Person = {
  name: string;
  age: number;
}

let person: Person = {
  name: "leo",
  age: 5
}


function App() {
  return (
    <div className="App">
      <p>Hello world</p>
    </div>
  );
}

export default App;
