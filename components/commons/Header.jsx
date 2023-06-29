import NavBar from './NavBar';

export default function Header({ children }) {
    return (
        <>
            <div className="container-fluid px-0 mx-0" id="header">
                <div className="row px-0 mx-0">
                    <div className="col-md-12 px-0 mx-0">
                        <NavBar></NavBar>
                    </div>
                </div>
                {children}
            </div>
        </>
    )
}