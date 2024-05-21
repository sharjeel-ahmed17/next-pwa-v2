import ContactUs from "./components/contactus/ContactUs";
import Layout from "./components/layout/Layout";
import Hero from "./components/hero/Hero";
import Work from "./components/work/Work";
import Service from "./components/service/Service";
import Team from "./components/team/Team";




export default function Home() {
  return (
    <>
      {/* updation is here */}
      {/* update */}
      {/* update the current page */}

      <Layout>
        <Hero />
        <Work />
        <Service />
        <Team />
        <ContactUs />
      </Layout>
    </>
  );
}
