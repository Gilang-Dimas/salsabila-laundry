import useSWR from "swr"

async function fetcher(url) {
    const res = await fetch(url);
    return res.json();
}
export const useDataPaket = () => {
    //url
    const url = "http://localhost:3000/api/datapaket"
    //data dan error
    const { data, error } = useSWR(url, fetcher);

    return  {data, error}
}
export const useDataPelanggan = () => {
     //url
     const url = "http://localhost:3000/api/datapelanggan"
     //data dan error
     const { data, error } = useSWR(url, fetcher);
 
     return { data, error}
}
export const useDataPemesanan = () => {
    //url
    const url = "http://localhost:3000/api/datapemesanan"
    //data dan error
    const { data, error } = useSWR(url, fetcher);

    return { data, error}
}