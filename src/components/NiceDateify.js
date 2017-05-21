import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const NiceDateify = ({ date }) => (
	<span>{moment(date).format('DD/MM/YYYY, H:mm')}</span>
);

NiceDateify.propTypes = {
	date: PropTypes.string.isRequired
};

export default NiceDateify;
