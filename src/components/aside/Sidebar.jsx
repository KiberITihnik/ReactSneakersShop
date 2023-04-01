import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId } from '../../redux/slices/filterSlice';

import './sidebar.scss';
import Categories from './categories/Categories';
import ColorFilter from './color-filter/ColorFilter';
import FilterPrice from './filter/FilterPrice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const categoryId = useSelector((state) => state.filter.categoryId);

    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    return (
        <div className="sidebar">
            <Categories value={categoryId} onChangeCategory={onChangeCategory} />
            <FilterPrice onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)} />
            <ColorFilter />
        </div>
    );
};

export default Sidebar;
