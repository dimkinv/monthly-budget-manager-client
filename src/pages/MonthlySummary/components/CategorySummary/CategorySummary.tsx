import { useState } from 'react';
import { Collapsible } from '../../../../assets/icons/Collapsible';
import { Progress } from '../../../../components/Progress/Progress';
import { curr, i18n } from '../../../../i17n';
import styles from './CategorySummary.module.css';

export const CategorySummary: React.FC<React.PropsWithChildren> = () => {
    const [collapsibleDirection, setCollapsibleDirection] = useState<'left' | 'down'>('left');

    return (<div className={styles.container}>
        <button onClick={() => collapsibleDirection === 'left' ? setCollapsibleDirection('down') : setCollapsibleDirection('left')} className={styles.title}>
            <div></div>
            <span>מזון</span>
            <Collapsible direction={collapsibleDirection} />
        </button>
        <section className={styles.summary}>
            <span>{curr`2000`} / {i18n('monthly')}</span>
            <span>{i18n('left')}: {curr`800`}</span>
        </section>
        <Progress className={styles.progress} current={1200} total={2000} />
    </div>);
};

export type CategorySummaryProps = {

}
