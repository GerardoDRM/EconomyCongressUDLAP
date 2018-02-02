import axios from 'axios';

const api = "http://ec2-13-59-117-105.us-east-2.compute.amazonaws.com"
// const api = "http://localhost:5000"

export const create = (student) =>
    axios({
      url: `${api}/api/qr`,
      method: 'post',
      data: student
    })
