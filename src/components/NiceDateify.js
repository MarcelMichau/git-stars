import React from 'react';
import moment from 'moment';

export default function NiceDateify({date}) {
    return (
        <span>{moment(date).format('DD/MM/YYYY, H:mm')}</span>
    );
}