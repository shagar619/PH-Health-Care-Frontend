import AboutSection from "@/components/modules/Home/AboutSection";
import ContactSection from "@/components/modules/Home/ContactSection";
import DiscoverMoreSection from "@/components/modules/Home/DiscoverMoreSection";
import FAQSection from "@/components/modules/Home/FAQSection";
import Hero from "@/components/modules/Home/Hero";
import PricingSection from "@/components/modules/Home/PricingSection";
import ServicesSection from "@/components/modules/Home/ServicesSection";
import TestimonialSection from "@/components/modules/Home/TestimonialSection";
import TopDoctorsSection from "@/components/modules/Home/TopDoctorsSection";
import TrustSection from "@/components/modules/Home/TrustSection";
import WhyChooseUs from "@/components/modules/Home/WhyChooseUs";
import Head from "next/head";



export default function Home() {
  return (
    <>
      <Head>
        <title>AI-Powered Healthcare - Find Your Perfect Doctor</title>
        <meta
          name="description"
          content="Discover top-rated doctors tailored to your needs with our AI-powered healthcare platform. Get personalized recommendations and book appointments effortlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <AboutSection></AboutSection>
        <WhyChooseUs></WhyChooseUs>
        <ServicesSection></ServicesSection>
        <TopDoctorsSection></TopDoctorsSection>
        {/* <TrustSection></TrustSection> */}
        <PricingSection></PricingSection>
        <DiscoverMoreSection></DiscoverMoreSection>
        <FAQSection></FAQSection>
        <TestimonialSection></TestimonialSection>
        <ContactSection></ContactSection>
      </main>
    </>
  );
}
