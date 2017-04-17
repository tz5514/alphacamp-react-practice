import React from 'react'

class TodoAddForm extends React.Component {
  state = {
    inputText: ''
  }
  
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputText}/>
        <button>新增</button>
      </div>
    );
  }
}

export default TodoAddForm;