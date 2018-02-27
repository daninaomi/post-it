import axios from 'axios'

const http = axios.create({
    baseURL: 'https://limitless-harbor-35826.herokuapp.com'
})

export function postNota(titulo, texto) {
    return http.post('/notes', {titulo, texto})
}

export function deleteNota(index) {
    // return http.delete(`/notas/${index}`)
    return http.delete('/notes', {params: {index}} )
}

export function putNota(index, titulo, texto) {
    const url = `/notes/${index}`
    const json = {titulo, texto}
    return http.put( url, json)
}