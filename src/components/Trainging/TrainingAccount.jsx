import { Form } from "./Form";
import { useState } from 'react';
import { Todo } from "./Todo";


export const TrainingAccount = () => {
  let [todos, setTodos] = useState([]);

  const putTodo = (value, date) => {

    if(todos.length !== 0) {

      let arrFilter;
      let val = {id: '', distance: 0}

      arrFilter = todos.filter(arr => arr.id !== date);

      val.id = date;
      val.distance = todos
        .filter(arr => arr.id === date)
        .map(arr => arr.distance)
        .reduce((acc, el) => acc + el, +(value));

      arrFilter.push(val);

      arrFilter = arrFilter.sort(function(a, b) {
          if ( +(a.id.split('-').join('')) > +(b.id.split('-').join('')) ) return -1;
        })

      setTodos(todos = [...arrFilter]);

    } else {
      setTodos([...todos, {id: date, distance: +(value)}]);
    }
    

  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id!== id));
  }


  return (
      <div className='containerTraining'>
        <h1 className='title'>Training list</h1>
        <Form  putTodo={putTodo}/>
        <Todo todos={todos} removeTodo={removeTodo}/>  
      </div>
  )
}
