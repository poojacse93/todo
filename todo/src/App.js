import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import "./TodoList.css"

//
//function App() {
 // return (
   // <div className="App">
     // <header className="App-header">
       // <img src={logo} className="App-logo" alt="logo" />
        //<p>
        //  Edit <code>src/App.js</code> and save to reload.
       // </p>
       // <a
        //  className="App-link"
        //  href="https://reactjs.org"
        //  target="_blank"
        //  rel="noopener noreferrer"
        
        //  Learn React
       // </a>
     // </header>
   // </div>
 // );
//}



class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if(this._inputElement.value !== ""){
      var newItem={
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      }

      );

      this._inputElement.value = "";
  }

  console.log(this.state.items);

  e.preventDefault();
}

deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  }
  );

  this.setState({
    items: filteredItems
  });
}



  render() {
    return (
      <div className="todoListMain">
      <div className = "header">
        <form onSubmit = {this.addItem}>
          <input ref = {(a) => this._inputElement = a} placeholder = "Enter Task">
            </input>
          <button type = "submit">add</button>
          </form>
          </div>
          <TodoItems entries = {this.state.items}
              delete = {this.deleteItem}/>
          </div>

    );

    
  }
}
export default App;