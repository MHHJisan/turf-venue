import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Facilities from "@/components/home/Facilities";
import PricingPreview from "@/components/home/PricingPreview";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Facilities />

        <PricingPreview />

        <GalleryPreview />
      </main>
    </>
  );
}
