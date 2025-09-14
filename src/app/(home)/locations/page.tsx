import { FAQSection } from "@/features/home/components/faq-section";
import { AngledBanner } from "@/features/home/location/component/banner";
import { TrainingHeader } from "@/features/home/location/component/training-header";
import { TrainingLocations } from "@/features/home/location/component/training-location";

export default function Page() {
  return (
    <div>
      <AngledBanner />
      <TrainingHeader />
      <TrainingLocations />
      <FAQSection />
    </div>
  );
}

