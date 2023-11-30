import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useContext } from 'react';
import { AppContext } from '../App';

const CustomDates = () => {
    const { fromValue, setFromValue, toValue, setToValue } = useContext(AppContext);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div style={{ display: 'flex' }}>
                <div>

                    <DemoContainer components={['DatePicker']}>

                        <DatePicker
                            label="From Date"
                            disableFuture={true}
                            value={fromValue}
                            onChange={(fromValue) => setFromValue(fromValue)}
                        />
                    </DemoContainer>
                </div>
                <div style={{ marginLeft: '1.2rem' }}>
                    <DemoContainer components={['DatePicker']}>

                        <DatePicker
                            label="To Date"
                            disableFuture={true}
                            value={toValue}
                            onChange={(toValue) => setToValue(toValue)}
                        />
                    </DemoContainer>
                </div>

            </div>
        </LocalizationProvider>
    )
}

export default CustomDates