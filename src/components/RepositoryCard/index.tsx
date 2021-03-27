import React from 'react';
import { Card, Description, Language, Name, StargazerNumber } from './styles';
import { Star }  from '@styled-icons/entypo/Star';

export interface Repo {
    name: string,
    description: string,
    language: string,
    stargazers_count: number,
    html_url: string,
}

const Repository: React.FC<Repo> = ({name, description, language, stargazers_count, html_url}) => {

    return (
        <Card>
            <Name href={html_url}>{name}</Name>
            {description 
            ? <Description>{description}</Description> 
            : null}
            <Language>{language}</Language>
            <div>
                <StargazerNumber>{stargazers_count}</StargazerNumber><Star size={14}/>
            </div>
        </Card>
    )
}

export default Repository;