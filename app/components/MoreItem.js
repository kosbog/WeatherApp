import React, { Component } from 'react';

const RollButton = ({ onClick, classProp, text }) => {
    return (
        <span className={classProp} onClick={onClick}> {text}</span>
    )
}

class MoreItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            more: "See more days",
            less: "Roll up"
        };
    }

    render() {
        return (
            <div className="roll-button">
                {this.props.count === 10 ?
                    <RollButton
                        onClick={() => this.props.rollDays(true)}
                        classProp={"less"}
                        text={this.state.less} /> :
                    <RollButton
                        onClick={() => this.props.rollDays(false)}
                        classProp={"more"}
                        text={this.state.more} />}
            </div>
        );
    }
}

export default MoreItem;