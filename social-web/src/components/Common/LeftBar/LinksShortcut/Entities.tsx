import React, {FC} from 'react';
import styled from 'styled-components';

import { fontSize } from '../../../../styledHelpers/FontSizes';
import { Colors } from '../../../../styledHelpers/Colors';

import entitiesImg from '../../../../icons/entities2.svg';

import {IconImg, LeftBarLink} from '../../../../styledHelpers/Components';

export const Entities: FC = () => {
    return (
        <LeftBarLink>
            <IconImg src={entitiesImg} alt="Shortcut to Entities page"/>
            Entities
        </LeftBarLink>
    );
};