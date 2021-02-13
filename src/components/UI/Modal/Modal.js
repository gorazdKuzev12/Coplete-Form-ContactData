import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux1';

const modal = ( props ) => (
    <Aux>
        
        <div
            className={classes.Modal}
           >
            {props.children}
        </div>
    </Aux>
);

export default modal;