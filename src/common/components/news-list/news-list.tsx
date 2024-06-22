import styles from "./news-list.module.css"
import {NewsType} from "../../types/types";
import React from "react";
import {NewsItem} from "./news-item/news-item";

type NewsListType = {
    news: NewsType[]
}

export const NewsList = ({news}: NewsListType) => {
    return (
        <ul className={styles.list}>
            {news.map(n => {
                return <NewsItem key={n.id} item={n}/>
            })}
        </ul>
    );
};