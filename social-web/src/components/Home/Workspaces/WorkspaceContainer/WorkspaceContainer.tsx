import {FC} from 'react';
import styled from 'styled-components';

import SingleWorkspace from './SingleWorkspace';

import SwiperCore, { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper.scss';

const Containter = styled.div`
    width:1000px;
    height: 250px;
`;

const CustomSwiper = styled(Swiper)`
    height:250px;
`;

export const WorkspaceContainer: FC = () =>{
    return(
        <Containter>
            <CustomSwiper slidesPerView={3} spaceBetween={-10}>  
                <SwiperSlide>
                    <SingleWorkspace/>
                </SwiperSlide>
                <SwiperSlide>
                    <SingleWorkspace/>
                </SwiperSlide>
                <SwiperSlide>
                    <SingleWorkspace/>
                </SwiperSlide>
                <SwiperSlide>
                    <SingleWorkspace/>
                </SwiperSlide>
                <SwiperSlide>
                    <SingleWorkspace/>
                </SwiperSlide>
                <SwiperSlide>
                    <SingleWorkspace/>
                </SwiperSlide>
                <SwiperSlide>
                    <SingleWorkspace/>
                </SwiperSlide>
                <SwiperSlide>
                    <SingleWorkspace/>
                </SwiperSlide>
            </CustomSwiper>
        </Containter>
    );
}

export default WorkspaceContainer;