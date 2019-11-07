import React, {Component} from 'react'

export default class Input extends Component{
    constructor(props) {
        super(props);

        this.state = { //initialize the state, can only be updated by setState method
            value:""
        }
    }
    handleInput(e){
        console.log(e.target.value); //target: html tag
        console.log(e.nativeEvent);//original event
        //control the input
        if(e.target.value.length > 10){
            return
        }
        this.setState({
            value: e.target.value
        })


    }
    render(){
        return(
            <input type="text"
                   onInput={(e)=>this.handleInput(e)}
                   value={this.state.value}
            />
        )
    }

}