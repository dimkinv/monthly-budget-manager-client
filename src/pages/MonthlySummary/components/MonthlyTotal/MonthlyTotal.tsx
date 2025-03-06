import { Progress } from '../../../../components/Progress/Progress';
import { curr, i18n } from '../../../../i17n';
import styles from './MonthlyTotal.module.css';

export const MonthlyTotal: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sections}>
                <section>
                    <small>{i18n('general_budget')}</small>
                    <h4>{curr`8000`}</h4>
                </section>
                <section>
                    <small>{i18n('general_expenses')}</small>
                    <h4>{curr`5240`}</h4>
                </section>
                <section>
                    <small>{i18n('general_leftovers')}</small>
                    <h4>{curr`2760`}</h4>
                </section>
            </div>
            <Progress current={5240} total={8000} />
        </div>
    );
}