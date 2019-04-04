import React from 'react';
import { CardImg, CardText} from 'reactstrap';

const Recommend = () => {
  return (

  <div className="mt-4">  
        <div className="mr-auto mb-4">
            <h2 className="card-heading" style={{fontWeight:700}}>Recommend</h2>
        </div>

        <div>
          <CardImg top width="100%" src={require("../../assets/recommend.jpg")} alt="Card image cap"/>
          <div className="mt-4">
            <h2 className="card-title" style={{fontWeight:700}}>61% of Major Global Digital Firms Invest in Blockchain, Report Finds</h2>
            <CardText>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.
            </CardText>
            <CardText className="text-muted">23, Mar, 2019</CardText>
          </div>
        </div>
  </div>
  );
};
export default Recommend;