import { cryptoAssets } from '../store/data';

const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'X-API-KEY': 'icanlZkNbS0mrI/oi0IpUQmYUVZkTxfq6+p/h9j5dno='
    }
};
export async function fetchData(){   
    try {
        const response = await fetch('https://openapiv1.coinstats.app/coins', options)
        const cryptoData = await response.json();
        console.log(cryptoData);
        return cryptoData;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to be caught by the caller
    } 
}
export async function fetchAsset(){
    return cryptoAssets
}


/*import {cryptoData, cryptoAssets} from '../store/data'

export async function fetchData(){
    return cryptoData
}

export async function fetchAsset(){
    return cryptoAssets
}
/*
export function fetchData(){
    return new Promise((resolve) => { 
        resolve(cryptoData) 
    })
}

export function fetchAsset(){
    return new Promise((resolve) => { 
        resolve(cryptoAssets) 
    })
} */