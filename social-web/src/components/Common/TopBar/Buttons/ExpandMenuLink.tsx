import React, {FC} from 'react';
import styled from 'styled-components';

import { Colors } from '../../../../styledHelpers/Colors';
import { fontSize } from '../../../../styledHelpers/FontSizes';

const LinkBody = styled.div`
    width:190px;
    height:25px;
    margin:3px;
    display:flex;
    align-items:center;
`;

const LinkImg = styled.img`
    width:25px;
    height:25px;
`;

const LinkSpan = styled.span`
    margin-left:10px;
    color: ${Colors.darkBlue};
    font-size: ${fontSize[14]};
`;

interface ITitle{
    title: string;
    imgSrc: string;
}

export const ExpandMenuLink: FC<ITitle> = props =>{
    return(
        <LinkBody>
            <LinkImg src={props.imgSrc} />
            <LinkSpan>{props.title}</LinkSpan>
        </LinkBody>
    );
}

export default ExpandMenuLink;