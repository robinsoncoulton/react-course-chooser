import React from 'react';

class Preview extends React.Component {
    removeAsset(asset) {
        this.props.removeSelection(asset.id);
    }

    render() {
        return(
            <div className="col-8">
                <h2>Learning Assets Preview</h2>
                <ul className="asset-preview">
                    {this.props.selection.map((asset, key) => {
                        return (
                            <li key={key} className={`asset type-${asset.type.replace(/\s+/g, '-').toLowerCase()}`}>
                                <h2>{asset.name}</h2>
                                <p>
                                <span className="info">{asset.duration}</span>
                                <span className="info">{asset.type}</span>
                                </p>
                                <button onClick={() => { this.removeAsset(asset)}} key={key} className="remove-asset">x</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default Preview;