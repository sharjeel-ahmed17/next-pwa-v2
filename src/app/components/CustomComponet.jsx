import Image from "next/image"

import image1 from "/public/image/1.png"
import image2 from "/public/image/2.png"
import image3 from "/public/image/3.png"


export const customDataList = [
    {
        imgUrl: image1
    },
    {
        imgUrl: image2
    },
    {
        imgUrl: image3
    },

]


const CustomComponet = () => {
    return (
        <div>


            {
                customDataList.map((item, index) => {
                    const { imgUrl } = item;
                    return <div key={index}>
                        <Image
                            src={imgUrl}
                            width={200}
                            height={200}
                            alt={imgUrl}
                        />
                    </div>

                })
            }

        </div>
    )
}

export default CustomComponet