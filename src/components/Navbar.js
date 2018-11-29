import React from 'react';

class Navbaar extends React.Component {
    getAssetsByType = () => {
        const assetSummary = [];
        this.props.assets.forEach(asset => {
            if (!assetSummary[asset.type]) {
                assetSummary[asset.type] = 1;
            } else {
                assetSummary[asset.type]++;
            }
        })
        return assetSummary;
    }

    render() {
        const assets = this.props.assets;
        const totalSelected  = assets.length;
        const assetsByType = this.getAssetsByType();
        console.log(assetsByType);

        return (
            <div>
                <div className="asset-summary">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 asset-summary-left">
                                <span>{totalSelected} assets</span>
                            </div>
                            <div className="col-6 asset-summary-right">
                                {Object.keys(assetsByType).map(assetType => {
                                    return <p>{assetType}: <strong>{assetsByType[assetType]}</strong></p>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbaar;