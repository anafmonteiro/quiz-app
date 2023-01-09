const sortHighScores = (value:any) => {
    return value.sort((a:any , b:any) =>{
        return b.score - a.score;
    })
}
export {
    sortHighScores
}