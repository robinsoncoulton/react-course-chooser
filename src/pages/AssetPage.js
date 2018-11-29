import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Preview from '../components/Preview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeSelection } from '../actions/assets.actions';

class AssetPage extends React.Component {
    constructor(props) {
        super(props);
    }

    removeSelection = (asset) => {
        this.props.removeSelection(asset)
    }

    render() {
        return (
            <div className="wrapper">
                <Navbar assets={this.props.selected}/>
                <div className="container asset-builder">
                    <div className="row">
                        <Sidebar assets={this.props.assets}/>  
                        <Preview selection={this.props.selected} removeSelection={this.removeSelection}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        assets: state.assets,
        selected: state.selected
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeSelection: bindActionCreators(removeSelection, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AssetPage);
