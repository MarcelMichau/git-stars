import React from 'react';
import SearchInput from './SearchInput';
import GithubAvatar from './GithubAvatar';
import { Container, Grid } from 'semantic-ui-react';

const InputWithAvatar = props => {
    const { avatarUrl, onSubmit } = props;

    return (
        <Container>
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={10}>
                        <SearchInput onSubmit={(username) => onSubmit(username)} />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <GithubAvatar avatarUrl={avatarUrl} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default InputWithAvatar;