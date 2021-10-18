import { environment } from "../Environments/Main.environment";

// const apiFecthPost = async (endpoint, body) => {

//     const url = environment.BASE_API_URL + endpoint;

//     const res = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     }).then(res => { return res.json() }).catch(err => {
//         console.error(err)
//     })

//     return res;
// }

const apiFecthGet = async (endpoint) => {

    const url = `${environment.BASE_API_URL + endpoint}`;

    const res = await fetch(url).then(res => { return res.json() }).catch(err => {
        console.error(err)
    })

    return res;
}

const Api = {
    getPlanos: async () => {
        return apiFecthGet('/planos');
    }
}

export default () => Api;