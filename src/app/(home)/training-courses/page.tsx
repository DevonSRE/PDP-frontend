import { FAQSection } from "@/features/home/components/faq-section";
import { TrainingPrograms } from "@/features/home/components/training-programs";
import { CourseCategories } from "@/features/home/training-courses/component/course_categories";
import { TrainingSectionHeader } from "@/features/home/training-courses/training-section-header";

export default function AboutUs() {
  return (
    <div>
      <TrainingSectionHeader />
      <CourseCategories />
      <TrainingPrograms />
      <FAQSection />
    </div>
  );
}
