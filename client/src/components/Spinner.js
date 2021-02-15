import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer" style={{backgroundColor:'#242021',position:'fixed'}}>
            <Loader type="Rings" color="#00BFFF" height={120} width={120} />
        </div>
    );

};
Spinner.defaultProps = {
    mess: "Loading..."

}; //default props

export default Spinner;