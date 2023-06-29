import Layout from '../components/commons/Layout'
import Header from '../components/commons/Header';
import CarouselIndicator from '../components/commons/CarouselIndicator';
import CarouselContent from '../components/commons/CarouselContent';
import CustomCarouselItem from '../components/commons/CustomCarouselItem';
import CustomSection from '../components/commons/CustomSection';
import BadgeComponent from '../components/commons/BadgeComponent'
import RealisationCard from '../components/commons/RealisationCard';
import CustomButton from '../components/commons/CustomButton';
import PostsComponent from '../components/commons/PostComponent';
import BeforeFooter from '../components/commons/BeforeFooter';

const Badges = [
    {
        id: 1,
        imgUrl: "img/home-page/ingenieur.png",
        label: "Ingénierie informatique",
    },
    {
        id: 2,
        imgUrl: "img/home-page/audit.png",
        label: "Audit et Conseils",
    },
    {
        id: 3,
        imgUrl: "img/home-page/web-mobile.png",
        label: "Conception web et mobile",
    },

    {
        id: 4,
        imgUrl: "img/home-page/communication.png",
        label: "Communication et marketing digital",
    },
    {
        id: 5,
        imgUrl: "img/home-page/maintenance.png",
        label: "Maintenance Informatique",
    },
    {
        id: 6,
        imgUrl: "img/home-page/graphique.png",
        label: "Conception graphique",
    },
    {
        id: 7,
        imgUrl: "img/home-page/securite.png",
        label: "Sécurité informatique",
    },
    {
        id: 8,
        imgUrl: "img/home-page/hebergement.png",
        label: "Hébergement web",
    },
]

const BadgesMobiles = [
    {
        id: 9,
        imgUrl: "img/home-page/ingenieur.png",
        label: "Ingénierie informatique",
    },
    {
        id: 10,
        imgUrl: "img/home-page/audit.png",
        label: "Audit et Conseils",
    },
    {
        id: 11,
        imgUrl: "img/home-page/web-mobile.png",
        label: "Conception web et mobile",
    },
]

const Realisations = [
    {
        id: 1,
        imgUrl: "img/home-page/realisation.png",
        name: "Douke",
        tag: "Site web",
        title: "Douke",
        description: "Lorem ipsum dolor asset color pitul dcnzio",
        seeMore: {
            url: "/see-more",
            label: "Je veux voir"
        }
    },
    {
        id: 2,
        imgUrl: "img/home-page/realisation.png",
        tag: "Site web",
        title: "E-voting",
        description: "Lorem ipsum dolor asset color pitul dcnzio",
        seeMore: {
            url: "/see-more",
            label: "Je veux voir"
        }
    },
    {
        id: 3,
        imgUrl: "img/home-page/realisation.png",
        tag: "Site web",
        title: "Finanfa",
        description: "Lorem ipsum dolor asset color pitul dcnzio",
        seeMore: {
            url: "/see-more",
            label: "Je veux voir"
        }
    },
    {
        id: 4,
        imgUrl: "img/home-page/realisation.png",
        name: "Douke",
        tag: "Site web",
        title: "Douke",
        description: "Lorem ipsum dolor asset color pitul dcnzio",
        seeMore: {
            url: "/see-more",
            label: "Je veux voir"
        }
    },
]

const allPosts = [
    {
        PostVertical: {
            imgUrl: "img/home-page/post1-resized.png",
            date: "20 juin 2023",
            title: "Les intérêts d’avoir un site web de qualité",
            description: "Lorem ipsum dolor asset active ton mindset et sois originale ton mindset et sois originale  ton mindset et sois originale",
            seeMore: {
                url: "img/home-page/post1.png",
                label: "Je lis la suite"
            },
        },
        PostHorizons: [
            {
                imgUrl: "img/home-page/post2.png",
                date: "20 juin 2023",
                title: "Les intérêts d’avoir un",
                description: "Lorem ipsum dolor asset active ton mindset et sois",
                seeMore: {
                    url: "img/home-page/post2.png",
                    label: "Je lis la suite"
                },
            },
            {
                imgUrl: "img/home-page/post3.png",
                date: "20 juin 2023",
                title: "Les intérêts d’avoir un",
                description: "Lorem ipsum dolor asset active ton mindset et sois",
                seeMore: {
                    url: "img/home-page/post3.png",
                    label: "Je lis la suite"
                },
            },
            {
                imgUrl: "img/home-page/post2.png",
                date: "20 juin 2023",
                title: "Les intérêts d’avoir un",
                description: "Lorem ipsum dolor asset active ton mindset et sois",
                seeMore: {
                    url: "img/home-page/post3.png",
                    label: "Je lis la suite"
                },
            },
        ]
    }
]

const BeforeFooterInfos = {
    title: {
        title1: "Vous avez une préoccupation ? Sentez vous libre",
        title2: "de nous contacter à tout moment",
    },
    description: {
        description1: "Lorem ipsum dolor asset active ton",
        description2: "mindset et sois originale ton mindset et sois originale  ton mindset et sois originale"
    },
    button: {
        url: '/contact',
        label: 'Contactez-nous'
    }
}


export default function Index() {
    return (
        <>
            <Layout title="Accueil">

                {/* ======== BANNIERE & HEADER ============= */}

                <Header>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide px-0 mx-0" data-bs-ride="carousel">
                        <CarouselIndicator></CarouselIndicator>
                        <div className="carousel-inner px-0 mx-0">
                            {/* CAROUSEL 1 */}
                            <CustomCarouselItem
                                itemClass="carousel-item active"
                                imgUrl="/img/common/banner.png">

                                <CarouselContent
                                    title="Hard and Soft Master Consulting"
                                    description={{
                                        part1: "L’agence qui s’occupe de la conception, de la réalisation et du",
                                        part2: " développement de vos projets"
                                    }}

                                    button={{
                                        classType: 'btn shadow-lg orange-btn',
                                        label: 'En savoir plus'
                                    }}
                                ></CarouselContent>
                            </CustomCarouselItem>

                            {/* CAROUSEL 2 */}
                            <CustomCarouselItem
                                itemClass="carousel-item"
                                imgUrl="/img/common/banner.png">

                                <CarouselContent
                                    title="Hard and Soft Master Consulting"
                                    description={{
                                        part1: "L’agence qui s’occupe de la conception, de la réalisation et du",
                                        part2: " développement de vos projets"
                                    }}

                                    button={{
                                        classType: 'btn shadow-lg orange-btn',
                                        label: 'En savoir plus'
                                    }}
                                ></CarouselContent>
                            </CustomCarouselItem>

                            {/* CAROUSEL 3 */}
                            <CustomCarouselItem
                                itemClass="carousel-item"
                                imgUrl="/img/common/banner.png">

                                <CarouselContent
                                    title="Hard and Soft Master Consulting"
                                    description={{
                                        part1: "L’agence qui s’occupe de la conception, de la réalisation et du",
                                        part2: " développement de vos projets"
                                    }}

                                    button={{
                                        classType: 'btn shadow-lg orange-btn',
                                        label: 'En savoir plus'
                                    }}
                                ></CarouselContent>
                            </CustomCarouselItem>
                        </div>
                    </div>
                </Header >

                {/* ======== NOS SERVICES ============= */}
                <CustomSection
                    globalClass="container"
                    subTitle={
                        {
                            classType: 'sous--title', label: 'Nos services'
                        }
                    }>
                    <h1 className="title">Nous accompagnons votre <br /> transformation digitale par des <br /> solutions innovantes</h1>
                    {/* SUR LES GRANDS ECRANS */}
                    <div className="row grand--app" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500;repeat: false">
                        {
                            Badges.map((badge) => {
                                return (
                                    <div className="col-md-3">
                                        <BadgeComponent
                                            key={badge.id}
                                            {...badge}
                                        >
                                        </BadgeComponent>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* SUR LES PETITS ECRANS */}
                    <div className="row d-none small--app" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500;repeat: false">
                        {
                            BadgesMobiles.map((badge) => {
                                return (
                                    <div className="col-md-12">
                                        <BadgeComponent
                                            key={badge.id}
                                            {...badge}
                                        >
                                        </BadgeComponent>
                                    </div>
                                )
                            })
                        }
                    </div>
                </CustomSection>

                {/* ======== NOS REALISATIONS ============= */}
                <CustomSection
                    globalClass="container"
                    subTitle={
                        {
                            classType: 'sous--title', label: 'Nos réalisations'
                        }
                    }
                >
                    <div className="row content" uk-scrollspy="target: .card; cls: uk-animation-fade; delay: 500;repeat:true">
                        {
                            Realisations.map((realisation) => {
                                return (
                                    <RealisationCard
                                        key={realisation.id}
                                        {...realisation}
                                    ></RealisationCard>
                                )
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <CustomButton classType={"btn shadow-lg orange-btn"}>
                                Plus de projet
                            </CustomButton>
                        </div>
                    </div>
                </CustomSection>

                {/* ======== NOS METHODES & VALEURS ============= */}
                <CustomSection
                    globalClass="container"
                >
                    <div className="content">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="nav-methode-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-methode" type="button" role="tab" aria-controls="nav-methode"
                                            aria-selected="true">Notre Méthode de travail</button>
                                        <button className="nav-link" id="nav-valeurs-tab" data-bs-toggle="tab"
                                            data-bs-target="#nav-valeurs" type="button" role="tab"
                                            aria-controls="nav-valeurs" aria-selected="false">Nos valeurs</button>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-md-3"></div>
                        </div>

                        <div className="row ">
                            <div className="col-md-12">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-methode" role="tabpanel" aria-labelledby="nav-methode-tab" tabindex="0">
                                        {/* TABE METHODE'S CONTENT */}
                                        <div id="carouselExampleControls" className="carousel slide px-0 mx-0" data-bs-ride="carousel">
                                            <div className="carousel-inner px-0 mx-0">

                                                <div className="carousel-item active row slide--block">
                                                    <div className="col-md-12">
                                                        <h1 className="title text-start">1- Compréhension des besoins du client </h1>
                                                        <div className="row">
                                                            <div className="col-md-6 col1">
                                                                <p className="description">Lorem ipsm dolor asset ammea <br /> fjenz,Lorem ipsm dolor asset ammea <br /> fjenzLorem ipsm dolor asset ammea <br /> fjenz Lorem ipsm dolor asset ammea <br /> fjenzLorem ipsm dolor asset ammea fjenz</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <img src="img/home-page/pana.png" className="img-fluid shadow-lg" srcSet="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item row slide--block">
                                                    <div className="col-md-12">
                                                        <h1 className="title text-start">2- Compréhension des besoins du client </h1>
                                                        <div className="row">
                                                            <div className="col-md-6 col1">
                                                                <p className="description">Lorem ipsm dolor asset ammea <br /> fjenz,Lorem ipsm dolor asset ammea <br /> fjenzLorem ipsm dolor asset ammea <br /> fjenz Lorem ipsm dolor asset ammea <br /> fjenzLorem ipsm dolor asset ammea fjenz</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <img src="img/home-page/pana.png" className="img-fluid shadow-lg" srcSet="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-valeurs" role="tabpanel" aria-labelledby="nav-valeurs-tab" tabindex="0">
                                        {/* TABE VALUE'S CONTENT */}
                                        <div id="carouselExampleIndicators" className="carousel slide px-0 mx-0" data-bs-ride="true">
                                            <div className="carousel-inner px-0 mx-0">

                                                <div className="carousel-item active row slide--block">
                                                    <div className="col-md-12">
                                                        <h1 className="title text-start">1- Compréhension des besoins du client </h1>
                                                        <div className="row">
                                                            <div className="col-md-6 col1">
                                                                <p className="description">Lorem ipsm dolor asset ammea <br /> fjenz,Lorem ipsm dolor asset ammea <br /> fjenzLorem ipsm dolor asset ammea <br /> fjenz Lorem ipsm dolor asset ammea <br /> fjenzLorem ipsm dolor asset ammea fjenz</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <img src="img/home-page/pana.png" className="img-fluid shadow-lg" srcSet="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item row slide--block">
                                                    <div className="col-md-12">
                                                        <h1 className="title text-start">2- Compréhension des besoins du client </h1>
                                                        <div className="row">
                                                            <div className="col-md-6 col1">
                                                                <p className="description">Lorem ipsm dolor asset ammea <br /> fjenz,Lorem ipsm dolor asset ammea <br /> fjenzLorem ipsm dolor asset ammea <br /> fjenz Lorem ipsm dolor asset ammea <br /> fjenzLorem ipsm dolor asset ammea fjenz</p>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <img src="img/home-page/pana.png" className="img-fluid shadow-lg" srcSet="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CustomSection>

                {/* ======== BEFORE FOOTER SECTION 5(VOUS AVES UNE PREOCUPATION?) ============= */}
                <BeforeFooter
                    {...BeforeFooterInfos}
                ></BeforeFooter >

                {/* ======== ACTUALITES & BLOG ============= */}
                <CustomSection
                    globalClass="container"
                    subTitle={
                        {
                            classType: 'sous--title', label: 'Actualités et blog'
                        }
                    }
                >
                    <h1 className="title">Articles récemments publiés</h1>
                    <div className="row content" id='post'>
                        <div className="col-md-12">
                            {
                                allPosts.map((post) => {
                                    return (
                                        <PostsComponent
                                            key={post.index}
                                            {...post}
                                        >
                                        </PostsComponent>
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-6"></div>
                    </div>

                </CustomSection >
            </Layout>
        </>
    )
}
