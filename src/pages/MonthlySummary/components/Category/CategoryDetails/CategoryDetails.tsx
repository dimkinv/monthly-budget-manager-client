import { curr } from '../../../../../i17n';
import styles from './CategoryDetails.module.css';

export const CategoryDetails: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.detail}>
                <span>15.01.2025</span>
                <span>סופר שלי</span>
                <span className={styles.price}>{curr`200`}</span>
            </div>
        </div>
    )
};
