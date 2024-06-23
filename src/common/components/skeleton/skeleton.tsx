import styles from "./skeleton.module.css"

type Props = {
    count: number
    type: 'banner' | 'item'
}

export const Skeleton= ({count, type}: Props) => {
    return (
        <>
            {count > 1 ? (
                <ul className={styles.list}>
                    {[...Array(count)].map((_, index) => (
                        <li key={index} className={type === "banner" ? styles.banner : styles.item}>

                        </li>
                    ))}
                </ul>
            ) : (
                <li className={type === "banner" ? styles.banner : styles.item}></li>
            )}
        </>
    );
};