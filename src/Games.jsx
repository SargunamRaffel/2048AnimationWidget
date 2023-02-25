import { Component, createElement} from "react";
import React from "react";
import BoardView from "./components/Board";
import "./styles.scss";
import "./gamemain.scss";


export default class Games extends Component {
    render() {
        console.log(this.props)
        return <BoardView score={this.props.score} buttonAction={this.props.buttonAction}/>;
        
    }

}
