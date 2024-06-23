import {useEffect, useState} from 'react';
import styles from './main.module.css'
import {NewsType} from "../../../common/types/types";
import {getNews} from "../../../api/apiNews";
import {NewsBanner} from "../../news-banner/news-banner";
import {NewsList} from "../../../common/components/news-list/news-list";
import {Skeleton} from "../../../common/components/skeleton/skeleton";
import {Pagination} from "../../../common/components/pagination/pagination";

export const Main = () => {
    const [news, setNews] = useState<NewsType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10
    const pageSize = 10

    const fetchNews = async (currentPage: number) => {
        setIsLoading(true)
        try {
            const res = await getNews(currentPage, pageSize)
            if (res) {
                setNews(res.news)
                setIsLoading(false)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }


    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage])

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton count={1} type={"banner"}/>}
            <Pagination currentPage={currentPage} totalPages={totalPages} handleNextPage={handleNextPage}
                        handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}/>
            {!isLoading ? <NewsList news={news}/> : <Skeleton count={10} type={'item'}/>}
            <Pagination currentPage={currentPage} totalPages={totalPages} handleNextPage={handleNextPage}
                        handlePreviousPage={handlePreviousPage} handlePageClick={handlePageClick}/>
        </main>
    );
};