import { Console } from 'node:console';
import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../../reducers';
import { IPhotosReducer } from '../../../reducers/photoReducers';
import Entity from './Entity';

const Wrapper = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
`;

interface IEntity {
    photo:string;
    title:string;
    subtext:string;
}

interface IEntitiesContainter{
    filter: string;
}

export const EntitiesContainer: FC<IEntitiesContainter> = (props) => {

    const {photoList} = useSelector<IState, IPhotosReducer>(globalState => ({
        ...globalState.photos,
    }));

    const entitiesArr:IEntity[] =  [];

    for(let i = 0; i < 30; i++)
    {
        entitiesArr.push({photo: `${photoList[i]?.url}`, title: `Comapny #${i}`, subtext: `W goroncej wodzie Comapny #${i}`});
    }

    return(
        <Wrapper>
            {entitiesArr.filter(el => el.title.toLocaleLowerCase().trim().includes(props.filter)).map((el,index) => (<Entity key={index} title={el.title} photo={el.photo} subtext={el.subtext}/>))}
        </Wrapper>
    );
}

export default EntitiesContainer;