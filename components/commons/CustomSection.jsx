export default function CustomSection({ globalClass, leftBlock, children, subTitle }) {
    return (
        <div className={globalClass} id="section--component">
            <div className="row">
                {
                    !leftBlock  && (subTitle &&
                    <div className="col-md-12">
                        <h1 className={subTitle.classType}>{subTitle.label}</h1>
                        <img src="img/common/underline.png" className="img-fluid underline" alt="" srcSet="" />
                    </div>)
                }
            </div>
            {children}
        </div>
    )
}