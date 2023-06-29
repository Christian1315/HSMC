import Layout from '../components/commons/Layout'
import Header from '../components/commons/Header';
import CarouselContent from '../components/commons/CarouselContent';
import CustomCarouselItem from '../components/commons/CustomCarouselItem';
import CustomSection from '../components/commons/CustomSection';
import RealisationCard from '../components/commons/RealisationCard';


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
    {
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 7,
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

export default function Travaux() {
    return (
        <>
            <Layout title="Nos Traveaux">
                {/* ======== BANNIERE & HEADER ============= */}

                <Header>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide px-0 mx-0" data-bs-ride="carousel">
                        <div className="carousel-inner px-0 mx-0">
                            <CustomCarouselItem
                                itemClass="carousel-item active"
                                imgUrl="/img/common/banner.png">

                                <CarouselContent
                                    title="Nos réalisations"
                                    description={{
                                        part1: "L’agence qui s’occupe de la conception, de la réalisation et du",
                                        part2: "développement de vos projets"
                                    }}

                                ></CarouselContent>
                            </CustomCarouselItem>
                        </div>
                    </div>
                </Header >

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
                </CustomSection>
            </Layout>
        </>
    )
}