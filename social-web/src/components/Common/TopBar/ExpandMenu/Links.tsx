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
import workspaceData from '../../../../tools/workspacesData';

const LinksBody = styled.div`
    max-height:300px;
    width:100%;
    overflow-x:hidden;
    overflow-y: scroll;
`;

interface ILinks{
    closeDropdown(): void;
    filterValue: string;
}

export const Links: FC<ILinks> = (props) => {
    
    const closeDropMenu = () => {
        props.closeDropdown ();
    }

    return(
        <LinksBody>
                {props.filterValue.length == 0 &&
                <SubMenuTitle> Platform </SubMenuTitle>}
                {'home'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"Home"} imgSrc={houseImg} linkTo="/"/>}
                {'publications'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"Publications"} imgSrc={publicationsImg} linkTo="/publications"/>}
                {'people'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"People"} imgSrc={peopleImg} linkTo="/people"/>}
                {'entities'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"Entities"} imgSrc={entitiesImg} linkTo="/entities"/>}
                {'administration'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"Administration"} imgSrc={administrationImg} linkTo="/administration"/>}
                {props.filterValue.length == 0 &&
                <SubMenuTitle> Workspaces</SubMenuTitle>}
                {'client contract'.includes(props.filterValue) &&
                <ExpandMenuLink 
                    onClick={closeDropMenu}  title={"Client contract"} 
                    imgName={workspaceData.filter(el => el.id == `clientContract`)[0].icon} linkTo="/workspaces/clientContract"/>}
                {'supplier contract'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"Supplier contract"} imgSrc={houseImg} linkTo="/workspaces/supplierContract"/>}
                {'corporate'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"Corporate"} imgSrc={corporateImg} linkTo="/workspaces/corporate"/>}
                {'group norms'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"Group Norms"} imgSrc={houseImg} linkTo="/workspaces/groupNorms"/>}
                {'real estate contracts'.includes(props.filterValue) &&
                <ExpandMenuLink onClick={closeDropMenu}  title={"Real estate contracts"} imgSrc={houseImg} linkTo="/workspaces/realEstateContracts"/>}
        </LinksBody>
    );
};

export default Links;