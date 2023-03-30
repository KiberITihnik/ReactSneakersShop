import React from 'react';
import Circle from '@uiw/react-color-circle';
import './colorFilter.scss';

const ColorFilter = () => {
    const [hex, setHex] = React.useState('#F44E3B');
    return (
        <div className="color">
            <h3>COLOR</h3>
            <ul className="color-elements">
                <Circle
                    colors={[
                        '#F44E3B',
                        '#0969da',
                        '#FCDC00',
                        '#DBDF00',
                        '#8250df',
                        '#6e7781',
                        '#116329',
                        '#fff8c5',
                    ]}
                    color={hex}
                    onChange={(color) => {
                        setHex(color.hex);
                    }}
                />
            </ul>
        </div>
    );
};

export default ColorFilter;
