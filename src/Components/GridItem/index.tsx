import * as P from './styled';
import { GridItems } from "../../types";
import b7Svg from '../../svgs/b7.svg';
import items from '../../data';

type Props = {
    value:GridItems,
    onClick:() => void;
}

const GridItem = ({value , onClick}:Props) => {
    return(
        <P.BoxGridItem onClick={onClick} shownBackground={value.permanentShown || value.shown}>
        
            {!value.permanentShown && !value.shown &&
                <P.Icon src={b7Svg} opacity={.1} alt='B7web' />
            }

            {( value.permanentShown || value.shown ) && value.item !== null &&
                <P.Icon src={items[value.item].icon} alt='True' />
            }
        
        </P.BoxGridItem>
    );
}

export default GridItem;