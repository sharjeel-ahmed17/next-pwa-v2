import Image from 'next/image'
import { workdataList } from '../data/Data'


const Work = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row">
                {
                    workdataList.map((item, index) => {
                        const { imgurl } = item;
                        return (
                            <div key={index} className="col-md-6 p-2">
                                <Image
                                    src={imgurl}
                                    alt={imgurl}
                                    style={{
                                        width: "100%",
                                        height: "400px"
                                    }}
                                />
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default Work