import styles from "./news-item.module.css"
import {NewsType} from "../../../types/types";
import {formatTimeAgo} from "../../../utils/formatTimeAgo";

type NewsBannerType = {
    item: NewsType
}

export const NewsItem = ({item}: NewsBannerType) => {
    return (
        <div className={styles.banner}>
            <div className={styles.wrapper} style={{backgroundImage: `url(${item.image})`}}>
            </div>
            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
            </div>

        </div>
    );
};