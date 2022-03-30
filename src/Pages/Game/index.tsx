import { useEffect, useState } from 'react';
import AreaGame from '../../Components/AreaGame';
import AreaInfo from '../../Components/AreaInfo';
import { GridItems } from '../../types';
import items from '../../data';
import * as P from './styled';


const Game = () => {
    
    const [playing , setPlaying] = useState<boolean>(false);
    const [timeElapsed , setTimeElapsed] = useState<number>(0);
    const [moveCount , setMoveCount] = useState<number>(0);
    const [showCount , setShowCount] = useState<number>(0);
    const [gridItems , setGridItems] = useState<GridItems[]>([]);


    useEffect(() => {
        handleResetGame();
    },[])

    useEffect(() => {
        const timer = setInterval(() => {
            if(playing){
                setTimeElapsed(timeElapsed + 1)
            }
        },1000);
        return () => clearInterval(timer);
    },[playing , timeElapsed]);

    //verify if opened are equal
    useEffect(() => {
        if(showCount === 2){
            let opened = gridItems.filter(item => item.shown === true);
            if(opened.length === 2){
                if(opened[0].item === opened[1].item){
                    let tempGrid = [...gridItems];
                    for(let i in tempGrid ){
                        if(tempGrid[i].shown){
                            tempGrid[i].permanentShown = true;
                            tempGrid[i].shown = false;
                        }
                    }
                    setGridItems(tempGrid);
                    setShowCount(0);
                    setMoveCount(moveCount + 1);
                }else{
                    setTimeout(() => {
                        let tempGrid = [...gridItems];
                        for(let i in tempGrid ){
                            tempGrid[i].shown = false;
                        } 
                        setGridItems(tempGrid);
                        setShowCount(0);
                        setMoveCount(moveCount + 1);
                    },1000);
                }
            }
        }
    },[showCount, gridItems, moveCount]);

    //verify if game is over
    useEffect(() => {
        if(moveCount > 0 && gridItems.every(item => item.permanentShown === true)){
            setPlaying(false);
        }
    },[moveCount , gridItems])

    
    const handleItemClick = (key:number) => {
        if(playing && key !== null && showCount < 2){
            let tempGrid = [...gridItems];
            if(tempGrid[key].permanentShown === false && tempGrid[key].shown === false){
                tempGrid[key].shown = true;
                setShowCount(showCount + 1);
            }
            
            setGridItems(tempGrid);
        }
    }

    const handleResetGame = () => {
        //step 1 - Reset Game
        setTimeElapsed(0);
        setMoveCount(0);
        setShowCount(0);
        
        //step 2 - Create Grid Void
        let tmpGrid:GridItems[] = []; 
        for(let i = 0; i < (items.length * 2) ; i++){
            tmpGrid.push({ item: null, shown:false, permanentShown:false});
        }
        
        //step 2.1 - Fill Grid
        for(let w = 0 ; w < 2; w++){
            for(let y = 0 ; y < items.length; y++){
                let pos = -1;
                while(pos < 0 || tmpGrid[pos].item !== null){
                    pos = Math.floor(Math.random() * (items.length * 2));
                }
                tmpGrid[pos].item = y;
            }  
        }
        
        //step 2.2 - Launch state
        setGridItems(tmpGrid);
        //step 3 -Start game
        setPlaying(true);
    }
    
    
    return(
        <P.MainGame>
            <AreaInfo onClick={handleResetGame} timeElapsed={timeElapsed} moveCount={moveCount} />
            <AreaGame items={gridItems} handleItemClick={handleItemClick} />
        </P.MainGame>
    )
}

export default Game;