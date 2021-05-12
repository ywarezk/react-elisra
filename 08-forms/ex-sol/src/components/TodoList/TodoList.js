
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from 'react';



export default function TodoList() {
	
	
	// const todoTasks = [{"id":1,"title":"Congratulations!!!","description":"You","createdAt":"2021-03-17T20:42:13.029Z","updatedAt":"2021-03-17T20:42:13.029Z"},{"id":2,"title":"Have","description":"Successfully","createdAt":"2021-03-17T20:42:18.326Z","updatedAt":"2021-03-17T20:42:18.326Z"},{"id":3,"title":"completed","description":"the","createdAt":"2021-03-17T20:42:18.330Z","updatedAt":"2021-03-17T20:42:18.330Z"},{"id":4,"title":"login","description":"exercise","createdAt":"2021-03-17T20:42:18.333Z","updatedAt":"2021-03-17T20:42:18.333Z"}];
	const [tasks, setTasks] = useState([]);
	
	useEffect(() => {
		
		(async function() {
			const response = await fetch('http://nztodo.herokuapp.com/api/tasks/?format=json');		
			const todoTasks = await response.json();
			setTasks(todoTasks);
		})()
		
	}, [])
	 
	const deleteTaskFromList = (id) => {
		 console.log(`deleting element number ${id}`);
	}
	 
	return (
		<List dense={false}>
			{
				 tasks.map((task) => {
					 return (
						 <ListItem key={task.id}>
						 	<ListItemText 
							 	primary={task.title} 
								secondary={task.description}
							/>
							<ListItemSecondaryAction>
								<IconButton 
									onClick={() => deleteTaskFromList(task.id) }
									edge="end" aria-label="delete">
									<DeleteIcon />
								</IconButton>
							</ListItemSecondaryAction>
						 </ListItem>
					 )
				 })
			 }
		</List>
	 )
 }