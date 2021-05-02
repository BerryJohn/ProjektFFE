import {FC, useState} from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { IComment } from '../../../entities/comments';
import { IState } from '../../../reducers';
import { ICommentReducer } from '../../../reducers/commentReducer';
import { IPhotosReducer } from '../../../reducers/photoReducers';
import { IUsersReducer } from '../../../reducers/userReducers';


import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizes';
import SinglePost from './SinglePost';

export const AllPosts: FC = () =>{

    const [page, setPage] = useState(0);

    const { commentList } = useSelector<IState, ICommentReducer>(globalState => ({
        ...globalState.comments
    }));
    const pages: any[] = [];
    for(let i = 0; i < commentList.length; i += 10)
    {
        pages.push(commentList.slice(i,i+10)); 
    }

    return(
        <>
            {pages.map((el,index) => 
            (<button onClick={() => setPage(index)}>{index}</button>)
            )}
            {pages[page]?.map( (e:IComment) => 
                (<SinglePost text={e.body} title={e.name}/>)
            )}
        </>
    );
}

export default AllPosts;