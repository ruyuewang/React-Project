import React, {Component} from "react";


class NavButton extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <button type="button">
                {this.props.name}
            </button>
        )
    }
}

export default NavButton