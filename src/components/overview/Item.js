import React, {Component} from 'react'
import '../../css/item.scss'

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div className="box">
                <img src={this.props.images.small} className="img"/>
                <h4>名称: {this.props.title}</h4>
                <h4>年份: {this.props.year}</h4>
                <h4>类型: {this.props.genres.join(',')}</h4>
            </div>
        )
    }
}