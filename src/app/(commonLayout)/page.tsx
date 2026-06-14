import AboutSection from "@/components/modules/Home/AboutSection";
import ContactSection from "@/components/modules/Home/ContactSection";
import FAQSection from "@/components/modules/Home/FAQSection";
import FeaturesSection from "@/components/modules/Home/FeaturesSection";
import Hero from "@/components/modules/Home/Hero";
import HowItWorksSection from "@/components/modules/Home/HowItWorksSection";
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
        <FeaturesSection></FeaturesSection>
        <HowItWorksSection></HowItWorksSection>
        <TopDoctorsSection></TopDoctorsSection>
        <TrustSection></TrustSection>
        <FAQSection></FAQSection>
        <ContactSection></ContactSection>
      </main>
    </>
  );
}
