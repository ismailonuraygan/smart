import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
function App() {
  const api_url = "https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history?endDate=2022-01-26&startDate=2022-01-26"
  const [data, setData] = useState();

/* useEffect kullanarak sayfa her yenilendiğinde api'dan datayı çekere daha önceden useState hook kullanarak tanımladığımzı state'e atıyoruz. */
  useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(api_url)
        console.log(res.data.body.intraDayTradeHistoryList.filter(e => e.conract.substring(0,2) === "PH"))
        setData((res.data.body.intraDayTradeHistoryList.filter(e => e.conract.substring(0, 2) === "PH"))) /* Burada gelen datalar içinden sadece conract değeri PH ile başlayanları alıyoruz. */ /* Burada gelen datalar içinden sadece conract değeri PH ile başlayanları alıyoruz. */
      }
      fetchData();
      console.log(data)
    }, [])
  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
