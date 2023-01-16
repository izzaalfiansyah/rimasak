import axios from 'axios';

const http = axios.create({
  baseURL: 'https://yummly2.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'df6e263998msh6d7051af140bb0dp12724fjsn0683e9e2e8b6',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  },
});

export default http;