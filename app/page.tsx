import BannerDiscount from "@/components/BannerDiscount";
import CarouselTextBanner from "@/components/CarouselTextBanner";
import FeaturedProducts from "@/components/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
    </main>
  );
}
