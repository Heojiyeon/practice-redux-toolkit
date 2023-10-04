import SuccessRate from "./components/SuccessRate"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        TodoList
      </header>
      <main>
        <SuccessRate />
        <TodoForm />
        <TodoList />
      </main>
    </div>
  )
}

export default App
