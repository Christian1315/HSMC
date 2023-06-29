import styles from '../../styles/team.module.css'

export default function TeamComponent({ iconUrl,title, description }) {
    return (
        <>
            <div className={styles.team}>
                <div className="row">
                    <div className="col-md-2" id={styles.col1}>
                        <img src={iconUrl} className='img-fluid' alt="" srcSet="" />
                    </div>
                    <div className="col-md-10">
                        <h6 className={styles.title}>{title}</h6>
                        <p className={styles.description}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}