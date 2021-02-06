import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.weatherapi.com/v1/current.json',
    params: {key: 'fc7f35837d764ef99e8185013210502'}
})