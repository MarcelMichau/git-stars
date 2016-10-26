import React from 'react';
import SearchInput from './SearchInput';
import GithubAvatar from './GithubAvatar';

const InputWithAvatar = props => {
    const { avatarUrl, onSubmit } = props;

    return (
        <div className="ui container grid">
            <div className="ten wide column">
                <SearchInput onSubmit={(username) => onSubmit(username)} />
            </div>
            <div className="two wide centered column">
                <GithubAvatar avatarUrl={avatarUrl} />
            </div>
        </div>
    );
};

export default InputWithAvatar;