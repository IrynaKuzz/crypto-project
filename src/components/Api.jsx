import {cryptoData, cryptoAssets} from '../store/data'


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