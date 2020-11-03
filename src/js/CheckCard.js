import firstNumberCard from "./firstNumberCard";

export default function CheckCard(numberCard){
    for(let card in firstNumberCard){
        for(let i = 0; i < firstNumberCard[card].length; i+=1){
            let num = firstNumberCard[card][i];
            let numStr = String(numberCard)
            if(num === Number(numStr.slice(0,2)) || num === Number(numStr.slice(0,1))){
                return card;
            }
        }
    }
    return 0;
}