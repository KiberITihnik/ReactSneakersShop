import React from 'react';
import './pagination.scss';

const Pagination = () => {
    return (
        <nav className="pagination-wrapper">
            <div className="pagination">
                <a className="prev page-numbers" href="javascript:;">
                    prev
                </a>
                <span aria-current="page" className="page-numbers current">
                    1
                </span>
                <a className="page-numbers" href="javascript:;">
                    2
                </a>
                <a className="page-numbers" href="javascript:;">
                    3
                </a>
                <a className="page-numbers" href="javascript:;">
                    4
                </a>
                <a className="page-numbers" href="javascript:;">
                    5
                </a>
                <a className="page-numbers" href="javascript:;">
                    6
                </a>
                <a className="page-numbers" href="javascript:;">
                    7
                </a>
                <a className="page-numbers" href="javascript:;">
                    8
                </a>
                <a className="page-numbers" href="javascript:;">
                    9
                </a>
                <a className="page-numbers" href="javascript:;">
                    10
                </a>
                <a className="next page-numbers" href="javascript:;">
                    next
                </a>
            </div>
        </nav>
    );
};

export default Pagination;
