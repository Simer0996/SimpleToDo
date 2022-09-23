import React from 'react'
// import PropTypes from 'prop-types'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {

    return (
        <div><form onSubmit={handleAdd}>
            <input type="text" placeholder="Enter a task" className="input__box" onChange={(e) => setTodo(e.target.value)} />
            <button className="input__submit">Go</button>
        </form></div >
    )
}

// InputField.propTypes = {}

export default InputField