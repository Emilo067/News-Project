import styles from "./header.module.css"
import {formatDate} from "../../common/utils/formatDate";

export const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>News Reactify</h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
        </header>
    );
};