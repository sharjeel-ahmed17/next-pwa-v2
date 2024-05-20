// import ContactUs from "./components/contactus/ContactUs";
// import Layout from "./components/layout/Layout";
// import Hero from "./components/hero/Hero";
// import Work from "./components/work/Work";
// import Service from "./components/service/Service";

import Image from "next/image";

// import CustomComponet from "./components/CustomComponet";

// import Team from "./components/team/Team";
export default function Home() {
  return (
    <>
      {/* <CustomComponet /> */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Image
              src={'/public/image/1.png'}
              width={200}
              height={200}
              alt="some image"

            />
            {/* here is the updated code of next js */}
          </div>
        </div>
      </div>
      {/* jab tak page componet update nahi hoga */}

      {/* <Layout>
        <Hero />
        <Work />
        <Service />
        <Team />
        <ContactUs />
      </Layout> */}
    </>
  );
}
