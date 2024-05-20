import Image from "next/image"
import HeroImg1 from "/public/image/1.png"


const ServiceItem = () => {
    return (
        <div className="col-md-6 py-3">
            <div className="card" style={{ width: "100%" }}>
                <Image src={HeroImg1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ServiceItem