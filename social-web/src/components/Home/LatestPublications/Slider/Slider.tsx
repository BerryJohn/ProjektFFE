import {FC} from 'react';
import styled from 'styled-components';

import SwiperCore, { Navigation, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import { ILastPublications } from '../ShortLastPublications/ShortLastPublications';
import Slide from './Slide';
import { Colors } from '../../../../styledHelpers/Colors';

const Containter = styled.div`
    width:300px;
    height:300px;
`;

const SlidePhoto = styled.img`
    width:300px;
    height:300px;
    object-fit:cover;
    z-index:99;
`;

const Overlay = styled.div`
    width:300px;
    height:300px;
    position:absolute;
    background: linear-gradient(180deg, transparent 0%, ${Colors.darkBlue} 100%);
    z-index:999;
    left:0px;
    top:0px;
`;

const Title = styled.span`
    color: ${Colors.white};
`;
const Date = styled.span`
    color: ${Colors.white};
`;
const UserAvatar = styled.img`
    width:15px;
    height:15px;
    border-radius:15px;
    margin-right:5px;
`;
const UserName = styled.span``;
const postDefaultPhoto: string = 'https://thumbs.dreamstime.com/b/frustrated-stressed-male-book-writer-frustrated-stressed-male-writer-sitting-laptop-writing-book-117750236.jpg';

SwiperCore.use([Navigation,Pagination, Autoplay]);

interface ISlider extends ILastPublications{};

export const Slider: FC<ISlider> = (props) =>{


    return(
        <Containter>
            <Swiper
            spaceBetween={5}
            navigation
            pagination={{ clickable: true }}
            autoplay={{delay: 3000}}
            >
                <SwiperSlide>
                <Slide postImage={postDefaultPhoto} 
                        date="21.07.2021" 
                        userId={props.publications[0]?.userId} 
                        title={props.publications[0]?.title} ></Slide>            
                </SwiperSlide>  
                <SwiperSlide>
                <Slide postImage={postDefaultPhoto} 
                           date="21.07.2021" 
                           userId={props.publications[1]?.userId} 
                           title={props.publications[1]?.title} ></Slide>            
                </SwiperSlide>  
                <SwiperSlide>
                <Slide postImage={postDefaultPhoto} 
                           date="21.07.2021" 
                           userId={props.publications[2]?.userId} 
                           title={props.publications[2]?.title} ></Slide>            
                </SwiperSlide>   
            </Swiper>
        </Containter>
    );
}

export default Slider;