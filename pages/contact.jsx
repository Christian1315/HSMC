import styles from '../styles/contact.module.css'

import Layout from '../components/commons/Layout'

import Header from '../components/commons/Header';
import CarouselContent from '../components/commons/CarouselContent';
import CustomCarouselItem from '../components/commons/CustomCarouselItem';
import CustomSection from '../components/commons/CustomSection';


export default function contact() {
    return (
        <>
            <Layout title="Contat">

                {/* ======== BANNIERE & HEADER ============= */}

                <Header>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide px-0 mx-0" data-bs-ride="carousel">
                        <div className="carousel-inner px-0 mx-0">
                            <CustomCarouselItem
                                itemClass="carousel-item active"
                                imgUrl="/img/common/banner.png">

                                <CarouselContent
                                    title="Contactez-nous"
                                    description={{
                                        part1: "L’agence qui s’occupe de la conception, de la réalisation et du",
                                        part2: "développement de vos projets"
                                    }}

                                ></CarouselContent>
                            </CustomCarouselItem>
                        </div>
                    </div>
                </Header >

                {/* ======== NOS CONTACT ============= */}
                <CustomSection
                    globalClass="container"
                    subTitle={
                        {
                            classType: 'sous--title', label: 'Prenez contact avec nous'
                        }
                    }>
                    <h1 className="title">Pour toute question ou préocupation, <br /> n’hésitez pas à nous appellez ou nous envoyer <br /> un mail</h1>

                    <div className="row">
                        <div className="col-md-4">
                            <div className={styles.iconBlock}>
                                <div className="">
                                    <span>
                                        <img src="img/common/icons/phone.png" className='img-fluid' srcset="" />
                                    </span>
                                </div>
                                <div className="">
                                    <p className={styles.title}> Appellez-nous</p>
                                    <strong className={styles.content}>+229 97512977</strong>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.iconBlock}>
                                <div className="">
                                    <span>
                                        <img src="img/common/icons/mail.png" className='img-fluid' srcset="" />
                                    </span>
                                </div>
                                <div className="">
                                    <div className="">
                                        <p className={styles.title}> Envoyer nous un mail</p>
                                        <strong className={styles.content}>contact@hsmc.com</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={styles.iconBlock}>
                                <div className="">
                                    <span>
                                        <img src="img/common/icons/map.png" className='img-fluid' srcset="" />
                                    </span>
                                </div>
                                <div className="">
                                    <p className={styles.title}> Rendez-nous visite</p>
                                    <strong className={styles.content}>Aibatin , face JNP</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" id={styles.contactForm}>
                        <div className="col-md-6">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <input type="text" placeholder='Nom' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <input type="text" placeholder='Prénom' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder='Objet' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <textarea className="form-control" rows="8">Message</textarea>
                                <button type="submit" className="btn w-100">Envoyer le message</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.2590048186426!2d2.375669714769857!3d6.360514195397331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjEnMzcuOSJOIDLCsDIyJzQwLjMiRQ!5e0!3m2!1sfr!2sbj!4v1688003924513!5m2!1sfr!2sbj" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </CustomSection>
            </Layout>
        </>
    )
}