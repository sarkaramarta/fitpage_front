import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style/home.css'
const Home = () => {
    const [data, setData] = useState();
    useEffect(()=> {
        async function fetchData() {
            const res = await axios.get("http://localhost:4000/getData");
            setData(res.data.data.data)
            console.log(res)
        }
        fetchData();
    },[])
  return (
    <div className='home-div'>
      <div className='inner-div'>
      {
        <ul>
        {data?.map((e)=> {
            return (
                <li><Link to={`/moreInfo/${e.id}`}>{e?.name}<br/>{e?.tag}</Link></li>
            )
        })}
        </ul>
      }
      </div>
    </div>
  )
}

export default Home
