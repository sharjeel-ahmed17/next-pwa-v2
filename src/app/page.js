import Image from "next/image";
import HeroImg1 from "../../public/image/1.jpeg"
import HeroImg2 from "../../public/image/2.jpeg"
import HeroImg3 from "../../public/image/3.jpeg"
import HeroImg4 from "../../public/image/4.jpg"


let workData = [
  {
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.",
    image: HeroImg1,
  },
  {
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.",
    image: HeroImg2,
  },
  {
    title: "Title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.",
    image: HeroImg3,
  },
  {
    title: "Title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quas.",
    image: HeroImg4,
  },
]
export default function Home() {
  return (
    <>
      {/* nav bar  start*/}

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
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      {/* nav bar  end*/}
      {/* hero section start  */}
      <div className="container">
        <div className="px-4 py-5 my-5 text-center">
          <Image
            className="d-block mx-auto mb-4"
            src={HeroImg1}
            alt=""
            width={72}
            height={57}
          />
          <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Quickly design and customize responsive mobile-first sites with Bootstrap,
              the world’s most popular front-end open source toolkit, featuring Sass
              variables and mixins, responsive grid system, extensive prebuilt
              components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
                Primary button
              </button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                Secondary
              </button>
            </div>
          </div>
        </div>

      </div>
      {/* hero section end */}

      {/* work section start */}
      <div className="container my-5 py-5">
        <div className="row">
          {
            workData.map((item, index) => {
              return (
                <div key={index} className="col-md-6 p-2">
                  <Image
                    src={item.image}
                    alt={item.image}
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
      {/* work section end */}
      <div className="container">
        <div className="row">
          hello world
        </div>
      </div>
      {/* service section start */}



      {/* service section end */}

    </>
  );
}
