import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import './navbar.scss';

const Navbar = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <nav className="nav">
            <div className="nav-row-left">
                <NavLink to={ROUTES.HOME} className="logo">
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height={100}
                        viewBox="0 0 625.000000 369.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g
                            transform="translate(0.000000,369.000000) scale(0.100000,-0.100000)"
                            fill="#000000"
                            stroke="none">
                            <path
                                d="M2210 3131 c-631 -194 -654 -204 -724 -299 -18 -26 -159 -297 -311
                                    -602 l-277 -555 -122 -125 c-161 -166 -181 -204 -181 -350 0 -99 2 -109 32
                                    -165 23 -44 74 -102 187 -215 l156 -155 207 207 c125 123 226 215 253 229 l45
                                    24 713 3 714 3 -7 42 c-23 149 -99 253 -232 315 l-58 27 -321 5 -320 5 -59 30
                                    c-96 49 -155 143 -155 245 0 35 52 315 141 767 l10 52 426 217 c466 238 468
                                    239 492 342 14 55 3 126 -19 129 -8 1 -274 -78 -590 -176z"
                            />
                            <path
                                d="M2626 2893 l-129 -65 73 -73 c84 -84 149 -123 218 -132 54 -6 130 14
                                171 46 l25 19 -100 117 c-54 64 -106 125 -114 135 -14 17 -21 15 -144 -47z"
                            />
                            <path
                                d="M3137 2911 c-33 -36 -68 -120 -67 -160 1 -35 194 -176 347 -254 127
                                -64 222 -100 354 -132 92 -22 249 -43 249 -33 0 3 -28 16 -62 28 -251 91 -513
                                277 -688 489 -46 56 -86 101 -90 101 -4 0 -24 -18 -43 -39z"
                            />
                            <path
                                d="M2985 2608 c-40 -74 -40 -162 0 -237 32 -59 118 -137 225 -206 141
                                -92 252 -134 462 -175 165 -33 199 -45 263 -91 81 -58 133 -153 149 -275 6
                                -42 4 -54 -12 -75 l-20 -24 -349 -5 -348 -5 -57 -29 c-116 -59 -206 -185 -216
                                -303 l-4 -53 793 -2 794 -3 46 -23 c29 -14 123 -96 245 -212 l199 -189 153
                                152 c196 194 217 232 217 382 0 168 4 162 -442 606 -337 335 -383 378 -427
                                393 -42 14 -102 16 -394 16 -308 0 -355 2 -445 21 -266 53 -518 172 -725 338
                                -34 28 -66 51 -70 51 -5 0 -21 -23 -37 -52z"
                            />
                        </g>
                    </svg>
                </NavLink>
            </div>
            <div className="nav-row-center">
                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink
                            to={ROUTES.MEN}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                            MEN
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink
                            to={ROUTES.WOMEN}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                            WOMEN
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink
                            to={ROUTES.KIDS}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                            KIDS
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink
                            to={ROUTES.CUSTOMIZE}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                            CUSTOMIZE
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink
                            to={ROUTES.FAVORITES}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}>
                            FAVORITES
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="nav-row-right">
                <div className="search">
                    <span className="icon">
                        <svg
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
                    </span>
                    <input type="search" id="search" placeholder="Search..." />
                </div>
                <NavLink to={ROUTES.LOGIN} className="icon-navbar">
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        viewBox="0 0 100.000000 100.000000"
                        preserveAspectRatio="none">
                        <g
                            transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                            fill="#000000"
                            stroke="none">
                            <path
                                d="M393 956 c-237 -58 -395 -293 -355 -528 35 -204 186 -355 390 -390
                                        306 -52 586 228 534 534 -47 271 -308 447 -569 384z m191 -61 c165 -35 289
                                        -165 315 -332 11 -69 1 -161 -25 -221 -27 -66 -31 -66 -84 -9 -27 29 -72 66
                                        -102 81 -29 16 -54 30 -56 31 -1 1 12 29 29 63 27 51 30 67 25 104 -8 55 -34
                                        98 -82 134 -33 25 -46 29 -104 29 -58 0 -71 -4 -104 -29 -76 -58 -102 -141
                                        -69 -218 11 -24 27 -51 37 -60 15 -16 12 -19 -44 -49 -34 -18 -83 -56 -110
                                        -85 -52 -58 -57 -58 -84 8 -97 231 42 500 286 553 81 17 90 17 172 0z m3 -219
                                        c73 -80 20 -206 -87 -206 -102 0 -159 122 -93 200 34 41 58 51 108 45 30 -3
                                        48 -13 72 -39z m58 -308 c59 -30 148 -121 143 -145 -2 -10 -28 -35 -58 -56
                                        -135 -94 -325 -94 -460 0 -30 21 -56 46 -58 54 -4 23 83 116 132 141 65 33 86
                                        38 171 34 62 -2 91 -8 130 -28z"
                            />
                        </g>
                    </svg>
                </NavLink>
                <NavLink to={ROUTES.CART} className="icon-navbar">
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height={100}
                        viewBox="0 0 125.000000 125.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g
                            transform="translate(0.000000,125.000000) scale(0.100000,-0.100000)"
                            fill="#000000"
                            stroke="none">
                            <path
                                d="M58 1169 c-21 -12 -23 -40 -6 -57 7 -7 35 -12 64 -12 l51 0 128 -377
                            c70 -208 132 -384 138 -391 7 -9 77 -12 311 -10 l301 3 0 30 0 30 -278 3
                            c-310 3 -278 -5 -301 70 l-7 22 303 0 c167 0 308 4 315 8 17 11 136 478 128
                            502 -6 19 -20 20 -467 22 l-461 3 -24 70 c-13 39 -31 76 -40 83 -20 14 -131
                            16 -155 1z m1060 -246 c-2 -10 -24 -96 -49 -190 l-44 -173 -297 0 -296 0 -61
                            183 c-34 100 -61 185 -61 190 0 4 183 7 406 7 382 0 406 -1 402 -17z"
                            />
                            <path
                                d="M528 264 c-37 -20 -56 -81 -38 -124 17 -41 50 -62 96 -62 94 0 137
                            110 69 178 -28 28 -84 32 -127 8z m80 -86 c-3 -25 -17 -32 -37 -19 -19 12 -6
                            41 19 41 16 0 21 -5 18 -22z"
                            />
                            <path
                                d="M868 265 c-36 -20 -53 -74 -38 -120 14 -44 48 -67 96 -67 94 0 137
                            110 69 178 -28 28 -84 32 -127 9z m80 -87 c-3 -25 -17 -32 -37 -19 -19 12 -6
                            41 19 41 16 0 21 -5 18 -22z"
                            />
                        </g>
                    </svg>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
