import React from 'react';
import { Image } from 'semantic-ui-react'

export default function GithubAvatar({ avatarUrl }) {
    return <span>{avatarUrl && <Image src={avatarUrl} size="tiny" shape="circular" />}</span>
}