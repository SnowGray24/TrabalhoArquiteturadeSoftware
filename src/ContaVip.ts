import Conta from "./Conta";

class ContaVip implements Conta{
    limitSlot:Number = 100;

    status = () =>{
        console.log("*****************************");
        console.log("***** STATUS CONTA VIP ******");
        console.log("Slot Limite: "+this.limitSlot);
        console.log("*****************************");
        
    }
}

export default ContaVip;