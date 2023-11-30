
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { AppContext } from '../App';


const FilterMenu = (/* { retrieveDashboardData } */) => {
    const { setCustomDatesFilter, filterRange, setFilterRange } = useContext(AppContext);

    const handleChange = (event) => {
        const filterValue = event.target.value;
        //alert(filterValue);
        filterValue.includes("Custom Dates") ? setCustomDatesFilter(true) : setCustomDatesFilter(false);
        setFilterRange(filterValue);
        /* if(filterValue.includes("Custom Dates")){
            setCustomDatesFilter(true);
        }else {
            setCustomDatesFilter(false);
            retrieveDashboardData();
        } */       
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter Range</InputLabel>
                <Select
                    /* labelId="demo-simple-select-label"
                    id="demo-simple-select" */
                    value={filterRange}
                    label="Filter Range"
                    onChange={handleChange}
                >
                    <MenuItem value={'Last 24 hours'}>Last 24 hours</MenuItem>
                    <MenuItem value={'Last 7 days'}>Last 7 days</MenuItem>
                    <MenuItem value={'Custom Dates'}>Custom Dates</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default FilterMenu