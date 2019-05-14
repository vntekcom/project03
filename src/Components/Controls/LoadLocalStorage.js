import React, { Component } from 'react';

class LoadLocalStorage extends Component {

    LoadLocalStorage = () => {
        this.props.generateData();
    }

    render() {
        return (
            <div>
                <button 
                type="button" 
                className="btn btn--loadStorage"
                onClick={this.LoadLocalStorage}
                >
                    Load Storage Data
                </button>
            </div>
        );
    }
}

export default LoadLocalStorage;