import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "../style/home.css";
import Test from './test';
const More = () => {
    var regex = '/\$Number/';
    
    const [data, setData] = useState();
    let param = useParams();
    // console.log(Number(param))
    useEffect(()=> {
        function fetchData() {
            axios.post('http://localhost:4000/getOneData',
            {
              id: param.id
            })
            .then(response => {
                setData(response.data.data.data)
                console.log(data)
            })
            .catch(err => {
             // Handle errors
            console.error(err);
        }); 
        }
        fetchData();
    },[])
    return (
      <div className='home-div'>
        <div className='inner-div'>
        
          <div className='heading'>
          {
            data?.map((e)=>{
              return(
                <>
                <h3>{e?.name}</h3>
                    <p>{e?.tag}</p>
                    <div>{
                    e.criteria?.map((i)=>{
                      return (
                        <>
                          {
                            //  <h3>{i.text}</h3>
                            //  <h3>{i.text.replace(new RegExp(('\\$Number'),(match) , <Link>{i.variable.$1.values[0]}</Link>))}</h3>
                             <h3>{i.text? i?.text?.replace('$1',<Test/>):
                              "random"
                             }</h3>
                          }
                        </>
                      )
                    })
                    }</div>
                    </>
              )
            })
            
          }
                  
              
         </div>
        
        </div>
      </div>
    )
}

export default More
