import React, { Component } from 'react'

class MyComponent extends Component {
    state = {
        value: 0
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if(prevState.value !== nextProps.value) {
            return { value: nextProps.value };
        }
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);

        if(nextProps.value === 10) return false;
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.value !== prevProps.value) {
            console.log('componentDidUpdate', this.props.value);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return (
            <div>
                <p>props: {this.props.value}</p>
                <p>state: {this.state.value}</p>
            </div>
        )
    }
}

export default MyComponent;
