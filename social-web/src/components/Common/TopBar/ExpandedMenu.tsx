import React, {FC} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

import ExpandMenuLink from './Buttons/ExpandMenuLink';

import houseImg from '../../../icons/house2.svg';
import publicationsImg from '../../../icons/publications.svg';
import peopleImg from '../../../icons/people.svg';
import entitiesImg from '../../../icons/entities.svg';
import corporateImg from '../../../icons/entities2.svg';
import administrationImg from '../../../icons/administration.svg';

const MenuBody = styled.div`
    width:210px;
    height:400px;
    background-color:${Colors.white};
    position:absolute;
    right:0px;
    box-shadow: 1px 1px 2px ${Colors.lightGray};
    border:0px 1px 1px 1px solid ${Colors.lightGray};
    border-radius:3px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const InputFilter = styled.input`
    width:190px;
    height:20px;
    padding:3px 6px;
    outline:none;
    margin:3px 0px;
    border:1px solid ${Colors.lightGray};
`;

const SubMenuTitle = styled.span`
    align-self:flex-start;
    margin-left:3px;
    color: ${Colors.gray};
    font-weight:600;
    font-size: ${fontSize[12]};
    margin: 3px 6px;
`;

export const ExpandedMenu: FC = () => {
    return(
        <MenuBody>
            <InputFilter placeholder='Filter...'/>
            <SubMenuTitle>
                Platform
            </SubMenuTitle>
            <ExpandMenuLink title={"Home"} imgSrc={houseImg} linkTo="/"/>
            <ExpandMenuLink title={"Publications"} imgSrc={publicationsImg} linkTo="/publications"/>
            <ExpandMenuLink title={"People"} imgSrc={peopleImg} linkTo="/people"/>
            <ExpandMenuLink title={"Entities"} imgSrc={entitiesImg} linkTo="/entities"/>
            <ExpandMenuLink title={"Administration"} imgSrc={administrationImg} linkTo="/administration"/>
            <SubMenuTitle>
                Workspaces
            </SubMenuTitle>
            <ExpandMenuLink title={"Client contract"} imgSrc={houseImg} linkTo="/clientContract"/>
            <ExpandMenuLink title={"Supplier contract"} imgSrc={houseImg} linkTo="/supplierContract"/>
            <ExpandMenuLink title={"Corporate"} imgSrc={corporateImg} linkTo="/corporate"/>
            <ExpandMenuLink title={"Group Norms"} imgSrc={houseImg} linkTo="/groupNorms"/>
            <ExpandMenuLink title={"Real estate contracts"} imgSrc={houseImg} linkTo="realEstateContracts"/>
        </MenuBody>
    );
};

export default ExpandedMenu;