import React, { Component } from "react";
import "./App.css";

class Todo extends Component {
  state = {
    edit: false,
    id: null,
    mockData: [
      {
        id: "1",
        title: "Buy Milk",
        done: false,
        date: new Date()
      },
      {
        id: "2",
        title: "Take Out Trash",
        done: false,
        date: new Date()
      },
      {
        id: "3",
        title: "Meet With Parole Officer",
        done: false,
        date: new Date()
      },
      {
        id: "4",
        title: "Pay Bills",
        done: false,
        date: new Date()
      }
    ]
  };

  onDeleteHandle(e) {
    // e.preventDefault();
    console.log(arguments);
    let id = arguments[0];
    this.setState({
      mockData: this.state.mockData.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }

  onEditHandle(e) {
    e.preventDefault();
  }

  onCompleteHandle(e) {
    e.preventDefault();
  }

  onSubmitHandle(e) {
    e.preventDefault();
    this.setState({
      mockData: [
        ...this.state.mockData,
        {
          id: Date.now(),
          title: e.target.item.value,
          done: false,
          date: new Date()
        }
      ]
    });
    e.target.item.value = "";
  }

  renderEditForm() {
    if (this.state.edit) {
      return (
        <form onSubmit={this.onUpdateHandle.bind(this)}>
          <input
            type="text"
            name="updatedItem"
            className="item"
            defaultValue={this.state.title}
          />
          <button className="update-add-item">Update</button>
        </form>
      );
    }
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.renderEditForm()}
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <ul>
          {this.state.mockData.map(item => (
            <li key={item.id}>
              {item.title}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>
                Delete
              </button>
              <button onClick={this.onEditHandle.bind(this, item.id)}>
                Edit
              </button>
              <button onClick={this.onCompleteHandle.bind(this, item.id)}>
                Complete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
