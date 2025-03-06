import { Card } from '../../components/Card/Card';
import { Category } from './components/Category/Category';
import { MonthlyTotal } from './components/MonthlyTotal/MonthlyTotal';
import styles from './MonthlySummary.module.css';

export const MonthlySummary: React.FC = () => {
    return (
        <div className={styles.container}>
            <MonthlyTotal />
            <Card>
                <Category />
            </Card>
        </div>
    )
}