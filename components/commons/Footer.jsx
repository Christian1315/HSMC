import styles from "../../styles/footer.module.css";
import Link from "next/link"


export default function Footer() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12  px-0">
                        <div id={styles.footer}>
                            <div className="row" uk-scrollspy="cls: uk-animation-fade; target: li; delay: 500; repeat: false">

                                <div className="col-md-3 col-sm-12">
                                    <div className={styles.col1}>
                                        <Link href="/">
                                            <img src="img/common/logo--footer.png" className="img-fluid" srcSet="" />
                                        </Link>
                                        <p className="">
                                            Les meilleures services de développement <br /> avec plusieurs années d’expérience
                                        </p>
                                        <div className={styles.icons}>
                                            <a>
                                                <img src="img/common/icons/facebook.png" alt="" srcSet="" />
                                            </a>
                                            <a>
                                                <img src="img/common/icons/linkedin.png" alt="" srcSet="" />
                                            </a>
                                            <a>
                                                <img src="img/common/icons/whatsapp.png" alt="" srcSet="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4" id={styles.col2}>
                                    <h1 className={styles.title}>Nos services</h1>
                                    <img src="img/common/underline.png" className="img-fluid" srcSet="" />
                                    <ul>
                                        <li> <a href="" className={styles.itemLink}> Développement web & Mobile</a> </li>
                                        <li> <a href="" className={styles.itemLink}> Design graphique  </a></li>
                                        <li> <a href="" className={styles.itemLink}> Marketing digitale </a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-4" id={styles.col3}>
                                    <h1 className={styles.title}>Liens rapides</h1>
                                    <img src="img/common/underline.png" className="img-fluid" srcSet="" />

                                    <ul>
                                        <li> <Link href="/" className={styles.itemLink}> Acceuil </Link></li>
                                        <li> <Link href="/about" className={styles.itemLink}> A propos </Link></li>
                                        <li> <Link href="/travaux" className={styles.itemLink}> Nos réalisations </Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-4">
                                    <h1 className={styles.title}>Nos services</h1>
                                    <img src="img/common/underline.png" className="img-fluid" srcSet="" />

                                    <ul>
                                        <li><a href="" className={styles.itemLink}> Aibatin , face station JNP </a> </li>
                                        <li><a href="mailto:contact@hsmc.com" className={styles.itemLink}> contact@hsmc.com </a></li>
                                        <li><a href="tel:+229 9751299" className={styles.itemLink}> +229 9751299 </a></li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bg-dark" id={styles.footerBoottom}>
                    <div className="col-md-12">
                        <p className="text-white text-center pt-3">© Copyright 2023 - Réalisé par <strong>HSMC</strong> </p>
                    </div>
                </div>
            </div>
        </>
    )
}