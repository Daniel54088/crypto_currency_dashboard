import React from 'react';
import { CardImg} from 'reactstrap';

const Advertisement = () => {
  return (

  <div className="mt-4">  
        <div className="mr-auto mb-4">
            <h2 className="card-heading" style={{fontWeight:700}}>Advertisement</h2>
        </div>

        <div>
          <CardImg top width="100%" src={require("../../assets/ad.jpg")} alt="Card image cap"/>
        </div>
  </div>
  );
};
export default Advertisement;