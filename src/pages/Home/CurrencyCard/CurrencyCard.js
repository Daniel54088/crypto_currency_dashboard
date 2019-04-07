import React from "react";

import {Area, AreaChart, Line, LineChart, ResponsiveContainer} from "recharts";
import ChartCard from "./ChartCard";


const CurrencyCard = ({data, prize, title, currencyName,url}) => {
    return (
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <ChartCard prize={prize} title={title} icon="bitcoin"
                       children={<ResponsiveContainer className="card-img-bottom overflow-hidden" width="100%" height={75}>
                         <AreaChart data={data}
                                    margin={{top: 0, right: 0, left: 0, bottom: 0}}>
                           <defs>
                           <linearGradient id="color5" x1="0" y1="0" x2="1" y2="0">
                             <stop offset="5%" stopColor="#264dcc" stopOpacity={1}/>
                             <stop offset="95%" stopColor="#ff4081" stopOpacity={1}/>
                           </linearGradient>
                         </defs>
                         <Area dataKey='pv' strokeWidth={0} stackId="2" stroke='#FEEADA'
                               fill="url(#color5)"
                               fillOpacity={1}/>
                       </AreaChart>
                       </ResponsiveContainer>}
                       styleName="up" currencyName={currencyName} url={url}/>
          </div>
    );
  };
  export default CurrencyCard;