const list = document.querySelector('.list')
const text = document.querySelector('.text')
const add = document.querySelector('.btn')

let todos = [
	{
		id: 1,
		text: 'hello',
	},
	{
		id: 2,
		text: 'bye',
	},
]

if (todos.length) {
	render(todos)
}

function render(todos) {
	todos.forEach(todo => {
		let li = `
		<li id = ${todo.id}}><input type="checkBox"/>${todo.text}<button type="button">X</button></li>
		`
		list.innerHTML += li
	})
}
function addText() {
	if (text.value) {
		idElem = Math.random()
		let li = `
		<li id =${idElem} }><input type="checkBox"/>${text.value}<button type="button">X</button></li>
		`
		list.innerHTML += li
		todos.push({
			id: idElem,
			text: text.value,
		})
		text.value = ''
		console.log(todos)
	}
}
add.addEventListener('click', addText)
list.addEventListener('click', e => other(e))

function other(id) {
	let idElem = id.target.parentNode
	if (id.target.type === 'button') {
		if (idElem) {
			todos = todos.filter(elem => elem.id !== +idElem.id)
			let elements = list.querySelectorAll('li')
			elements.forEach(elem => {
				if (elem.id === idElem.id) {
					elem.remove()
				}
			})
		}
	}
	if (id.target.type === 'checkbox') {
		console.log(idElem.classList.toggle('checked'))
	}
}
