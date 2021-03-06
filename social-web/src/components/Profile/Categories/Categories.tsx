import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import countries from '../../../tools/countries';
import Category from './Category';

import Select from 'react-select'

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

const CustomSelect = styled(Select)`
    min-width:150px;
`

interface ICategories{
    isEditable?: boolean;
}

interface ISelect{
    value:string;
    label:string;
}

const countriesObj = countries.map(el => ({value:`${el}`, label: `${el}`}));
const specialities: ISelect[] = [
    {value:'Web design/development', label:'Web design/development'},
    {value:'Business intelligence', label:'Business intelligence'},
    {value:'Networking', label:'Networking'},
    {value:'Application development', label:'Application development'},
    {value:'General IT', label:'General IT'},
    {value:'Help desk', label:'Help desk'},
];
const expertise: ISelect[] = [
    {value:'Coding Skills', label:'Coding Skills'},
    {value:'Communication Skills', label:'Communication Skills'},
    {value:'Manage Remote Working Teams', label:'Manage Remote Working Teams'},
    {value:'Digital Communications', label:'Digital Communications'},
    {value:'Goal Oriented', label:'Goal Oriented'},
    {value:'Scheduling', label:'Scheduling'},
]

export const Categories: FC<ICategories> = (props) =>{
    
    const [data, setData] = useState({
        country: {value: 'Poland', label: 'Poland'},
        practiseLaw: {value: 'Yes', label: 'Yes'},
        specialities: [{value:'General IT', label:'General IT'}],
        expertise: [{value:'Coding Skills', label:'Coding Skills'},{value:'Digital Communications', label:'Digital Communications'},],
    });

    const lawChange = (val) => setData({...data,practiseLaw: val});
    const countryChange = (val) => setData({...data,country: val});
    const specialitiesChange = (val) => setData({...data,specialities: val});
    const expertiseChange = (val) => setData({...data,expertise: val});
    
    return(
        <Wrapper>
            <Title>Expertise</Title>
            <CatContainter>
                {!props.isEditable 
                    ?
                        <>
                            {data?.expertise.map((el,index) => (<Category key={index} text={el.value}/>))}
                        </>
                    :
                        <CustomSelect 
                        isMulti 
                        onChange={expertiseChange}
                        options={expertise}
                        value={data?.expertise}
                        /> 
                }
            </CatContainter>
            <Title>Specalities</Title>
            <CatContainter>
                {!props.isEditable 
                    ?
                        <>
                        {data?.specialities.map((el,index) => (<Category key={index} text={el.value}/>))}
                        </>
                    :
                        <CustomSelect 
                        isMulti 
                        onChange={specialitiesChange}
                        options={specialities}
                        value={data?.specialities}
                        /> 
                }
            </CatContainter>
            <Title>Admission to practise law</Title>
            <CatContainter>
                {!props.isEditable 
                    ? 
                        <Category text={data?.practiseLaw.value}/>
                    :
                        <CustomSelect
                        onChange={lawChange} 
                        value={data?.practiseLaw} 
                        options={[{value: 'Yes', label: 'Yes'},{value: 'No', label: 'No'}]}/>
                }
            </CatContainter>
            <Title>Countries</Title>
            <CatContainter>
                {!props.isEditable 
                    ? 
                        <Category text={data?.country.value}/>
                    :
                        <CustomSelect 
                        value={data?.country} 
                        onChange={countryChange} 
                        options={countriesObj}/>
                }
            </CatContainter>
        </Wrapper>
    );
};

export default Categories;