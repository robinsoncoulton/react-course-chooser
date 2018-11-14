import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Preview from '../components/Preview';
import * as assets from '../assets';

class AssetPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            assets: assets,
            selectedAssets: []
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Navbar selectedAssets={this.state.selectedAssets}/>
                <div className="container asset-builder">
                    <div className="row">
                        <Sidebar assets={this.state.assets}/>  
                        <Preview selectedAssets={this.state.selectedAssets}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AssetPage;