import React from 'react';
import Asset from './Asset';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-4">
                <ul className="asset-picker">
                  {this.props.assets.map((asset, key) => {
                    return <Asset
                        key={key}
                        id={asset.id}
                        name={asset.name}
                        type={asset.type}
                        duration={asset.duration}
                        durationType={asset.durationType}
                    />
                  })}
                </ul>
            </div>
        )
    }
}

export default Sidebar;