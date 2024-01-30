import "./App.css";
import TodoApp from "./todoApp/TodoApp";
import { CounterApp } from "./counter/CounterApp";

function App() {
	return (
		<div className="App">
			<TodoApp />
			<CounterApp />
		</div>
	);
}

export default App;
