import styles from "./skeleton.module.css"
import {FC} from "react";

type SkeletonPropsType = {
    count: number
    type: 'banner' | 'item'
}

export const Skeleton: FC<SkeletonPropsType> = ({count = 1, type = "banner"}: SkeletonPropsType) => {
    return (
        <>
            {count > 1 ? (
                <ul>
                    {(Array(count).map((_, index) => (
                        <li key={index} className={type === "banner" ? styles.banner : styles.item}>

                        </li>
                    )))}
                </ul>
            ) : (
                <li className={type === "banner" ? styles.banner : styles.item}></li>
            )}
        </>
    );
};