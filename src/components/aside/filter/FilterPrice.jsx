import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styles from './FilterSlider.module.scss';

const FilterPrice = () => {
    const [value, setValue] = React.useState([20, 37]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.filter}>
            <h3>FILTER</h3>
            <Box
                className={styles.filterSlice}
                sx={{
                    width: 150,
                    color: '#7d7d7d',
                    '& .MuiSlider-thumb': {
                        color: '#000',
                    },
                    '& .MuiSlider-track': {
                        color: '#7d7d7d',
                    },
                    '& .MuiSlider-rail': {
                        color: '#7d7d7d',
                    },
                }}>
                <Slider
                    getAriaLabel={() => 'Minimum distance shift'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    disableSwap
                    min={0}
                    max={1000}
                />
            </Box>
        </div>
    );
};

export default FilterPrice;
