import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort } from '../../../redux/slices/filterSlice';
import './sort.scss';

const Sort = () => {
    const dispatch = useDispatch();
    const sort = useSelector((state) => state.filter.sort);

    const [open, setOpen] = React.useState(false);

    const list = [
        { name: 'By popularity', sortProperty: 'rating' },
        { name: 'Highest price', sortProperty: 'price' },
        { name: 'Lowest price', sortProperty: '-price' },
        { name: 'Alphabetically', sortProperty: 'title' },
    ];

    const onClickListItem = (i) => {
        dispatch(setSort(i));
        setOpen(false);
    };

    return (
        <div className="header-filters">
            <div className="filter-sort" onClick={() => setOpen(!open)}>
                <h4>SORT BY</h4>
                <svg
                    onClick={() => setOpen(!open)}
                    className="offset-filters"
                    fill="#000000"
                    width="30px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z" />
                </svg>
            </div>
            {open && (
                <div className="sort-active">
                    <ul>
                        {list.map((obj, i) => (
                            <li
                                key={i}
                                onClick={() => onClickListItem(obj)}
                                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
                                <h4>{obj.name}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sort;
