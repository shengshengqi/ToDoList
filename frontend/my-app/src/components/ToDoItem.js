import React from 'react'

export default class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
  }

  componentDidMount() {
    //订阅更改
  }

  componentWillUnmount() {
    //清除订阅
  }

  handleChange() {

  }

  render() {
    return <p>{this.props.name}</p>;
  }
}

// const MyComponent = withSubscription(
//     ToDoItem,
//     (DataSource, props) => DataSource.getToDoItem(props)
// );

// export default MyComponent;