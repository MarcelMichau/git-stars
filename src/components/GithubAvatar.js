import React from 'react';

const avatarStyles = {
    avatarImage: {
        borderRadius: '40px'
    }
}

export default function GithubAvatar({ avatarUrl }) {
    return (
        <div>{avatarUrl && <img src={avatarUrl} alt="avatar" height="75" style={avatarStyles.avatarImage}/>}</div>
    );
}