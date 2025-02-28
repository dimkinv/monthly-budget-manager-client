import { Progress } from '../../../../components/Progress/Progress';
import { getText } from '../../../../i17n';
import styles from './MonthlyTotal.module.css';

export const MonthlyTotal: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sections}>
                <section>
                    <small>{getText('general_budget')}</small>
                    <h4>8,000</h4>
                </section>
                <section>
                    <small>{getText('general_expenses')}</small>
                    <h4>5,240</h4>
                </section>
                <section>
                    <small>{getText('general_leftovers')}</small>
                    <h4>2,760</h4>
                </section>
            </div>
            <Progress current={5240} total={8000} />
        </div>
    );
}