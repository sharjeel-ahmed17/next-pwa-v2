import Image from 'next/image'
import HeroImg1 from "/public/image/1.png"

const TeamItem = () => {
    return (
        <div className="col-md-3 py-2">
            <Image
                src={HeroImg1}
                alt="this is taam memebr 1`"
                style={
                    {
                        width: "100%",
                        height: "500px",

                    }
                }
            />
        </div>
    )
}

export default TeamItem