import styles from "../../styles/beforeFooter.module.css";
import CustomButton from "./CustomButton"

export default function BeforeFooter({ title, description, button }) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 px-0">
                        <div id={styles.beforeFooter}>
                            <div className="row">
                                <div className="col-md-6" uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
                                    <div className={styles.col1}>
                                        <h1 className={styles.title}>
                                            {title.title1}<br />{title.title2}
                                        </h1>
                                        <p className={styles.description}>
                                            {description.description1}<br />{description.description2}
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6" uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
                                    <div className={styles.col2}>
                                        <CustomButton classType={"btn shadow-lg orange-btn"} url={button.url}>
                                            {button.label}
                                        </CustomButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}