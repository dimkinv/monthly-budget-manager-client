import { i18n } from '../../i17n';
import styles from './Header.module.css';

export const Header: React.FC = () => (
    <header className={styles.header}>
        <h4>{i18n('monthly_budget_header_title')}</h4>
    </header>
)