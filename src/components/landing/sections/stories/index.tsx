import { ArrowRight, Image } from "lucide-react";
import Story from "./story";
import Explore from "./Explore";

export default function Stories() {
  const storiesItems = [
    {
      name: "DACIA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
      image: "story1.png",
      verified: true,
    },
    {
      name: "AD Industrie",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
      image: "story2.png",
    },
    {
      name: "Intercable",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ",
      image: "story3.png",
    },
  ];

  return (
    <div className="container mx-auto px-6">
      <h1 className="mb-4 text-center text-3xl font-bold text-black">
        Success Stories
      </h1>
      <div className="grid grid-cols-1 justify-between gap-6 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-6">
          {storiesItems.map((item, index) => (
            <Story key={index} {...item} />
          ))}
        </div>
        <Explore />
      </div>
    </div>
  );
}
