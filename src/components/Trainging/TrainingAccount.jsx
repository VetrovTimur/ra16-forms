import { Form } from "./Form";
import { useState } from 'react';
import { Todo } from "./Todo";


export const TrainingAccount = () => {
  const [todos, setTodos] = useState([]);
  
  const putTodo = (value, date) => {
    setTodos([...todos, {id: date, distance: +(value)}]);

  }


  


  return (
      <div className='containerTraining'>
        <h1 className='title'>Training list</h1>
        <Form  putTodo={putTodo} />
        <Todo todos={todos}/>  
      </div>
  )
}
