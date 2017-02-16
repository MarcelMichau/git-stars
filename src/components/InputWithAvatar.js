import React, { PropTypes } from 'react';
import SearchInputContainer from './SearchInputContainer';
import GithubAvatar from './GithubAvatar';
import { Container, Grid } from 'semantic-ui-react';

const InputWithAvatar = props => {
    const { avatarUrl } = props;

    return (
        <Container>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={10}>
                        <SearchInputContainer />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <GithubAvatar avatarUrl={avatarUrl} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

InputWithAvatar.propTypes = {
    avatarUrl: PropTypes.string.isRequired
};

export default InputWithAvatar;