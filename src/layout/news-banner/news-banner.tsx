import styles from "./news-banner.module.css"
import {NewsType} from "../../common/types/types";
import {formatTimeAgo} from "../../common/utils/formatTimeAgo";
import {Image} from "../../common/components/image/image";
type NewsBannerType = {
    item: NewsType
}

export const NewsBanner = ({item}: NewsBannerType) => {
    return (
        <div className={styles.banner}>
            <Image image={item?.image}/>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    );
};