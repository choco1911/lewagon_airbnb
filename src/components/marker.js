import React from "react";
import "./marker.css";    // it's because of webpack


class Marker extends React.Component {
    render() {
        return (
                <div className="marker">
                    {this.props.text}
                </div>
        );
    }
}


export default Marker;
