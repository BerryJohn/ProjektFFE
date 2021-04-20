import {FC} from 'react';

import styled from 'styled-components';
import { Colors } from '../../../../styledHelpers/Colors';
import { fontSize } from '../../../../styledHelpers/FontSizes';

import ExpandMenuLink from './Buttons/ExpandMenuLink';

import houseImg from '../../../../icons/house2.svg';
import publicationsImg from '../../../../icons/publications.svg';
import peopleImg from '../../../../icons/people.svg';
import entitiesImg from '../../../../icons/entities.svg';
import corporateImg from '../../../../icons/entities2.svg';
import administrationImg from '../../../../icons/administration.svg';

import { SubMenuTitle } from '../../../../styledHelpers/Components';

const LinksBody = styled.div`
    max-height:300px;
    overflow-y: scroll;
`;

interface ILinks{
    closeDropdown(): void;
}

export const Links: FC<ILinks> = (props) => {
    
    const closeDropMenu = () => {
        props.closeDropdown ();
    }

    return(
        <LinksBody>
                <SubMenuTitle>
                    Platform
                </SubMenuTitle>
                <ExpandMenuLink onClick={closeDropMenu} title={"Home"} imgSrc={houseImg} linkTo="/"/>
                <ExpandMenuLink onClick={closeDropMenu}  title={"Publications"} imgSrc={publicationsImg} linkTo="/publications"/>
                <ExpandMenuLink onClick={closeDropMenu}  title={"People"} imgSrc={peopleImg} linkTo="/people"/>
                <ExpandMenuLink onClick={closeDropMenu}  title={"Entities"} imgSrc={entitiesImg} linkTo="/entities"/>
                <ExpandMenuLink onClick={closeDropMenu}  title={"Administration"} imgSrc={administrationImg} linkTo="/administration"/>
                <SubMenuTitle>
                    Workspaces
                </SubMenuTitle>
                <ExpandMenuLink onClick={closeDropMenu}  title={"Client contract"} imgSrc={houseImg} linkTo="/clientContract"/>
                <ExpandMenuLink onClick={closeDropMenu}  title={"Supplier contract"} imgSrc={houseImg} linkTo="/supplierContract"/>
                <ExpandMenuLink onClick={closeDropMenu}  title={"Corporate"} imgSrc={corporateImg} linkTo="/corporate"/>
                <ExpandMenuLink onClick={closeDropMenu}  title={"Group Norms"} imgSrc={houseImg} linkTo="/groupNorms"/>
                <ExpandMenuLink onClick={closeDropMenu}  title={"Real estate contracts"} imgSrc={houseImg} linkTo="realEstateContracts"/>
        </LinksBody>
    );
};

export default Links;