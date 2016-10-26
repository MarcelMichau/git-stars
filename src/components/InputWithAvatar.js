import React, {PropTypes} from 'react';
import SearchInput from './SearchInput';

const InputWithAvatar = props => {
    const { avatarUrl, onSubmit } = props; 
    return (
        <div>
            <SearchInput onSubmit={(username) => props.onSubmit(username) }/>
                {avatarUrl && <img src={avatarUrl} alt="avatar" height="75" />}
        </div>
    );
};

InputWithAvatar.propTypes = {
    
};

export default InputWithAvatar;