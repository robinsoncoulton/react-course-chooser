import React from 'react';

class Asset extends React.Component {
    render() {
        return (
            <li className={`asset type-${this.props.type.replace(/\s+/g, '-').toLowerCase()}`}>
                <h2>{this.props.name}</h2>
                <p>
                    <span className="info">{this.props.duration}</span>
                    <span className="info">{this.props.type}</span>
                </p>
            </li>
        );
    }
}

export default Asset;