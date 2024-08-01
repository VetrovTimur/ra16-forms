import { useState, useRef }  from 'react'
export const ConvertorColor = () => {
    const [form, setForm] = useState({
        value: '#'
    });

    const containerColor = useRef(null);
    const textColor = useRef(null);

    const handleValueChange = ({target}) => {
        const _containerColor = containerColor.current;
        const _textColor = textColor.current;
        var regexFilterValue = /^#[a-fA-F0-9]+$/;

        let {value} = target;

        setForm(prevForm => ({...prevForm, value: value}))

        if (value.length === 9) {
            console.log(regexFilterValue.test(value))
            if(regexFilterValue.test(value)) {
                _textColor.textContent = hexToRgb(value)
                _containerColor.style.backgroundColor = value;
            } else {
                _textColor.textContent = `Ошибка`;
                _containerColor.style.background = 'red';
            }

        } else if (value.length >= 10) {
            _textColor.textContent = `Ошибка`;
            _containerColor.style.background = 'red';
        }

        if (value.length <= 1) {
            value = '#';
        }
    }

    // Преобразование цвета из формата Hex в RGB
    const hexToRgb = hex => {
        let [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
        let str = "rgb( "+ r + ", " + g + ", " + b + " )";
        return str
    };


  return (
    <div className='containerColor' ref={containerColor}>
        <form className='formColor'>
            <input className='inputColor' type='text' id='name' value={form.value} onChange={handleValueChange}/>
        </form>

        <div className='boxColor'>
            <p className='textColor' ref={textColor}></p>
        </div>
    </div>
  )
}
