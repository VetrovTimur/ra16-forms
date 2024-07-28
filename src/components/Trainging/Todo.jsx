

export const Todo = (props) => {
   const {todos} = props;


  return (
    <div>
        {
            todos.map((todo, index) => (
                <div key={index}>
                    <div>{todo.id}</div>
                    <div>{todo.distance}</div>
                </div>
            ))
        }
    </div>
  )
}
