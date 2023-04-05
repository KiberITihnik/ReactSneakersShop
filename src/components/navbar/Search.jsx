import React from 'react';
import styles from './Search.module.scss';
import { SearchContext } from '../app/App';
import { debounce } from '@mui/material';

const Search = () => {
    const { setSearchValue } = React.useContext(SearchContext);
    const [value, setValue] = React.useState('');
    const inputRef = React.useRef();

    const onClickClear = () => {
        setSearchValue('');
        setValue('');
        inputRef.current.focus();
    };

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 300),
        [],
    );

    const onChangeInput = (event) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };

    return (
        <div className={styles.search}>
            <svg
                className={styles.icon}
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input}
                placeholder="Search..."
            />
            {value && (
                <svg
                    onClick={onClickClear}
                    className={styles.close}
                    version="1.1"
                    viewBox="0 0 14 14">
                    <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                        <g fill="#000000" id="Core" transform="translate(-341.000000, -89.000000)">
                            <g id="close" transform="translate(341.000000, 89.000000)">
                                <path
                                    d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"
                                    id="Shape"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            )}
        </div>
    );
};

export default Search;
