import styles from '../../styles/techno.module.css'

export default function Techno({iconUrl,label}){
    return (
        <>
            <div className={styles.techno}>
                <img src={iconUrl} className='' srcSet="" />
                <h6 className={styles.label}>{label} </h6>
            </div>
        </>
    )
}