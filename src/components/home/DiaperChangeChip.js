import React from 'react';

import Chip from "@material-ui/core/Chip";

const DiaperChangeChip = ({ type, amount}) => {
    let icon;    
    switch (type) {
        case "pipi":
            icon = '💛';            
            break;
        case "pupi":
            icon = '💩';            
            break;
        default:
            break;
    }
    return (
        <Chip        
        label={icon + ' ' + amount}
      />
    );
}

export default DiaperChangeChip;
