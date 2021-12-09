import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doc Appt',
			day: ';lkajsd',
			reminder: true
		},
		{
			id: 2,
			text: 'Meet at School',
			day: ';lkajsd',
			reminder: false
		},
		{
			id: 3,
			text: 'Drinks after work',
			day: ';lkajsd',
			reminder: false
		}
	]);

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleReminder = (id) => {
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};
	return (
		<div className='container'>
			<Header />
			{tasks.length > 0 ? (
				<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
			) : (
				'No tasks to show'
			)}
		</div>
	);
}

export default App;
