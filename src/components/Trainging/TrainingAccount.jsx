import { Form } from "./Form";
import { useState } from 'react';
import { Todo } from "./Todo";


export const TrainingAccount = () => {
  const [todos, setTodos] = useState([
    {
      id: '',
      distance: [],
      done: false
    }
  ]);
  let [idTest, setIdTest] = useState({});

  
  const putTodo = (value, date, idTest) => {
    setTodos([...todos, {id: date, distance: +(value), done: false}]);
    setIdTest(idTest = {id: date});
  }
  
  return (
      <div className='containerTraining'>
        <h1 className='title'>Training list</h1>
        <Form  putTodo={putTodo} />
        <Todo todos={todos} idTest={idTest}/>  
      </div>
  )
}
