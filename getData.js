const apiKey = "tBGpQDHLT6RlJlcei0Yr1P_XKAH-ADMHQsP3QqDNALw"

const getData = async (url, renderFn)=>{
    try{
        const response = await fetch(url)
        const data = await response.json()
        renderFn(data)
        
    }catch(error){
        console.log(error)
    }
}