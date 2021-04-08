import React, {FC} from 'react';
import styled from 'styled-components';

import { fontSize } from '../../../../styledHelpers/FontSizes';
import { Colors } from '../../../../styledHelpers/Colors';

import ecoSystemImg from '../../../../icons/ecosystem.svg';

import {IconImg, LeftBarLink} from '../../../../styledHelpers/Components';

export const EcoSystem: FC = () => {
    return (
        <LeftBarLink>
            <IconImg src={ecoSystemImg} alt="Shortcut to ecosystem page"/>
            EcoSystem
        </LeftBarLink>
    );
};