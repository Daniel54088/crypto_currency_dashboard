import React from "react";

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <div className={`search-bar right-side-icon bg-transparent d-none d-lg-block `}>
            <div className="form-group">
                <input className="form-control border-0" type="search"/>
                <button className="search-icon"><i className="zmdi zmdi-search zmdi-hc-lg"/></button>
            </div>
        </div>
        )
    }
};
export default SearchBox;