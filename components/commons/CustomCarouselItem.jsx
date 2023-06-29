export default function CustomCarouselItem({ children, imgUrl, itemClass }) {
    return (
        <>
            <div className={itemClass} data-bs-interval="10000">
                <img src={imgUrl} className="d-block w-100" alt="..." />
                <div className="carousel-caption px-0 mx-0">
                    {children}
                </div>
            </div>
        </>
    )
}