

export const Todo = (props) => {
   const {todos, idTest} = props;

    let arrFilterNo = todos.filter(todo => todo.id !== idTest.id);
    let arrRez = {
        id: '', 
        distance: 0
    };

    arrRez.id = idTest.id;
    arrRez.distance = todos.filter(todo => todo.id == idTest.id).map(arr => arr.distance).reduce((acc, el) => acc + el, 0)
    arrFilterNo.push(arrRez);

  return (
    <div>
        {
            arrFilterNo.map((arr, index) => (
                <div key={index} className="boxContentTraining">
                    <div className="boxDate">
                        {arr.id}
                    </div>
                    <div className="boxDistance">
                        {arr.distance}
                        </div>
                </div>
            ))
        }
    </div>
  )
}
