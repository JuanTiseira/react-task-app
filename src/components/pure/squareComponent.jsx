import React, {useState, useEffect} from 'react'


const SquareComponent = () => {
    //opcional colocarlo como initialValue de squareState
    let squareColor= 'black'
    const [changeColor, setChangeColor] = useState(false);
    const [squareState, setSquareState] = useState('black');
    
    const initChangeColor = () => {
        setChangeColor(true)
    }
    const stopChangeColor = () => {
        setChangeColor(false)
    }


    const generateRandomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
      
        const rbgColor = `rgb(${r},${g},${b})`;
        return rbgColor;
      };
    
    const squareStyle = {
        backgroundColor: squareState,
        width: '255px',
        height: '255px'
    }

    useEffect(() => {
        
        console.log('componente creado')
        
        const intervalID = setInterval(() => {

            if (changeColor){
                const newColor = generateRandomColor();
                console.log(newColor)
                setSquareState(newColor)
            }
        }, 1000);
        

        return  () => {
            
            clearInterval(intervalID);
        }
    }, [changeColor]);

    return (
        <div style={{justifyContent:'center', display:'flex', alignItems:'center', padding:'100px'}}>
            {/* {generateSquare()}   */}
            <div style={squareStyle} 
                    onMouseOver={initChangeColor} 
                    onMouseOut={stopChangeColor}
                    onDoubleClick={stopChangeColor}>

                </div>      
        </div>
    )
}

export default SquareComponent