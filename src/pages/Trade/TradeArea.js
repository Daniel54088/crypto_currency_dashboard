import React from 'react';
import {Card, CardBody, CardText} from 'reactstrap';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


const TradeArea = ({cardStyle}) => {
  return (
    <Card className={`shadow border-0 ${cardStyle}`}>
      <CardBody>
       
        <div className="row">

            <div className="col-md-6 col-12">
             <span>Amount:</span>
                <Input
                className="w-100 mb-3"
                inputProps={{
                  'aria-label': 'Description',
                }}
                />  
            </div>

            <div className="col-md-6 col-12">
              <span>Price:</span>
                <Input
                defaultValue="3450.93"
                className="w-100 mb-3"
                inputProps={{
                  'aria-label': 'Description',
                }}
                />  
            </div>

           <div className="col-3">
           <Button color="primary" variant="outlined" size="large"> 25 %</Button>
           </div>
           <div className="col-3">
           <Button color="primary" variant="outlined" size="large"> 50 %</Button>
           </div>
           <div className="col-3">
           <Button color="primary" variant="outlined" size="large"> 75 %</Button>
           </div>
           <div className="col-3">
           <Button color="primary" variant="outlined" size="large"> 100 %</Button>
           </div>  

           <div className="col-6 mt-4">
           <Button fullWidth={true} className="jr-btn bg-success text-white" variant="contained" size="large">Buy</Button>
           </div>
           <div className="col-6 mt-4">
           <Button fullWidth={true} className="jr-btn bg-danger text-white" variant="contained" size="large">Sell</Button>
           </div>


        </div>


      </CardBody>
    </Card>
  );
};
export default TradeArea;