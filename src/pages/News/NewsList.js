import React from "react";
import NewsItem from './NewsItem'
import TopNews from './TopNews'
import {latestPostArray} from './data'

 class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
  
        return (
                <div >
                        
                        <div className="mr-auto mb-4">
                          <h2 className="card-heading" style={{fontWeight:700}}>LatestPosts</h2>
                        </div>

                      <ul className="list-unstyled">
                        {latestPostArray.map(function(ele, index){
                            if(index == 0){
                                return(
                                    <TopNews key={index} recentData={ele}/>
                                )
                            }else{
                                return(
                                    <NewsItem key={index} recentData={ele}/>
                                )
                            }

                        })}
                      </ul>
                        
                      <div>
                        <span className="jr-link card-link jr-fs-13 text-uppercase">
                            View All Posts
                        </span>
                      </div>                    
                  
                </div>
        )
    }
};
export default NewsList;
