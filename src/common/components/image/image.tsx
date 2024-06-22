import styles from "./image.module.css"

type ImageType = {
    image: string
}

export const Image = ({image}: ImageType) => {
    return (
        <div className={styles.wrapper}>
            {image ? <img src={image} alt={"news"} className={styles.image}/> : null}
        </div>
    );
};