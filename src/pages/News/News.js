import React from "react";
import NewsList from './NewsList'
import Recommend from './Recommend'
import Advertisement from './Advertisement'


 class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {

        return (
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                    <NewsList/>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                    <Recommend/>
                    <Advertisement/>
                </div>
            </div>
        )
    }
};
export default News;
