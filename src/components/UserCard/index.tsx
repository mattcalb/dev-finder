import React from 'react';
import { Bio, Card, Followers, Login, Name, Location, ProfilePicture, GitHubLink, PublicRepositories } from './styles';
import { LocationPin } from '@styled-icons/entypo';
import { GitRepository } from '@styled-icons/remix-line';

export interface User {
    login: string,
    name: string,
    bio: string,
    public_repos: number,
    followers: number,
    following: number,
    location: string,
    avatar_url: string,
    html_url: string,
}

const UserCard: React.FC<User> = ({
    login,
    name,
    bio,
    public_repos,
    followers,
    following,
    location,
    avatar_url,
    html_url
}: User) => {
    return (
        <Card>
            <ProfilePicture src={avatar_url} alt="Profile Picture" />
            <Name>{name}</Name>
            <Login>@{login}</Login>
            <Followers>
                Followers: <b>{followers}</b> | Following: <b>{following}</b>
            </Followers>
            <GitRepository size={20} /><PublicRepositories>Public Repositories: <b>{public_repos}</b></PublicRepositories>
            {bio
                ? <Bio>{bio}</Bio>
                : null
            }
            {location
                ? <div>
                    <LocationPin size={15} /><Location>{location}</Location>
                </div>
                : null
            }
            <GitHubLink href={html_url}>View on GitHub</GitHubLink>
        </Card>
    )
}

export default UserCard;