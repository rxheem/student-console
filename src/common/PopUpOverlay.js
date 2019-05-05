import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const PopUpOverlay = props => {
  return (
    <div>
      <OverlayTrigger
        key={props.placement}
        placement={props.placement}
        overlay={
          <Tooltip id={`tooltip-${props.placement}`}>{props.tooltip}</Tooltip>
        }
      >
        {props.children}
      </OverlayTrigger>
    </div>
  );
};

export default PopUpOverlay;
