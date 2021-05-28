import React, {FC} from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import { fontSize } from '../../styledHelpers/FontSizes';

import sort from '../../icons/sort.svg';
import filter from '../../icons/filter.svg';
import resize from '../../icons/resize.svg';
import share from '../../icons/share.svg';
import more from '../../icons/more.svg';

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding:0px 5px;
`;

const CustomSelect = styled.select`
    height:30px;
    width:80px;
`;

const Options = styled.div`
    display:flex;
    cursor: pointer;
    font-size:${fontSize[14]};
    height:25px;
`;

const Option = styled.div`
    color:${Colors.gray};
    margin-left:10px;
    padding:2px 2px;
    border-left:1px solid ${Colors.lightGray};
    display:flex;
    align-items:center;
`;

const ImgIcon = styled.img`
    width:14px;
    height:14px;
    margin-left:10px;
    filter: invert(50%);
`;

const More = styled.img`
    width:14px;
    height:14px;
    margin-left:10px;
    cursor: pointer;
`;

const Text = styled.span`
    margin-left:5px;
`;

export const ButtonPanel: FC = (props) => {
    return(
        <Wrapper>
            <CustomSelect></CustomSelect>
            <More src={more}/>
            <Options>
                <Option>
                    <ImgIcon src={sort}/>
                    <Text>Sort</Text>
                    <ImgIcon src={filter}/>
                    <Text>Filters</Text>
                </Option>
                <Option>
                    <ImgIcon src={resize}/>
                    </Option>
                <Option>
                    <ImgIcon src={share}/>
                    <Text>Share</Text>
                </Option>
            </Options>        
        </Wrapper>
    );
}

export default ButtonPanel;