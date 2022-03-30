import AndroidSvg from '../svgs/android.svg';
import CaminhaoSvg from '../svgs/caminhao.svg';
import DisneySvg from '../svgs/disney.svg';
import EstrelaSvg from '../svgs/estrela.svg';
import GasolinaSvg from '../svgs/gasolina.svg';
import MotoSvg from '../svgs/moto.svg';

type imgs = {
    name:string,
    icon:any,
}


const items:imgs[] = [
    {name:'android', icon:AndroidSvg},
    {name:'Caminhao', icon:CaminhaoSvg},
    {name:'Disney', icon:DisneySvg},
    {name:'Estrela', icon:EstrelaSvg},
    {name:'Gasolina', icon:GasolinaSvg},
    {name:'Moto', icon:MotoSvg},
]

export default items;