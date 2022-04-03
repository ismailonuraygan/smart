import React from 'react'
import { useState, useEffect } from 'react';

function Table({data}) {
    const [veri, setVeri] = useState()
    const [date, setDate] = useState();
    const [amount, setAmount] = useState();
    const [quantity, setQuantity] = useState();
    const [average, setAverage] = useState();
    const [total, setTotal] = useState();
    useEffect(()=>{
        setVeri(
        data?.filter((e , i) =>       
            e.conract === "PH22012606"
        ))
        console.log(veri, "a")

        const newArr = (veri?.map((e,i)=>({
            day: `${ e.date.substring(0,10).split("-").reverse().join(".")} ${e.date.substring(24 ,26)}:00`,
            //hour: (`${e.date.substring(24 ,26)}:00`),
            amount : ((e.price*e.quantity)/10).toFixed(2),
            quantity:  (e.quantity/10),
            average : ((e.price*e.quantity) / (e.quantity/10)).toFixed(2)
        })))
        console.log(newArr,"a")
        setTotal(newArr)
    }, [])

  return (
    // <table>
    //         <tbody>
    //         <tr>
    //             <th>Price</th>
    //             <th>Conract</th>
    //             <th>Quantity</th>
    //         </tr>
    //         {veri?.map((item)=>(
    //         <tr key={item.id}>
    //             <td>{item.price}</td>
    //             <td>{item.conract}</td>
    //             <td>{item.quantity}</td>
    //         </tr>
    //         ))}
            
    //         </tbody>
    //     </table>


    <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">Tarih</th>
      <th scope="col">Toplam İşlem Tutarı (TL)</th>
      <th scope="col">Toplam İşlem Miktarıi (MWh)</th>
      <th scope="col">Ağırlık Ortalama Fiyat (TL/MWh)</th>
    </tr>
  </thead>
  <tbody>
        {total?.map((e,key)=>(
            <tr>
                <td>{e.day}</td>
                <td>{e.amount}</td>
                <td>{e.quantity}</td>
                <td>{e.average}</td>
            </tr>
        ))}
    
  </tbody>
</table>
    )
}

export default Table