// @flow

import React from 'react';

// Bootstrap components
import { Well, Glyphicon } from 'react-bootstrap';

const NotFound = (): React$Element<'div'> => {
    return (
        <div id="page-not-found" className="page full-page">
            <div className="page-box-min flex flex-center flex-col">
                <Well>
                    <Glyphicon glyph="console" /><span className="font-code"> 404 nothing found here dude!</span>
                </Well>
            </div>
        </div>
    );
};

export default NotFound;



