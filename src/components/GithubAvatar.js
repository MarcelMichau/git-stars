import React from 'react';

const avatarStyles = {
    avatarImage: {
        borderRadius: '40px'
    }
}

export default function GithubAvatar(props) {
    const { avatarUrl } = props;

    return (
        <div>{avatarUrl && <img src={avatarUrl} alt="avatar" height="75" style={avatarStyles.avatarImage}/>}</div>
    );
}