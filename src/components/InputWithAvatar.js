import React from 'react';
import SearchInput from './SearchInput';
import GithubAvatar from './GithubAvatar';

const InputWithAvatar = props => {
    const { avatarUrl, onSubmit } = props; 

    return (
        <div>
            <SearchInput onSubmit={(username) => onSubmit(username) }/>
            <GithubAvatar avatarUrl={avatarUrl}/>
        </div>
    );
};

export default InputWithAvatar;