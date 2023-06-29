import Link from "next/link"
import CustomButton from "./CustomButton"
const Menus = [
    {
        'id': 1,
        'label': 'Accueil',
        'url': '/',
    },
    {
        'id': 2,
        'label': 'Nos travaux',
        'url': '/travaux',
    },
    {
        'id': 3,
        'label': 'A propos',
        'url': '/about',
    },
    {
        'id': 4,
        'label': 'Contact',
        'url': '/contact',
    },
]

export default function NavBar() {
    return (
        <>
            {/* SUR LES MOBILES */}
            <nav className="navbar navbar-expand-lg d-none py-0 px-3" id="mobile-nav">
                <div className="container-fluid py-0">
                    <Link className="navbar-brand" href="/">
                        <img src="/logo.png" className='img-fluid' alt="Logo HSMC" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" uk-scrollspy="cls: uk-animation-slide-top; target: a; delay: 300; repeat: true">
                            {
                                Menus.map((menu) => {
                                    return (
                                        <li className="nav-item" key={menu.id}>
                                            <Link className="nav-link" aria-current="page" href={menu.url}>{menu.label}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <form className="d-flex" role="search" uk-scrollspy="cls: uk-animation-slide-top; target: button; delay: 300; repeat: true">
                            <CustomButton classType={"btn shadow-lg orange-btn"}>
                                Demander un devis
                            </CustomButton>
                        </form>
                    </div>
                </div>
            </nav>

            {/* SUR LES GRANDS ECRANS */}
            <div className="row fixed-top px-5 text-dark" id="nav--bar">
                <div className="col-md-12">
                    <nav id="desktop-nav">
                        <Link className="navbar-brand" href="/">
                            <img src="/logo.png" className='img-fluid' alt="Logo HSMC" />
                        </Link>

                        <ul className="">
                            {
                                Menus.map((menu) => {
                                    return (
                                        <li className="nav-item" key={menu.id}>
                                            <Link className="nav-link" aria-current="page" href={menu.url}>{menu.label}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <CustomButton classType={"btn shadow-lg orange-btn"}>
                            Demander un devis
                        </CustomButton>
                    </nav>
                </div>
            </div>
        </>
    )
}