import styles from "../../styles/realisationCard.module.css";

export default function RealisationCard({ imgUrl, name, tag, title, description, seeMore }) {
    return (
        <>
            <div className="col-md-3">
                <div className="card" id={styles.realisation}>
                    <img src={imgUrl} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <p className={styles.tag}>{tag}</p>
                        <h5 className={styles.title}>{title}</h5>
                        <p className={styles.description}>{description}</p>
                        <p className={styles.link}>
                            <a href={seeMore.url} className="">{seeMore.label}</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}