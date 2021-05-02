import {FC} from 'react';

import LatestPublications from './LatestPublications/LatestPublications';
import Workspaces from './Workspaces/Workspaces';

export const Home: FC = () =>{
    return(
        <>
            <LatestPublications/>
            <Workspaces/>
        </>
    );
}

export default Home;