import { useState } from 'react';


export const Form = (props) => {
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");

  return (
    <form className='formTraining' 
        onSubmit={e => {
        e.preventDefault();
        props.putTodo(value, date);
        setValue("");
        setDate("");
    }}>
        <div className="form-group">
          <label htmlFor="date">Дата:</label>
          <input id='date' type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="value">Пройдено к\м</label>
          <input id='value' type="text" value={value} onChange={(e) => setValue(e.target.value)} required/>
        </div>
        
        <button className='btnTraining' type="submit">Ok</button>
    </form>

  )
}
