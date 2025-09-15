import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CalendarDaysIcon, MapPinnedIcon } from "lucide-react";

export function TrainingLocations() {
  return (
    <div className="bg-neutral-100 py-10 md:py-28 px-7 md:px-10">
      <div className="max-w-full md:max-w-7xl mx-auto flex flex-col gap-6 md:gap-12 w-full">
        {/* Header Section */}
        <div className="text-center flex flex-col gap-2.5 md:gap-4 w-full">
          <h3 className="text-lg md:text-2xl font-semibold">Where We Train</h3>
          <p className="text-xs md:text-sm max-w-full md:max-w-2xl w-full mx-auto font-light">
            We conduct in-person training sessions at strategically selected
            locations to serve professionals across multiple regions. Each venue
            is carefully chosen for accessibility, facilities, and local
            relevance to our course content.
          </p>
        </div>

        {/* Training Locations Grid */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-10">
          {locations.map((location, index) => (
            <TrainingLocationCard
              key={index}
              imageSrc={location.imageSrc}
              locationName={location.locationName}
              date={location.date}
              description={location.description}
              location={location.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const locations = [
  {
    imageSrc: "/assets/location.svg",
    locationName: "Tashkent, Uzbekistan",
    date: "May & September 2025",
    location: "International Hotel, Tashkent",
    description:
      "Our Central Asia location serves professionals from former Soviets republics with tailored governance programs.",
  },
  {
    imageSrc: "/assets/location2.svg",
    locationName: "Kigali, Rwanda",
    date: "March & October 2025",
    location: "Kigali Convention Center",
    description:
      "Our flagship location features state-of-the-art training facilities in Nigeria's capital city, ideal for government and private sector participants.",
  },
  {
    imageSrc: "/assets/location.svg",
    locationName: "Accra, Ghana",
    date: "June & November 2025",
    location: "Kempinski Hotel Gold Coast City",
    description:
      "Our West African hub offers premium training facilities with easy access from across the ECOWAS region.",
  },
  {
    imageSrc: "/assets/location.svg",
    locationName: "Lagos, Nigeria",
    date: "June & November 2025",
    location: "Victoria Island",
    description:
      "The vibrant location offers modern amenities and access to key financial districts, making it perfect for corporate training sessions.",
  },
  {
    imageSrc: "/assets/location.svg",
    locationName: "Kano, Nigeria",
    date: "July & December 2025",
    location: "Kano City Center",
    description:
      "In the heart of Northern Nigeria, this center combines cultural richness with advanced learning environments, catering to local and international audiences.",
  },
  {
    imageSrc: "/assets/location2.svg",
    locationName: "Abuja, Nigeria",
    date: "March & October 2025",
    location: "Central Business District",
    description:
      "Our flagship location features state-of-the-art training facilities in Nigeria's capital city, ideal for government and private sector participants.",
  },
];

type TTrainingLocationCardProps = {
  imageSrc: string;
  locationName: string;
  date: string;
  description: string;
  location: string;
};
function TrainingLocationCard(props: TTrainingLocationCardProps) {
  const { imageSrc, locationName, location, date, description } = props;
  return (
    <Card className="shadow-none border-none min-w-full md:min-w-80 max-w-full md:max-w-[340px]">
      <CardContent>
        <div className="w-full h-28 md:h-44">
          <Image
            src={imageSrc}
            alt={locationName}
            height={100}
            width={200}
            className="object-cover object-center aspect-video h-full w-full"
          />
        </div>
      </CardContent>
      <CardHeader className="gap-2 md:gap-4">
        <CardTitle className="">{locationName}</CardTitle>
        <div className="w-full h-fit flex flex-col gap-1.5 md:gap-2 text-xs md:text-sm font-light">
          <p className="w-full flex items-center gap-2.5">
            <MapPinnedIcon className="h-3 md:h-4 w-3 md:w-4" />
            <span>{location}</span>
          </p>
          <p className="w-full flex items-center gap-2.5">
            <CalendarDaysIcon className="h-3 md:h-4 w-3 md:w-4" />
            <span>{date}</span>
          </p>
        </div>
        <CardDescription className="text-xs md:text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <CardAction className="w-full">
          <Button className="w-full rounded bg-brand-green-extralight">
            View Details
          </Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}
