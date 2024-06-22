import {useEffect, useState} from 'react';
import styles from './main.module.css'
import {NewsType} from "../../../common/types/types";
import {getNews} from "../../../api/apiNews";
import {NewsBanner} from "../../news-banner/news-banner";
import {NewsList} from "../../../common/components/news-list/news-list";
import {Skeleton} from "../../../common/components/skeleton/skeleton";
export const Main = () => {
    const [news, setNews] = useState<NewsType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        const fetchNews = async () => {
            setIsLoading(true)
            try {
                const res = await getNews()
                if(res) {
                    setNews(res.news)
                    setIsLoading(false)
                }
            } catch (err) {
                console.log(err)
            }
        }

        fetchNews()
    }, [])

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton count={1} type={"banner"}/>}
            {!isLoading ? <NewsList news={news}/> : <Skeleton count={10} type={'item'}/>}
        </main>
    );
};