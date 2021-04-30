import {FC} from 'react';
import styled from 'styled-components';

import { Colors } from '../../../../styledHelpers/Colors';
import { fontSize } from '../../../../styledHelpers/FontSizes';

import { IState } from '../../../../reducers';
import { IPhotosReducer } from '../../../../reducers/photoReducers';
import { IUsersReducer } from '../../../../reducers/userReducers';
import { useSelector } from 'react-redux';

const SlideWrap = styled.div`
    min-width:300px;    
    height:300px;
    overflow:hidden;
    position:relative;
`;

const SlidePhoto = styled.img`
    width:300px;
    height:300px;
    object-fit:cover;
    z-index:99;
`;

const Overlay = styled.div`
    width:300px;
    height:300px;
    position:absolute;
    background: linear-gradient(180deg, transparent 0%, ${Colors.darkBlue} 100%);
    z-index:999;
    left:0px;
    top:0px;
    display:flex;
    flex-direction: column;
    justify-content:flex-end;
    padding: 5px;
    font-size: ${fontSize[14]};
`;

const Title = styled.span`
    color: ${Colors.white};
    margin-bottom:5px;
    letter-spacing: 1px;
    line-height:20px;
    max-width:230px;
    font-size: ${fontSize[16]};
`;
const Date = styled.span`
    color: ${Colors.gray};
    margin-right:10px;
`;
const UserAvatar = styled.img`
    width:15px;
    height:15px;
    border-radius:15px;
    margin-right:10px;
`;
const UserName = styled.span`
    color: ${Colors.gray};
`;

const UserData = styled.div`
    display: flex;
    margin-bottom:30px;
    align-items:center;
    
`;

interface ISlide{
    postImage: string;
    title: string;
    userId: number;
    date: string;
}

export const Slide: FC<ISlide> = (props) =>{

    const { usersList, photoList} = useSelector<IState, IUsersReducer & IPhotosReducer>(globalState => ({
        ...globalState.users,
        ...globalState.photos,
    }));

    return(
        <SlideWrap>
            <SlidePhoto src={props.postImage}/>
            <Overlay>
                <Title>{props.title}</Title>
                <UserData>
                    <Date>{props.date}</Date>
                    <UserAvatar src={photoList[props?.userId - 1]?.url}/>
                    <UserName>{usersList[props?.userId - 1]?.name}</UserName>
                </UserData>
            </Overlay>  
        </SlideWrap>
    );
}

export default Slide;