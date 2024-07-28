import { useState } from 'react';


export const Form = (props) => {
    const [value, setValue] = useState("");
    const [date, setDate] = useState("");

  return (
    <form onSubmit={e => {
        e.preventDefault();
        props.putTodo(value, date);
        setValue("");
        setDate("");
    }}>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} required/>
        <button type="submit">Submit</button>
    </form>

  )
}
