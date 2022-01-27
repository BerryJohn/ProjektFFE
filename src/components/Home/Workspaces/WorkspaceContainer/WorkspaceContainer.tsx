import {FC} from 'react';
import styled from 'styled-components';

import data from '../../../../tools/workspacesData';

import SingleWorkspace from './SingleWorkspace';

import SwiperCore, { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';

const Containter = styled.div`
    width:1000px;
`;

const CustomSwiper = styled(Swiper)`
    height:225px;
`;

export const WorkspaceContainer: FC = () =>{
    return(
        <Containter>
            <CustomSwiper slidesPerView={3} spaceBetween={-10}>  
                {data.map(el => (
                    <SwiperSlide>
                        <SingleWorkspace title={el.name} img={el.icon} users={el.users} lastUpdate={el.lastUpdate} linkTo={`/workspaces/${el.id}`}/>
                    </SwiperSlide>
                ))}
            </CustomSwiper>
        </Containter>
    );
}

export default WorkspaceContainer;