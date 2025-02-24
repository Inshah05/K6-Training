import http from 'k6/http'
import { check } from 'k6'
export const options = {
  vus: 5,
  duration: '5s',
};

const payload= {"username": "inshah+test1234@zbooni.com",
    "password": "Password@123",
    "grant_type": "password",
    "client_id": "ucESQmnlYxRVViEDbmr3y3kGcjOkTfaWLk5letHO",
    "client_secret": "BEwg55vaMCNF2SbfD4pP94AitKeuo6EwdpSZbQkLrXSqjVXC1teL0dOvHMXjZQiGsovpZDPJ6whG7SYg6p6QtSditreR8waBkWZxOunV0dFf8UlaPFolKGmjOUNOjE8f"}

    const params ={headers:{'Authorization':'Bearer Uofn0vBnS164bcEzjH0g3aNHCzrNdb','Content-Type':'application/json'}}

    export default function () {
  
  const response = http.post('https://service.zbooni.tech/merchants/api/v1/oauth/token/',JSON.stringify(payload));
    check(response, {
        'status code validation': (response) => response.status === 200
    })
    check(response, {
        'access token validation': (response) => response.body.includes('qwerty')
    })
    
}