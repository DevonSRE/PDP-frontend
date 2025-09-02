import FAQSection from "@/features/home/components/faq-section";
import CourseCategories from "@/features/home/training-courses/component/course_categories";
import ProfessionalTrainingHeader from "@/features/home/training-courses/professional-training";

export default function AboutUs(){
 return <div>
    <ProfessionalTrainingHeader/>
    <CourseCategories/>
    <FAQSection/>
 </div>
}