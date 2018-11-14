import React from 'react';
import Asset from './Asset'

class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-4">
                <ul className="asset-picker">
                  {this.props.assets.default.map(asset => {
                    return <Asset 
                        name={asset.name}
                        type={asset.type}
                        duration={asset.time}
                        durationType={asset.durationType}
                    />
                  })}
                </ul>
            </div>
        )
    }
}

export default Sidebar;
