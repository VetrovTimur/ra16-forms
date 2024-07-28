

export const Todo = (props) => {
   const {todos, idTest} = props;
   
   console.log('Итоговый', todos);
   console.log('ID', idTest);

    let arrFilterNo = todos.filter(todo => todo.id !== idTest.id);
    let arrFilterYes = todos.filter(todo => todo.id == idTest.id);
    let arrRez = [{
        id: '', 
        distance: 0
    }];
    arrRez.id = idTest.id;
    arrRez.distance = arrFilterYes.map(arr => arr.distance).reduce((acc, el) => acc + el, 0)
    arrFilterNo.push(arrRez);

   
    console.log('No repeat', arrFilterNo);
    console.log('Yes repeat', arrFilterYes);

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
