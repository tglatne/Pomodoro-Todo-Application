package com.todoApp.rest.webservices.restfulwebservices.todo;

import java.util.Date;
import java.util.ArrayList;


import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {
	//For now acting as database
	private static List<Todo> todos =  new ArrayList();
	
	private static long idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "Tejas", "Learn fullStack", new Date(), false));
		todos.add(new Todo(++idCounter, "Tejas", "Learn frontStack", new Date(), false));

		todos.add(new Todo(++idCounter, "Tejas", "Learn backStack", new Date(), false));

	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}
		else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		
		return todo;
	}
	
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if(todo == null) {
			return null;
		}
		
		if(todos.remove(todo))
		{
			return todo;
		}
		return null;
		
	}

	public Todo findById(long id) {
		for(Todo todo:todos)
		{
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}

}
