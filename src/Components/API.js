import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
function API() {
    let [data, setData] = useState([]);

    useEffect(()=>{
       axios.get('./Data.json').then(res=> setData(res.data.Data))
    },[])
  return (
    <div>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>UserId</th>
                    <th>Title</th>
                    {/* <th>Status</th> */}
                </tr>
            </thead>
            <tbody>
            {data.map(data=>{
            // console.log(data.completed);
                return(
                <tr>
                <td>{data.id}</td>
                <td>{data.userId}</td>
                <td>{data.title}</td>
                {/* <td>{data.completed}</td> */}
            </tr>
            )
        })}
                
            </tbody>
        </Table>
        
    </div>
  )
}

export default API