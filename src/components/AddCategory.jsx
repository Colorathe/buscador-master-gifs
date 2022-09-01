import { useState } from "react"


const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputchange = (event) => {
        setInputValue (event.target.value)
    }


    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return; 

        onNewCategory( inputValue.trim())
        setInputValue("")
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange= { onInputchange }
            />
    </form>
  )
}

export default AddCategory