import React, {Component} from "react";
import './Counter.css'
import PropTypes from 'prop-types';



class Counter extends Component {

    constructor() {
        super();

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    render () {
        return (
            <div className="counter">
                <CounterButton val = {1} increMethod = {this.increment} decreMethod = {this.decrement}/>
                <CounterButton val = {5} increMethod = {this.increment} decreMethod = {this.decrement}/>
                <CounterButton val = {10} increMethod = {this.increment} decreMethod = {this.decrement}/>
                <span className="count">{this.state.counter}</span>
                <div><button className="reset" onClick = {this.reset}>Reset</button></div>
            </div>
        );
    }

    reset() {
        this.setState (
            (prevState) => {
                return {counter : 0}
            }
        );
    }

    increment(val) { //update state - counter++
        //this.increment.counter++
        //console.log(`increment from parent - ${val}`);
        // this.setState({
        //     counter :  this.state.counter + val
        // });
        this.setState (
            (prevState) => {
                return {counter : prevState.counter + val}
            }
        );
    }

    decrement(val) { //update state - counter++
        //this.increment.counter++
        //console.log(`increment from parent - ${val}`);
        // this.setState({
        //     counter :  this.state.counter + val
        // });
        this.setState (
            (prevState) => {
                return {counter : prevState.counter - val}
            }
        );
    }
}

class CounterButton extends Component {

    //Define the initial state in a constructor
    // state => counter 0
    // constructor() {
    //     super();

        // this.state = {
        //     counter : 0
        // }

        // this.increment = this.increment.bind(this)
        // this.decrement = this.decrement.bind(this)
    //}
    

    
    render() {
        // let style = any_value /////// var style = any_value////var is not scoped whereas let is scoped.
        //const style = {fontSize : "50px", padding: "15px 30px"};
        return (
            <div className="counterbutton">
                <button onClick={() => this.props.increMethod(this.props.val)}>+{this.props.val}</button>
                <button onClick={() => this.props.decreMethod(this.props.val)}>-{this.props.val}</button>
                {/* <span className="count">{this.state.counter}</span> */}
            </div>
        );
    }

    // increment() { //update state - counter++
    //     //this.increment.counter++
        
    //     // this.setState({
    //     //     counter :  this.state.counter + this.props.val
    //     // });

    //     this.props.increMethod(this.props.val);
    // }

    // decrement() { //update state - counter++
    //     //this.increment.counter++
        
    //     // this.setState({
    //     //     counter :  this.state.counter + this.props.val
    //     // });

    //     this.props.decreMethod(this.props.val);
    // }

    
}

CounterButton.defaultProps = {
    val : 1
}

CounterButton.propTypes = {
    val : PropTypes.number
}


export default Counter;