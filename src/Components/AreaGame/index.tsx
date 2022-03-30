import { GridItems } from '../../types';
import * as P from './styled';
import GridItem from '../GridItem';

type Props = {
    items:GridItems[];
    handleItemClick:Function;
}

const AreaGame = ({items , handleItemClick}:Props) => {
    return(
        <P.BoxAreaGame>
            
            <P.Grid>
                {items.map((val , k) => (
                    <GridItem value={val} key={k} onClick={() => handleItemClick(k)}/>
                ))}
            </P.Grid>
        
        </P.BoxAreaGame>
    );
}

export default AreaGame;