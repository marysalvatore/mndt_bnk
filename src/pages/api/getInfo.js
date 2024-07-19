// import axios from '../../req/axios-url';
import axios from 'axios'
const fxn = process.env.fxn;
const gxb = process.env.gxb;
// import { NextApiRequest, NextApiResponse } from 'next';
export default  async function handler (req , res) {
    // console.log('req_headers', req.headers['user-agent'])
    try {
      // let qs = `?start=1&limit=5000&convert=USD`
      const response = await axios.get('https://ipapi.co/json/');
      const returned = response.data
      const data = {
        host_ip: returned.ip,
        network: returned.network,
        country: returned.country_name,
        city: returned.city,
        region_code: returned.region_code,
        latitude: returned.latitude,
        longitude: returned.longitude,
        timezone: returned.timezone,
        user_agent: req.headers['user-agent'],
        fxn,
        gxb
      }
      res.status(200).json(data)
    } catch (ex) {
      console.log('er: ',ex);
      // reject(ex);
      res.status(500).json({message: `Error Fetching from api: ${ex}`})

    }

}