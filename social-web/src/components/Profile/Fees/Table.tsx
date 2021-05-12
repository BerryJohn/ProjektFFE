import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import DatePicker from 'react-date-picker';


const Wrapper = styled.div`
    width:100%;
`;

const Headers = styled.div`
    display:flex;
`;

const Header = styled.div`
    width: calc(1000px / 5);
    font-size: ${fontSize[20]};
    padding:10px;
`;

const Data = styled.div`
    display:flex;
`;

const Column = styled.div`
    width: calc(1000px / 5);
    padding:10px;
    display:flex;
    flex-direction:column;
`;

const Row = styled.div`
    padding:2px 4px;
    font-size: ${fontSize[14]};
    width:100px;
    height:15px;
    padding:5px 10px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;

const CustomInput = styled.input`
    width:100px;
`;

interface ITable{
    isEditable: boolean;
}

export const Table: FC<ITable> = (props) =>{

    const [data, setData] = useState(
        {
        years:[
            {id:0,value:'2019'},
            {id:1,value:'2018'},
            {id:2,value:'2017'}],
        costcenter:[
            {id:0,value:'CS 153'},
            {id:1,value:'CS 153'},
            {id:2,value:'CS 47'},
            {id:3,value:'CS 153'},
            {id:4,value:'CS 32'}],
        totalamount:[
            {id:0,value:'3500$'},
            {id:1,value:'9500$'},
            {id:2,value:'10500$'},
            {id:3,value:'18500$'},
            {id:4,value:'15500$'}],
        lawfirm:[
            {id:0,value:'Clifford Chance'},
            {id:1,value:'Harnaś'},
            {id:2,value:'Harnaś'},
            {id:3,value:'Harnaś'},
            {id:4,value:'Harnaś'}],
        });

    return(
        <Wrapper>
            <Headers>
                <Header>Year</Header>
                <Header>Cost center</Header>
                <Header>Total amount</Header>
                <Header>Law firm</Header>
            </Headers>
            <Data>
                <Column>
                    {!props.isEditable ?
                        data.years.map(el => (<Row>{el.value}</Row>)) :
                        data.years.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.years.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,years: newData});
                        }}></CustomInput>))}
                </Column>
                <Column>
                    {!props.isEditable ?
                        data.costcenter.map(el => (<Row>{el.value}</Row>)) :
                        data.costcenter.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.costcenter.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,costcenter: newData});
                        }}></CustomInput>))}
                </Column>
                <Column>
                    {!props.isEditable ?
                        data.totalamount.map(el => (<Row>{el.value}</Row>)) :
                        data.totalamount.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.totalamount.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,totalamount: newData});
                        }}></CustomInput>))}
                </Column>
                <Column>
                    {!props.isEditable ?
                        data.lawfirm.map(el => (<Row>{el.value}</Row>)) :
                        data.lawfirm.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.lawfirm.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,lawfirm: newData});
                        }}></CustomInput>))}
                </Column>

            </Data>
        </Wrapper>
    );
};

export default Table;