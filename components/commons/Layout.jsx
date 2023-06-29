import Head from "next/head";
import Footer from './Footer';


export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="favicon-img.jpeg" type="image/x-icon" />
                <title>{title}</title>
            </Head>
            {children}

            {/* ======== FOOTER ============= */}
            < Footer ></Footer >
        </>

    )
}