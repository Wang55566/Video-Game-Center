import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3e806affe3434eb9aff1cdef267c0992'
  }
})
