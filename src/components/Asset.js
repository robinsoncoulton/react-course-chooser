import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSelection } from '../actions/assets.actions';

class Asset extends React.Component {
    constructor(props) {
        super(props)
        this.state = {disabled: false}
    }
    
    handleClick = (e) => {
        if (this.state.disabled) {
            e.preventDefault();
            return;
        }
        const asset = this.props;
        this.props.addSelection(asset);
        // this.setState({disabled: 'disabled'});
    }
    
    render() {
        return (
            <li onClick={this.handleClick} className={`${this.state.disabled} asset type-${this.props.type.replace(/\s+/g, '-').toLowerCase()}`}>
                <h2>{this.props.name}</h2>
                <p>
                    <span className="info">{this.props.duration}</span>
                    <span className="info">{this.props.type}</span>
                </p>
            </li>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSelection: bindActionCreators(addSelection, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(Asset);