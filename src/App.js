import React, { Component } from 'react';
import MyCompnent from './MyComponent';

class App extends Component {

  state = {
    counter: 1,
    error: false
  };

  // 컴포넌트가 새로 만들어질때 호출
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });

    console.log(error);
    console.log(info);
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    if (this.state.error) {
      return (
        <div>에러가 발생하였습니다.</div>
      )
    }

    return  (
      <div>
        {this.state.counter !== 10 && <MyCompnent value={this.state.counter} />}
        <button onClick={this.handleClick} >Click Me</button>
      </div>
    );
  };
};

export default App;
