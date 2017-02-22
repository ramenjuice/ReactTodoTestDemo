import React from 'react';
import ReactDOM from 'react-dom';
import TodoModel from "./model/todoModel";
import TodoApp from "./components/todoApp";
import './index.css';


var model = new TodoModel('react-todos');

function render() {
  ReactDOM.render(
        <TodoApp model={model}/>,
    document.getElementsByClassName('todoapp')[0]
  );
}

model.subscribe(render);
render();
