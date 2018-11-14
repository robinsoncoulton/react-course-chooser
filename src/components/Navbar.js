import React from 'react';

class Navbaar extends React.Component {
    
    getTotalAssets = (assets) => {
        if (!assets) {
            return 0;
        } 
        return assets.length;
    }


    
    render() {
        const selected = this.props.selectedAssets;
        const totalSelected = this.getTotalAssets(selected);
        const totalArticles = this.getTotalArticles(selected);
        const totalDocuments = this.getTotalDocuments(selected);
        const totalVideos = this.getTotalVideos(selected);
        
        return (
            <div>
                <div className="asset-summary">
                    <div className="container">
                        <div className="row">
                        <div className="col-6 asset-summary-left">
                            <span>{totalSelected} assets</span>
                        </div>
                        <div className="col-6 asset-summary-right">
                            {totalArticles}<span className="info">Articles</span>
                            {totalDocuments}<span className="info">Documents</span>
                            {totalVideos}<span className="info">Video</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbaar;