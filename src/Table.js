import React from 'react'
import { useState, useEffect } from 'react';
import groupBy from './Utilities/groupBy';
import makeCalculations from './Utilities/makeCalculations';
function Table({data}) {
   
    const [total, setTotal] = useState();
   // const [orderedPH, setOrderedPH] = useState();
    console.log(data);

    useEffect(()=>{
        const ordered = (groupBy(data, "conract"))
        console.log(ordered)
        //console.log(makeCalculations);
        const orderedArr = makeCalculations(ordered)
        
        console.log(orderedArr);
        setTotal(orderedArr)
    },[])

  return (
    <table className="table table-striped table-dark">
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
            <tr key={key}>
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