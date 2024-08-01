
export const Todo = ({todos, removeTodo}) => {

    return (
    <div>
        {
            todos.map((todo) => (
                <div key={todo.id} className="boxContentTraining">
                    <div className="boxDate">
                        {todo.id}
                    </div>
                    <div className="boxDistance">
                        {todo.distance}
                    </div>
                    <div className="imgRemove">
                        <img src="src\components\Trainging\remove.png" alt="img" onClick={e => {
                            removeTodo(todo.id)
                        }}/>
                    </div>
                </div>
            ))
        }
    </div>
    )
}