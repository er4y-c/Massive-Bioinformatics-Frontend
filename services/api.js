import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api-dev.massbio.info/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
})
