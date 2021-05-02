import {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';

import houseImg from '../../../../icons/house.svg';
import publicationsImg from '../../../../icons/publications.svg';
import peopleImg from '../../../../icons/people.svg';
import entitiesImg from '../../../../icons/entities.svg';
import corporateImg from '../../../../icons/entities2.svg';
import administrationImg from '../../../../icons/administration.svg';
import { fontSize } from '../../../../styledHelpers/FontSizes';

const Wrapper = styled.div`
    background-color:${Colors.white};
    box-shadow: 1px 2px 3px ${Colors.gray};
    width:300px;
    height:220px;
    border-radius:4px;
    overflow:hidden;
`;

const BackgroundImage = styled.img`
    width:300px;
    height:100px;
    object-fit:cover;
`;

const ImgTitleContainter = styled.div`
    display:flex;
    position:relative;
    padding-left: 120px;
    width:300px;
    height:50px;
`;

const IconWrapper = styled.img`
    width:100px;
    height:100px;
    box-sizing:border-box;
    padding:20px;
    background-color:${Colors.white};
    box-shadow: 1px 2px 3px ${Colors.gray};
    border-radius:3px;
    position:absolute;
    left:5px;
    top:-50px;
`;

const Title = styled.span`
    padding-top:5px;
    font-size:${fontSize[18]};
    color:${Colors.darkBlue};
`;

const Info = styled.div`
    margin-top:10px;    
    display:flex;
    align-items:center;
    margin-bottom:10px;
`;

const SmallImg = styled.img`
    width:20px;
    height:20px;
`;

const UserCount = styled.span``;

const LastUpdate = styled.div`
    font-size:${fontSize[12]};
    color:${Colors.gray};
    letter-spacing:.4px;
`;

const img: string = 'https://www.wykop.pl/cdn/c3201142/comment_1607629874cgZhlZgfQx7VMaGz3HNSBK.jpg'

export const SingleWorkspace: FC = () =>{
    return(
        <Wrapper>
            <BackgroundImage src={img}/>
            <ImgTitleContainter>
                <IconWrapper src={houseImg}/>
                <Title>Jakis fajny tytuł</Title>
            </ImgTitleContainter>
            <Info>
                <SmallImg src={houseImg}/>
                Contract
                •
                <SmallImg src={peopleImg}/>
                <UserCount> 150 users</UserCount>
            </Info>
            <LastUpdate>
                Last update 2137days ago
            </LastUpdate>
        </Wrapper>
    );
}

export default SingleWorkspace;