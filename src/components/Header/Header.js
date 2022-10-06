import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Header = ({name}) => (
    <Fragment>
        <div className='d-flex align-items-center justify-content-between'>
            <h2 className="h3">{name}</h2>
            <Link to='/add'>Add product</Link>
        </div>
        <hr/>
    </Fragment>
);

Header.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Header;
