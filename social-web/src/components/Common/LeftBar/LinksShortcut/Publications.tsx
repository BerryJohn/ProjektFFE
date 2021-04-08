import React, {FC} from 'react';
import styled from 'styled-components';

import { fontSize } from '../../../../styledHelpers/FontSizes';
import { Colors } from '../../../../styledHelpers/Colors';

import publicationsImg from '../../../../icons/publications.svg';

import {IconImg, LeftBarLink} from '../../../../styledHelpers/Components';

export const Publications: FC = () => {
    return (
        <LeftBarLink>
            <IconImg src={publicationsImg} alt="Shortcut to Publication page"/>
            Publications
        </LeftBarLink>
    );
};