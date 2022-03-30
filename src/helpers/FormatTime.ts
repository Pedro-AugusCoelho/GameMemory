export const FormatTimeElapsed = (second:number) => {
    let minutes = Math.floor(second / 60);
    second -= (minutes * 60);
    
    let secString = `${second < 10 ? `0${second}` : second }`;
    let minString = `${minutes < 10 ? `0${minutes}` : minutes}`;

    return `${minString}:${secString}`;
}   