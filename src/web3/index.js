import { Networks } from './networks';
import { ethers, utils } from "ethers";

  export const contract = (_contract, _abi, _signer) => {  
    const Contract = new ethers.Contract(_contract, _abi, _signer);
    return Contract;
};