var React = require('react');
var ReactDOM = require('react-dom');
var axios = require('axios');

var instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

var Content = React.createClass({
    render: function() {
        return (
        <div>
            <ToDoList/>
            
        </div>
        );
    }
});



class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newListItem : ''
        }
        this.addItem = this.addItem.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }
    addItem(event){
        console.log("test")
        event.preventDefault();
        console.log("this.state.newListIte", this.state.newListItem)
        this.props.addTodoToList(this.state.newListItem)
        this.setState({newListItem : ''});
        
        //add newlistitem to toDoList
    }
    updateTodo(event){
        const value = event.target.value;
        console.log("event", value)
        this.setState({newListItem : value});
        
        
    }
    
    render() {
        return(
            <form onSubmit={this.addItem} >
                 <input
                    type="text"
                    placeholder="Enter todo"
                    value={this.state.newListItem}
                    onChange={this.updateTodo}
                />
            </form>
        )
    }
    
}
///www/tools/anaconda3/envs/as_django_prd/bin
const Todo = (props) => { // doesnt need the class syntax since theres no state or methods, etc
    return (
        <div>
            <p>{props.todo}</p>
        </div>
    );
};

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodoToList = this.addTodoToList.bind(this)
    }
    addTodoToList(todo) {
        console.log(todo)
        const { todos } = this.state; //  see below for explanation of this syntax. google object deconstruction
        console.log("todos", todos)
        todos.push(todo);
        this.setState({ todos: todos });
        console.log("test!!!!");
        axios.post('/test', {
            test: todo,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
            <div>
               {
                    this.state.todos.map((todo) => {
                        //  go through the array of todos and do something with them
                        return (
                            <Todo todo={todo} />
                        );
                    })
                }
                <AddToDo
                    addTodoToList = {this.addTodoToList}
                />
            </div>
        )
    } 
}


ReactDOM.render(<Content />, document.getElementById('content'));