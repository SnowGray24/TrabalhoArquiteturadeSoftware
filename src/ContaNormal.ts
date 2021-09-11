import Conta from "./Conta";

class ContaNormal implements Conta{
    limitSlot:Number = 3;

    status = () =>{
        console.log("*****************************");
        console.log("**** STATUS CONTA NORMAL ****");
        console.log("Slot Limite: "+this.limitSlot);
        console.log("*****************************");
        
    }
}
export default ContaNormal;