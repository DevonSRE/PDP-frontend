import { FAQSection } from "@/features/home/components/faq-section";
import { TrainingHeader } from "@/features/home/location/component/training-header";
import { TrainingLocations } from "@/features/home/location/component/training-location";

export default function Page() {
  return (
    <div>
      <TrainingHeader />
      <TrainingLocations />
      <FAQSection />
    </div>
  );
}
