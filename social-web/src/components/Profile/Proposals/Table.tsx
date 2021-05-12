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
    width: calc(1000px / 6);
    font-size: ${fontSize[20]};
    padding:10px;
`;

const Data = styled.div`
    display:flex;
    width:100%;
`;

const Column = styled.div`
    width: calc(1000px / 6);
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
        names:[
            {id:0,value:'Operation Times'},
            {id:1,value:'Op. to kretyn'},
            {id:2,value:'Op. Avelante'}],
        entity:[
            {id:0,value:'Renault Corporation'},
            {id:1,value:'Mercedes Benz Daimler'},
            {id:2,value:'Renault Brazil'}],
        location:[
            {id:0,value:'France'},
            {id:1,value:'Germany'},
            {id:2,value:'Brazil'}],
        expertise:[
            {id:0,value:'#TAX'},
            {id:1,value:'#MDM&A'},
            {id:2,value:'#Social'}],
        date:[
            {id:0,value:'20.01.2021'},
            {id:1,value:'21.05.2021'},
            {id:2,value:'11.03.2021'}],
        firm:[
            {id:0,value:'Racinne'},
            {id:1,value:'Scafford'},
            {id:2,value:'Harnas'}],
        }
    );

    return(
        <Wrapper>
            <Headers>
                <Header>Name</Header>
                <Header>Entity</Header>
                <Header>Location</Header>
                <Header>Expertise</Header>
                <Header>Date</Header>
                <Header>Firm</Header>
            </Headers>
            <Data>
                <Column>
                    {!props.isEditable ?
                        data.names.map(el => (<Row>{el.value}</Row>)) :
                        data.names.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.names.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,names: newData});
                        }}></CustomInput>))}
                </Column>
                <Column>
                {!props.isEditable ?
                        data.entity.map(el => (<Row>{el.value}</Row>)) :
                        data.entity.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.entity.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,entity: newData});
                        }}></CustomInput>))}
                </Column>
                <Column>
                {!props.isEditable ?
                        data.location.map(el => (<Row>{el.value}</Row>)) :
                        data.location.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.location.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,location: newData});
                        }}></CustomInput>))}
                </Column>
                <Column>
                {!props.isEditable ?
                        data.expertise.map(el => (<Row>{el.value}</Row>)) :
                        data.expertise.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.expertise.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,expertise: newData});
                        }}></CustomInput>))}
                </Column>
                <Column>
                {!props.isEditable ?
                        data.date.map(el => (<Row>{el.value}</Row>)) :
                        data.date.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.date.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,date: newData});
                        }}></CustomInput>))}
                </Column>
                <Column>
                {!props.isEditable ?
                        data.firm.map(el => (<Row>{el.value}</Row>)) :
                        data.firm.map((el,index) => (<CustomInput value={el.value} type='text' onChange={(e) =>{
                            let newData = data.firm.map(el => {
                                if(el.id == index)
                                    {el.value = e.target.value;return el;}
                                else return el;
                            }); setData({...data,firm: newData});
                        }}></CustomInput>))}
                </Column>
            </Data>
        </Wrapper>
    );
};

export default Table;