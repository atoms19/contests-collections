import express from "express";


let app = express();
app.use(express.json())


interface Todo {
	name: string,
	description: string,
	done: boolean
}


let todos: Todo[] = []

app.get("/todos", (req, res) => {
	res.status(200).json({
		"success": true,
		"data": todos
	})
});

app.post("/todos", (req, res) => {
	let { name, description, done } = req.body
	let newTodo: Todo = {
		name,
		description,
		done
	}
	todos.push(newTodo)
  	res.status(201).json({
		"success": true,
		"data": newTodo
	})
})

app.listen(3000)
