import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Skeleton.module.scss';

const Skeleton = () => (
    <ContentLoader
        className={styles.skeleton}
        speed={2}
        width={300}
        height={425}
        viewBox="0 0 300 425"
        backgroundColor="#f5f5f5"
        foregroundColor="#e3e3e3">
        <rect x="0" y="0" rx="36" ry="36" width="300" height="300" />
        <rect x="0" y="320" rx="5" ry="5" width="186" height="40" />
        <rect x="210" y="320" rx="5" ry="5" width="90" height="40" />
        <rect x="6" y="385" rx="5" ry="5" width="50" height="40" />
        <rect x="78" y="385" rx="5" ry="5" width="50" height="40" />
        <rect x="153" y="385" rx="5" ry="5" width="50" height="40" />
        <rect x="250" y="385" rx="5" ry="5" width="50" height="40" />
    </ContentLoader>
);

export default Skeleton;
