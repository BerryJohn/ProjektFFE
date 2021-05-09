import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import house from '../../../icons/house.svg';

const Wrapper = styled.div`
    width:1000px;
    padding:5px;
    border-bottom: 1px solid ${Colors.lightBackground};
`;

const Title = styled.div`
    color:${Colors.darkBlue};
    margin-top:10px;
`;
const SmallTitle = styled.div`
    color:${Colors.gray};
    margin-top:15px;
    font-size:${fontSize[14]};
`;
const Text = styled.div`
    color:${Colors.blue};
    font-size:${fontSize[14]};
    margin-top:10px;
`;
const AttachCV = styled.div`
    width: 600px;
    height:30px;
    background-color:${Colors.lightGray};
    display:flex;
    align-items:center;
    font-size:${fontSize[14]};
    margin-top:5px;
`;

const AttachImg = styled.img`
    width:20px;
    height:20px;
    margin:0px 10px;
`;

const Correspondant = styled.div`
    width: 600px;
    height:30px;
    background-color:${Colors.lightGray};
    display:flex;
    align-items:center;
    font-size:${fontSize[14]};
    margin-top:5px;
`;

interface IJobInfo{
    isEditable: boolean;
}

export const JobInfo: FC<IJobInfo> = (props) =>{

    const [data, setData] = useState({
        salary: '640$',
        terms: 'Montly 10kPLN retainer - see with Polek',
        file: 'xD.png',
        services: 'Corparate with Harnaś and internal tatras'
    });

    return(
        <Wrapper> 
            <Title>Panel informations</Title>
            <SmallTitle>Hourly fee</SmallTitle>
            <Text>
                {
                !props?.isEditable ? (`${data?.salary}/day (Negociated)`)
                            :(<input type='text' value={data?.salary} onChange={e => setData({...data, salary: e.target.value})}/>)
                }  
            </Text>
            <SmallTitle>Terms & conditions</SmallTitle>
            <Text>
                {
                !props?.isEditable ? data?.terms
                            :(<input type='text' value={data?.terms} onChange={e => setData({...data, terms: e.target.value})}/>)
                }  
            </Text>
            <AttachCV><AttachImg src={house}/>
                {
                !props?.isEditable ? data?.file
                            :(<input type='file' onChange={e => setData({...data, file:  e.target.files[0].name as string})}/>)
                }  
            </AttachCV>
            <Title>Services and Projects</Title>
            <Text>
                {
                !props?.isEditable ? data?.services
                            :(<input type='text' value={data?.services} onChange={e => setData({...data, services: e.target.value})}/>)
                }  
            </Text>
            <Title>Internal Correspondants</Title>
            <Correspondant />
            <Correspondant />
        </Wrapper>
    );
};

export default JobInfo;