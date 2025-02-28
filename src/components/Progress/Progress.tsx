import { useEffect, useState } from 'react';
import styles from './Progress.module.css';

export const Progress: React.FC<ProgressProps> = ({current, total, className}) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setPercentage((current / total) * 100);
    }, [current, total]);

    return (
        <div className={`${styles.progress} ${className}`}>
            <div className={styles.progressBar} role="progressbar" style={{ width: `${percentage}%` }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
    )
}

export type ProgressProps = {
    current: number;
    total: number;
    className?: string;
}