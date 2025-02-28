import { getText } from '../../i17n';
import styles from './Header.module.css';

export const Header: React.FC = () => (
    <header className={styles.header}>
        <h4>{getText('monthly_budget_header_title')}</h4>
    </header>
)