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

    // arrValue = {
    //   id: date,
    //   distance: todos.filter(todo => todo.id === date).map(todo => todo.distance).reduce((acc, el) => acc + el, 0),
    //   done: false
    // }

    // arrFilter = todos.filter(todo => todo.id !== date);
    // arrFilter.push(arrValue);
    
    // console.log(arrFilter);
  }
  
  return (
    <div className='wrapper'>
      <div className='container'>
        <h1 className='title'>Test</h1>
        <Form  putTodo={putTodo} />
        <Todo todos={todos} idTest={idTest}/>  
      </div>
    </div>
  )
}
