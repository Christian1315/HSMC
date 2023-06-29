import styles from "../../styles/realisationCard.module.css";

export default function Posts({ PostVertical, PostHorizons }) {
    return (
        <>

            <div className="col-md-12">
                <div className="row">
                    {/* VERTICAL POST */}
                    <div className="col-md-4">
                        <div className={styles.post}>
                            <img src={PostVertical.imgUrl} className="card-img-top" alt={PostVertical.title} />
                            <div className="card-body px-3 py-1">
                                <p className={styles.date}>{PostVertical.date}</p>
                                <h5 className={styles.title}>{PostVertical.title}</h5>
                                <p className={styles.description}>{PostVertical.description}</p>
                                <p className={styles.link}>
                                    <a href={PostVertical.seeMore.url} className="">{PostVertical.seeMore.label}</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* HORIZONTAL POST */}
                    <div className="col-md-8" uk-scrollspy="target: .realisationCard_post__XVo8Y; cls: uk-animation-fade; delay: 500;repeat:false">
                        {
                            PostHorizons.map((post) => {
                                return (
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className={styles.post}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <img src={post.imgUrl} className="card-img-top" alt={post.title} />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="card-body px-3 py-1">
                                                            <h5 className={styles.title}>{post.title}</h5>
                                                            <p className={styles.description}>{post.description}</p>
                                                            <p className={styles.link}>
                                                                <a href={post.seeMore.url} className="">{post.seeMore.label}</a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}