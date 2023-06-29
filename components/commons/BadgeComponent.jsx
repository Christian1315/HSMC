import styles from '../../styles/badge.module.css'

export default function BadgeComponent({ imgUrl, label }) {
    return (
        <>
            <div className={styles.badge}>
                <img src={imgUrl} className='img-fluid' alt="" srcSet="" />
                <p className={styles.label}> {label} </p>
            </div>
        </>
    )
}