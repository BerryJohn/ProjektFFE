import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import countries from '../../../tools/countries';
import Category from './Category';

const Wrapper = styled.div`
    box-sizing:border-box;
    padding: 10px;
    width:100%;
    min-height:200px;
    background-color:${Colors.white};
    border-bottom:1px solid ${Colors.lightBackground};
`;

const Title = styled.div`
    color:${Colors.gray};
    margin-top:10px;
    margin-bottom:5px;
`;

const CatContainter = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

interface ICategories{
    isEditable?: boolean;
}


export const Categories: FC<ICategories> = (props) =>{
    
    const [data, setData] = useState({
        country: 'Niger',
        practiseLaw: 'Yes',
    });
    
    return(
        <Wrapper>
            <Title>Expertise</Title>
            <CatContainter>
                <Category text="POLEK TO MAŁY TROLEK SROLEK ITD DUPOLEK"/>
            </CatContainter>
            <Title>Specalities</Title>
            <CatContainter>
                <Category text="Fast harnaś drinking"/>
                <Category text="Over 9000$/h"/>
            </CatContainter>
            <Title>Admission to practise law</Title>
            <CatContainter>
                {!props.isEditable 
                    ? <Category text={data?.practiseLaw}/>
                    :
                    <select onChange={e => setData({...data, practiseLaw: e.target.value})}>
                        <option>Select</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                }
            </CatContainter>
            <Title>Countries</Title>
            <CatContainter>
                {!props.isEditable 
                    ? <Category text={data?.country}/>
                    :
                    <select onChange={e => setData({...data, country: e.target.value})}>
                        <option>Select</option>
                        {countries.map(el => (<option>{el}</option>))}
                    </select>
                }
            </CatContainter>
        </Wrapper>
    );
};

export default Categories;