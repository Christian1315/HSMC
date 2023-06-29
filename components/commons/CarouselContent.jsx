import CustomButton from "./CustomButton"

export default function CarouselContent({ title, description, button }) {
    return (
        <>
            <div className="carousel-caption">
                <div className="row">
                    <div className="col-md-12 content" uk-scrollspy="cls: uk-animation-slide-bottom; target: button; delay: 300; repeat: true">
                        <h1 className="header--title" uk-scrollspy="cls: uk-animation-slide-top;delay: 300; repeat: true">{title}</h1>
                        <div className="description">
                            <p className="">
                                {description.part1} <br />
                                {description.part2}
                            </p>
                        </div>
                        {
                            button && <CustomButton classType={button.classType}>
                                {button.label}
                            </CustomButton>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}