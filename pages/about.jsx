import styles from '../styles/about.module.css'

import Layout from '../components/commons/Layout'
import Header from '../components/commons/Header';
import CarouselContent from '../components/commons/CarouselContent';
import CustomCarouselItem from '../components/commons/CustomCarouselItem';
import CustomSection from '../components/commons/CustomSection';
import CustomButton from '../components/commons/CustomButton';
import BeforeFooter from '../components/commons/BeforeFooter';
import Footer from '../components/commons/Footer';
import TeamComponent from '../components/commons/TeamComponent';
import Techno from '../components/commons/Techno';


const BeforeFooterInfos = {
    title: {
        title1: "Vous avez un projet ? Sentez-vous libre de nous",
        title2: "contacter . Nous vous ferons un",
    },
    description: {
        description1: "Lorem ipsum dolor asset active ton mindset et sois originale ton",
        description2: "mindset et sois originale ton mindset et sois originale"
    },
    button: {
        url: '/contact',
        label: 'Je veux un devi'
    }
}

const Teams = [
    {
        id: 1,
        iconUrl: "img/about-page/hand.png",
        title: "24h/24   Equipe présente",
        description: "Une équipe à votre écoute pour vous aider en cas de besoin"
    },
    {
        id: 2,
        iconUrl: "img/about-page/hand.png",
        title: "24h/24   Equipe présente",
        description: "Une équipe à votre écoute pour vous aider en cas de besoin"
    },
    {
        id: 3,
        iconUrl: "img/about-page/hand.png",
        title: "24h/24   Equipe présente",
        description: "Une équipe à votre écoute pour vous aider en cas de besoin"
    },
    {
        id: 4,
        iconUrl: "img/about-page/hand.png",
        title: "24h/24   Equipe présente",
        description: "Une équipe à votre écoute pour vous aider en cas de besoin"
    },
]


const Technos = [
    {
        id: 1,
        iconUrl: "img/about-page/react.png",
        label: "ReactJs"
    },
    {
        id: 2,
        iconUrl: "img/about-page/node.png",
        label: "NodeJs"
    },
    {
        id: 3,
        iconUrl: "img/about-page/laravel.png",
        label: "Laravel"
    },
    {
        id: 4,
        iconUrl: "img/about-page/flutter.png",
        label: "Flutter"
    },
    {
        id: 5,
        iconUrl: "img/about-page/laravel.png",
        label: "GitHub"
    },
]

export default function About() {
    return (
        <>
            <Layout title="A Propos">
                {/* ======== BANNIERE & HEADER ============= */}
                <Header>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide px-0 mx-0" data-bs-ride="carousel">
                        <div className="carousel-inner px-0 mx-0">
                            <CustomCarouselItem
                                itemClass="carousel-item active"
                                imgUrl="/img/common/banner.png">

                                <CarouselContent
                                    title="A propos de nous"
                                    description={{
                                        part1: "Nous proposons les meilleures services en termes de numérique avec",
                                        part2: "des collaborateurs a plusieurs années d’expérience"
                                    }}

                                ></CarouselContent>
                            </CustomCarouselItem>
                        </div>
                    </div>
                </Header >

                {/* ======== NOS SERVICES ============= */}
                <CustomSection
                    globalClass="container"
                    leftBlock={true}
                >
                    <div className="row" id={styles.travaux}>
                        <div className="col-md-6">
                            <div className="">
                                <p className={styles.textOrange}>Qui sommes nous ?</p>
                                <h1 className="title" id={styles.title}>Les meilleures en technique <br /> de transformation digitales</h1>
                                <img src="img/common/underline.png" className="img-fluid" alt="" srcSet="" />
                            </div>

                            <p className={styles.description}>
                                HSMC lorem ipsum dolor asset imar amet orem ipsum <br />
                                dolor asset imar amet orem ipsum dolor asset imar <br />
                                amet orem ipsum dolor asset imar amet orem ipsum <br />
                                dolor asset imar amet orem ipsum dolor asset imar <br />
                                amet orem  ar amet orem ipsum dolor asset imar amet <br />
                                orem ipsum dolor asset imar amet ar amet orem ipsum <br />
                                dolor asset imar amet orem ipsum dolor asset imar <br />
                                amet  ipsum dolor asset imar amet
                            </p>

                            <div className="" id={styles.aLink}>
                                <CustomButton classType={"btn shadow-lg orange-btn"} url="/contact">
                                    Contactez-nous
                                </CustomButton>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="img/about-page/about.png" className='img-fluid shadow-lg rounded' id={styles.headerImg} srcSet="" uk-scrollspy="cls: uk-animation-slide-top; delay: 500; repeat: false" />
                        </div>
                    </div>

                </CustomSection>


                {/* ======== NOUS SOMMES ============= */}
                <CustomSection
                    globalClass="container bg--light pb-5"
                    leftBlock={true}

                >
                    <div className="row content" uk-scrollspy="target: .card; cls: uk-animation-fade; delay: 500;repeat:true">
                        <div className="col-md-12">
                            <h1 className="title" id={styles.title}>Nous sommes un lorem ipsum dolor <br /> asset immar ammet</h1>
                            <img src="img/common/underline.png" className="img-fluid" alt="" srcSet="" />

                            <p className={styles.nousSommesDescription}>
                                Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor <br />
                                Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
                            </p>
                        </div>

                        <div className={styles.ourMission}>
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <p className="d-block">
                                        <strong> Notre mission :</strong> Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum<br />
                                    </p>

                                    <div className="row">
                                        {
                                            Teams.map((team) => {
                                                return (
                                                    <div className="col-md-6">
                                                        <TeamComponent
                                                            key={team.id}
                                                            {...team}
                                                        >
                                                        </TeamComponent>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                </CustomSection>

                {/* ======== BEFORE FOOTER SECTION 5(VOUS AVES UNE PREOCUPATION?) ============= */}
                <BeforeFooter
                    {...BeforeFooterInfos}
                ></BeforeFooter >

                {/* ======== NOS STATCK TECHINIQUE ============= */}
                <CustomSection
                    globalClass="container"
                    subTitle={
                        {
                            classType: 'sous--title', label: 'Notre stack technique'
                        }
                    }
                >
                    <div className="row content" uk-scrollspy="target: .card; cls: uk-animation-fade; delay: 500;repeat:true">
                        <div className="col-md-1"></div>
                        {
                            Technos.map((techno) => {
                                return (
                                    <div className="col-md-2">
                                        <Techno
                                            key={techno.id}
                                            {...techno}
                                        ></Techno>
                                    </div>
                                )
                            })
                        }
                        <div className="col-md-1"></div>
                    </div>
                </CustomSection>
            </Layout>
        </>
    )
}