import axios from 'axios';
import abi from '../web3/abi';

var LIVE = true;
var HOST = window.location.hostname
export const db = {
    grw: HOST.includes("grwexchange.com")? 'https://server.grwexchange.com':'http://161.35.212.141:5002', //https://server.grwexchange.com //http://161.35.212.141:5002
    gurleyswap: 'https://server.gurleyswap.com',
    ducoin: 'https://server.ducoinexchange.com',
};

export const Contracts = {
        STAKING: {address: "0x1560F740A7C867FE9D81a6AD05fdCbD425fd81B7", abi: abi.STAKING}, 
        VAULT: {address: "0xb457715313E9F0abAe3e1631159573d6D47e6B41", abi: abi.VAULT}, 
        ROUTER: {address: "0x33F894177d942031a7a17Eb09E32876E3BBe0222", abi: abi.ROUTER},
        FACTORY: {address: "0x268f9A2001ac91BE04b1806FD9A597122D54962d", abi: abi.FACTORY},
        GUSD: {address: "0x9AB44a1e6b7dd487b55E7880B550C675D573FAb2", abi: abi.GRW20},
        DUC: {address: "0x4C80A06cFe42d9235caad2B4e7F8e1d3F69B7B33", abi: abi.DUC}, 
        WGRW: {address: "0xc7B596fC9293Ef903e25Cac103fe718612Da83B0", abi: abi.GRW20},
        SALES: {address: "0xD7025C10298C2c7EeEDCCabdd611326e160d4Fe0", abi: abi.SALES},
        SIGNER: {address: "0xcD8b2c35935f496ED30D5209f1A1Da4713F38D4B", abi: abi.GRW20},
        TOOLS: {address: "0xf868094E84686A515220910cC7cE19cE4226FD8E", abi: abi.TOOLS}, 
        TOOLSGURLEY: {address: "0x505756791F368282a2A312D23BC3a1380c35de12", abi: abi.TOOLS}, 
        LOCKEDSTAKING: {address: "0xEC8f5F1E58A3E313f54784838eEc020cbB00C70C", abi: abi.TOOLS} 
}