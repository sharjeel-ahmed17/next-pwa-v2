// import ContactUs from "./components/contactus/ContactUs";
// import Layout from "./components/layout/Layout";
// import Hero from "./components/hero/Hero";
// import Work from "./components/work/Work";
// import Service from "./components/service/Service";
// import Team from "./components/team/Team";

import Image from "next/image";

import WORK_IMG_1 from "/public/image/1.png"
import WORK_IMG_2 from "/public/image/2.png"
import WORK_IMG_3 from "/public/image/3.png"
import WORK_IMG_4 from "/public/image/4.jpeg"
const workData = [
  {
    imageUrl: WORK_IMG_1,
    title: 'Graphic Design',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    href: "https://chatgpt.com/",
    link: "Chatgpt",
    alt: "this is my image "

  },
  {
    imageUrl: WORK_IMG_2,
    title: 'Seo',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    href: "https://chatgpt.com/",
    link: "gemini",
    alt: "this is my image "
  },
  {
    imageUrl: WORK_IMG_3,
    title: 'Web Development',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    href: "https://chatgpt.com/",
    link: "leonardo",
    alt: "this is my image "
  },
  {
    imageUrl: WORK_IMG_4,
    title: 'Wordpress',
    description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    href: "https://chatgpt.com/",
    link: "bing ai",
    alt: "this is my image "
  },

];

export default function Home() {
  return (
    <>
      {/* updation is here */}
      {/* update */}
      {/* update the current page */}

      {/* <Layout>
        <Hero />
        <Work />
        <Service />
        <Team />
        <ContactUs />
      </Layout> */}

      {/* navbar start */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      {/* navbar end */}

      {/* work start */}
      <div className="container mx-auto my-5">
        <div className="row">


          {
            workData.map((item, index) => {
              const { imageUrl, title, link, href, description, alt } = item;
              return (
                <div className="col-md-6 p-2" key={index}>
                  <Image
                    src={imageUrl}
                    alt={alt}
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
      {/* work end */}
      {/* contact us start*/}
      <div className="container mx-auto">
        <h3 className="text-center"><b>email : </b> sharjeelalibari3@gmail.com</h3>
        <h3 className="text-center"><b>phone :</b>03426307</h3>

      </div>
      {/* contact us end */}
      {/* footer start */}
      <div className="bg-primary">
        <div className="container">
          <footer className="text-center py-4 text-white text-uppercase ">
            all right reversed by sharjeel ahmed
          </footer>
        </div>

      </div>
      {/* footer end */}
    </>
  );
}
