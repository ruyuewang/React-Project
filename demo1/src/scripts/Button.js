import React, {Component} from 'react'

class Button extends Component{
    constructor(){
        super();

        this.state = {
            like:false
        }
    }

    handleClick(){
        this.setState({
            like: !this.state.like
        })
    }

    render(){
        return(
            <button type="button"
                    style={this.state.like?{color: "red"} : {color: "black"}}
                    onClick={()=>this.handleClick()}
            >
                {
                    this.state.like? "Liked" : "Like"
                }
            </button>
        )
    }
}

export default Button
