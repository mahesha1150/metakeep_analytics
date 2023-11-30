import './index.css'
import BarChart from './components/BarChart';
import { useState, createContext, useEffect } from 'react';
import { Button } from "@mui/material";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import { Chart as ChartJS } from 'chart.js/auto'
import FilterMenu from './components/FilterMenu';
import CustomDates from './components/CustomDates';
import { BASE_URL } from "./config";
import dayjs from 'dayjs';
import axios from 'axios';

export const AppContext = createContext();

const App = () => {
  const [customDatesFilter, setCustomDatesFilter] = useState(false);
  const [filterRange, setFilterRange] = useState('Last 24 hours');
  const [fromValue, setFromValue] = useState(dayjs(new Date()).subtract(1, 'day'));
  const [toValue, setToValue] = useState(dayjs(new Date()));
  const [chartData, setChartData] = useState({/* noOfUniqueUsers: 3, noOfAPICalls: 7, noOfFailures: 5 */});
  
  /* const chartData = {
    noOfUniqueUsers: 3,
    noOfAPICalls: 6,
    noOfFailures: 0,
  }; */

  const init = async () => {
    retrieveDashboardData()
  }

  useEffect(() => {
    init();
  }, []);

  async function retrieveDashboardData() {
    let fromDate = '';
    let toDate = '';
      if(filterRange.includes('Last 24 hours')){
        fromDate = dayjs(new Date()).subtract(1, 'day');
        toDate = dayjs(new Date());
      }else if(filterRange.includes('Last 7 days')){
        fromDate = dayjs(new Date()).subtract(7, 'day')/* .startOf('day') */;
        toDate = dayjs(new Date());
      }else if(filterRange.includes("Custom Dates")){
        fromDate = fromValue.startOf('day');
        toDate = toValue.endOf('day');
      }
      /* alert(new Date());  
      alert(fromDate.format('YYYY-MM-DD HH:mm:ss')+" -> "+toDate.format('YYYY-MM-DD HH:mm:ss')); */
    try {
        let response = await axios.get(`${BASE_URL}/analytics-dashboard?fromDate=${fromDate}&toDate=${toDate}`);
        let data = response.data;
        setChartData(data);
    } catch (error) {
        // Handle 404 Not Found
        alert(error.response.data.message);
    } finally{
    }
}

  return (

    <AppContext.Provider value={{
      customDatesFilter, setCustomDatesFilter, filterRange, setFilterRange, fromValue, setFromValue,
      toValue, setToValue
  }}>
    <div className="App">
      <div className='container'>
        <h1>MetaKeep Users/API Analytics</h1>
        <div className='filter'>
          <div className='filter__container'>
            <FilterMenu /* retrieveDashboardData={retrieveDashboardData} */></FilterMenu>
          </div>
          {customDatesFilter && <div className='dates'>
            <CustomDates></CustomDates>
          </div>}
          {/* {customDatesFilter &&  */}<div className='fetchButton'>
          <Button variant="contained" color="success" style={{height: '3.3rem'}} size="large" onClick={() => retrieveDashboardData()} startIcon={<EqualizerIcon />}>Fetch</Button>
          </div> {/* } */}
        </div>
        <div className='chart'>
          <BarChart chartData={chartData} />
        </div>
      </div>
    </div>
    </AppContext.Provider>
  );
};


export default App