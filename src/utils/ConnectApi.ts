"use server"
const url = process.env.BLOGING_URL

export const blogApi = async(urlEnd:string) => {
    const response = await fetch(url + urlEnd)
    const data = await response.json()
    if(data.success){
        // console.log(data)
        return data
    } else {
        return null
    }
}