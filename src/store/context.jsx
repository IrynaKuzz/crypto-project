import { createContext, useState, useEffect } from "react"
import { fetchData, fetchAsset } from "../components/Api"

const Context = createContext({
    assets: [],
    crypto: [],
    addNewAsset: () => {}   
})

function persentDefference(aassetPrice, cryptoPrice){    
    const number = 100 * Math.abs( ( aassetPrice - cryptoPrice ) / ( (aassetPrice + cryptoPrice)/2 ) );
    return  number.toFixed(2)
}
function totalProfit(assetAmount, cryptoPrice, assetPrice){    
    const number = assetAmount*cryptoPrice - assetAmount*assetPrice
    return number.toFixed(2)
}

function createUpdatedAsset(asset, crypto) {   
    if(!crypto) return;
    return {
        grow: asset.price < crypto.price,
        growPercent: persentDefference(asset.price, crypto.price),
        totalAmount: asset.amount * crypto.price,
        totalProfit: totalProfit(asset.amount, crypto.price, asset.price),
        ...asset
    };
}

export function AppWrapper({children}){
    const [assets, setAssets] = useState([])
    const [crypto, setCrypto] = useState([])
         
    useEffect(()=>{           
        async function preload(){
            const {result} = await fetchData();
            const assetsData = await fetchAsset();
            
            setAssets(                        
                assetsData.map((asset)=>{
                    const foundCrypto = result.find((c)=>c.id===asset.id)
                    if(foundCrypto){
                        return createUpdatedAsset(asset, foundCrypto);
                    }
                })
            )
            setCrypto(result)
        }
        preload();  //call of the function
    }, [])
    
    function addNewAsset(newAsset) {        
        const foundCrypto = crypto.find((c)=>c.id===newAsset.id)
        if (!foundCrypto) return;
        newAsset = {...newAsset, price: newAsset.myPrice}
        const updatedNewAsset = createUpdatedAsset(newAsset, foundCrypto);        
        setAssets((prevAssets) => [...prevAssets, updatedNewAsset]);
    }
    return(
        <>
            <Context.Provider value={{assets, crypto, addNewAsset}}>{children}</Context.Provider>
        </>
    )
}
export default Context;