import { useState } from 'react';
import styles from './Category.module.css';
import { CategoryDetails } from './CategoryDetails/CategoryDetails';
import { CategorySummary } from './CategorySummary/CategorySummary';

export const Category: React.FC = () => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <CategorySummary onToggleDetails={setIsDetailsOpen} />
            {isDetailsOpen && <CategoryDetails />}
        </div>
    );
}