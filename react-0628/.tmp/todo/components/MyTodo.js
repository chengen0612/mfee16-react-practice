import { useState } from 'react'

export default function ToDoApp() {
  // todo = { id: number, text:string, completed: bool, edited: false }
  const [todos, setTodos] = useState([
    { id: 1, text: 'Hello', completed: false, edited: false },
    { id: 2, text: 'World', completed: false, edited: false },
  ])

  const [text, setText] = useState('')

  const handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      const newTodo = {
        id: +new Date(), // microsecond
        text: e.target.value,
        completed: false,
        edited: false,
      }
      setTodos([newTodo, ...todos])
      e.target.value = ''
    }
  }

  const handleCompleted = (id) => {
    const newTodos = [...todos]
    // compare id of todos to event target
    // in some cases index might be different after data change
    const index = newTodos.findIndex((symbol, i) => {
      return symbol.id === id
    })

    if (index > -1) {
      newTodos[index].completed = !newTodos[index].completed
      setTodos(newTodos)
    }
  }

  const handleDelete = (id) => {
    const newTodos = [...todos].filter((symbol, i) => {
      return symbol.id !== id
    })
    setTodos(newTodos)
  }

  const handleEdited = (id) => {
    const newTodos = [...todos]
    // compare id of todos to event target
    const index = newTodos.findIndex((symbol, i) => {
      return symbol.id === id
    })

    if (index > -1) {
      newTodos[index].edited = !newTodos[index].edited
      newTodos[index].text = text
      setTodos(newTodos)
    }
  }

  const editedTodoInput = (text, setText) => {
    return (
      <>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value)
          }}
        />
      </>
    )
  }

  return (
    <>
      <h1>代辦事項</h1>
      <input
        type="text"
        onKeyPress={(e) => {
          handleAddTodo(e)
        }}
      />
      <ul>
        {todos.map((item, i) => {
          return (
            <li key={i}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => {
                  handleCompleted(item.id)
                }}
              />
              <span
                onDoubleClick={() => {
                  // console.log(item.text)
                  setText(item.text)
                  handleEdited(item.id)
                }}
              >
                {item.edited ? (
                  editedTodoInput(text, setText)
                ) : item.completed ? (
                  <del>{item.text}</del>
                ) : (
                  item.text
                )}
              </span>
              <button
                onClick={() => {
                  handleDelete(item.id)
                }}
              >
                x刪除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
