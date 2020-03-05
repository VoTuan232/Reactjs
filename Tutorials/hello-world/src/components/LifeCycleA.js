import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Vo Tuan'
        }
        console.log('LifecycleA construct')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCyleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount!')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Vo Tuan changed!'
        })
    }

    render() {
        console.log('LifeCycle A render');
        return (
            <div>
                <LifeCycleB />
                <button onClick={this.changeState}>Change state</button>
            </div>
        )
    }
}

export default LifeCycleA;
