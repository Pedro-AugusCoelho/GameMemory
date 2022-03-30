import logoImage from '../../assets/Logo.png';
import { FormatTimeElapsed } from '../../helpers/FormatTime';
import Restart from '../../svgs/restart.svg';
import * as P from './styled';

type Props = {
    timeElapsed:number,
    moveCount:number,
    onClick:React.MouseEventHandler<HTMLButtonElement>
}


const AreaInfo = ({onClick , timeElapsed , moveCount}:Props) => {
    return(
        <P.BoxAreaInfo>
            
            <P.LogoLink>
                {<img src={logoImage} alt='Link' />}
            </P.LogoLink>

            <P.Info>
                <P.Box>
                    <p>Tempo</p>
                    <span>{FormatTimeElapsed(timeElapsed)}</span>
                </P.Box>
                
                <P.Box>
                    <p>Movimentos</p>
                    <span>{moveCount}</span>
                </P.Box>
            </P.Info>

            <P.Btn onClick={onClick}>
                <P.Icon>
                    <img src={Restart} alt='Reset' />
                </P.Icon>
                <p>Reiniciar</p>
            </P.Btn>
        
        </P.BoxAreaInfo>
    );
}

export default AreaInfo;