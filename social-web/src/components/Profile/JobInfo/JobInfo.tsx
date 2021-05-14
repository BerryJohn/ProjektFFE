import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import file from '../../../icons/file.svg';
import Correspondant from './Correspondant';
import { IUsersReducer } from '../../../reducers/userReducers';
import { ISingleUser } from '../../../entities/users';
import { IState } from '../../../reducers';
import { useSelector } from 'react-redux';

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
    width: 550px;
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

const CustomSelect = styled.select`
    height:25px;
    max-width:170px;
    outline:none;
    box-sizing:border-box;
    padding:3px;
    border:1px solid ${Colors.lightGray};
    border-radius:2px;
`;
const CustomInput = styled.input`
    height:25px;
    outline:none;
    box-sizing:border-box;
    padding:3px;
    border:1px solid ${Colors.lightGray};
    border-radius:2px;
`;

const CustomSelectUsers = styled(CustomSelect)`
    margin-top:5px;
`;

const ColumnInputs = styled.div`
    display:flex;
    flex-direction:column;
`;

interface IJobInfo{
    isEditable: boolean;
}

export const JobInfo: FC<IJobInfo> = (props) =>{

    const { usersList} = useSelector<IState, IUsersReducer>(globalState =>({
        ...globalState.users,
    }));

    const [data, setData] = useState({
        salary: '640',
        currency: '$',
        negociated: true,
        terms: 'Montly 10kPLN retainer - see with Polek',
        file: 'xD.png',
        services: 'Corparate with Harnaś and internal tatras',
        userOneID: '2',
        userTwoID: '3',
    });

    return(
        <Wrapper> 
            <Title>Panel informations</Title>
            <SmallTitle>Hourly fee</SmallTitle>
            <Text>
                {
                !props?.isEditable ? (`${data?.salary}${data?.currency}/day ${data?.negociated ? '(Negociated)' : '(Non-negotiable)'}`)
                            :(<>
                                <CustomInput type='text' value={data?.salary} onChange={e => setData({...data, salary: e.target.value})}/>
                                <CustomSelect value={data?.currency} onChange={e => setData({...data, currency: e.target.value})}>
                                    <option>PLN</option>
                                    <option>$</option>
                                    <option>€</option>
                                    <option>£</option>
                                </CustomSelect>
                                <CustomInput type='checkbox' checked={data?.negociated} onChange={e => setData({...data, negociated: e.target.checked})}/>(Negociated)
                            </>)
                }  
            </Text>
            <SmallTitle>Terms & conditions</SmallTitle>
            <Text>
                {
                !props?.isEditable ? data?.terms
                            :(<CustomInput type='text' value={data?.terms} onChange={e => setData({...data, terms: e.target.value})}/>)
                }  
            </Text>
            <AttachCV><AttachImg src={file}/>
                {
                !props?.isEditable ? data?.file
                            :(<input type='file' onChange={e => setData({...data, file:  e.target.files[0].name as string})}/>)
                }  
            </AttachCV>
            <Title>Services and Projects</Title>
            <Text>
                {
                !props?.isEditable ? data?.services
                            :(<CustomInput type='text' value={data?.services} onChange={e => setData({...data, services: e.target.value})}/>)
                }  
            </Text>
            <Title>Internal Correspondants</Title>
            {
                !props?.isEditable ? (<Correspondant userId={data?.userOneID}/>) 
                :(
                    <>
                        <CustomSelect value={data?.userOneID} onChange={e => setData({...data, userOneID: e.target.value})}>
                            {usersList?.map((el,index) => 
                                (<option key={index} value={el.id}>{el.name}</option>)
                            )}
                        </CustomSelect>
                    </>
                )
            }
            {
                !props?.isEditable ? (<Correspondant userId={data?.userTwoID}/>) 
                :(
                    <ColumnInputs>
                        <CustomSelectUsers value={data?.userTwoID} onChange={e => setData({...data, userTwoID: e.target.value})}>
                            {usersList?.map((el,index) => 
                                (<option key={index} value={el.id}>{el.name}</option>)
                            )}
                        </CustomSelectUsers>
                    </ColumnInputs>
                )
            }
        </Wrapper>
    );
};

export default JobInfo;