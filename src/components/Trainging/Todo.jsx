export const Todo = (props) => {
    const {todos} = props;
    let arrTest = [];

    if(todos.length !== 0) {

        todos.map(el => {

            if(arrTest.length === 0) {
                arrTest.push(el)
            } else {
                arrTest.map(arr => {
                    if (arr.id === el.id) {
                        return arr.distance += el.distance;
                    } else {
                        arrTest.push(el)
                    }
                })
            }

            



            

        });
        

        arrTest = arrTest.sort(function(a, b) {
            if ( +(a.id.split('-').join('')) > +(b.id.split('-').join('')) ) return -1;
        })


    }

    console.log(arrTest);

    return (
    <div>
        {
            arrTest.map((arr, index) => (
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