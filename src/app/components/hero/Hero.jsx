import Image from 'next/image'
import React from 'react'
import HeroImg from "/public/image/1.png"
import HeroImg1 from "/public/image/2.png"
import HeroImg2 from "/public/image/3.png"

const Hero = () => {
    return (
        <section className="container">


            <div className="px-4 py-5 my-5 text-center">

                <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Quickly design and customize responsive mobile-first sites with Bootstrap,
                        the world’s most popular front-end open source toolkit, featuring Sass
                        variables and mixins, responsive grid system, extensive prebuilt
                        components, and powerful JavaScript plugins.
                    </p>

                </div>
            </div>

        </section>
    )
}

export default Hero