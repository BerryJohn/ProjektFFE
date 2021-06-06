import  {FC} from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';

interface IWrapperStyle {
    bgColor:string;
}

const Wrapper = styled.div<IWrapperStyle>`
    box-sizing:border-box;
    height:25px;
    padding:5px 10px;
    display:flex;
    align-items:center;
    justify-content:center;
    ${props => (
        `
        color:rgb(${props.bgColor});
        background-color: rgba(${props.bgColor},0.5);
        border:1px solid rgb(${props.bgColor});
        `
    )}
    font-weight:bold;
    border-radius:2px;
    cursor: pointer;
`;

interface IFilterOption{
    text:string;
    color:string;
}

export const FilterOption: FC<IFilterOption> = (props) =>{

    return(
        <Wrapper bgColor={props.color}>
            {props.text}
        </Wrapper>
    );
}

export default FilterOption;