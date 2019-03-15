import React from "react";
import {Card, CardTitle} from "reactstrap";

const Widget = ({children, styleName, title}) => {

  return (
    <Card className={`jr-card jr-card-widget ${styleName}`}>
      {title ? <CardTitle>{title}</CardTitle> : null}
      {children}
    </Card>
  )
};

export default Widget;
Widget.defaultProps = {
  styleName: '',
};

