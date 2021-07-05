import { useState } from 'react'

export default function ToDoApp() {
  // todo = {id: number, text:string, completed: bool}
  const [todos, setTodos] = useState([
    { id: 1, text: 'Hello', completed: false, edited: false },
    { id: 2, text: 'World', completed: false, edited: false },
  ])

  const [todoInput, setTodoInput] = useState('')

  const handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      const newTodo = {
        id: +new Date(),
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
    // find index of item whose event target
    // 因為索引值可能因資料變動而改變，所以要用比對 id 的方式去找目標
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

  const handleEdited = (id, e) => {
    console.log('outside')

    const newTodos = [...todos]
    // find index of item whose event target
    // 因為索引值可能因資料變動而改變，所以要用比對 id 的方式去找目標
    const index = newTodos.findIndex((symbol, i) => {
      return symbol.id === id
    })

    if (index > -1) {
      // setText(e.target.value)
      // console.log(text)
      newTodos[index].edited = !newTodos[index].edited

      const value = e.target.value
      if (value !== 0) newTodos[index].text = value

      setTodos(newTodos)
    }
  }

  const editedTodoInput = (value) => {
    return (
      <>
        <input
          type="text"
          value={value}
          // onChange={(e) => {
          //   setText(e.target.value)
          // }}
        />
      </>
    )
  }

  return (
    <>
      <h1>代辦事項</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => {
          setTodoInput(e.target.value)
        }}
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
                onDoubleClick={(e) => {
                  handleEdited(item.id, e)
                }}
              >
                {item.edited ? (
                  editedTodoInput(item.value)
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
