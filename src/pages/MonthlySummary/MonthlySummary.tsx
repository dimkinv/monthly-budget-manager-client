import { Card } from '../../components/Card/Card';
import { CategorySummary } from './components/CategorySummary/CategorySummary';
import { MonthlyTotal } from './components/MonthlyTotal/MonthlyTotal';
import styles from './MonthlySummary.module.css';

export const MonthlySummary: React.FC = () => {
    return (
        <div className={styles.container}>
            <MonthlyTotal />
            <Card>
                <CategorySummary />
            </Card>
        </div>
    )
}