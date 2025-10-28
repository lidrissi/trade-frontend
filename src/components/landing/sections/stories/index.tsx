import { ArrowRight, Image } from 'lucide-react';
import Story from './story';
import Explore from './Explore';

export default function Stories() {
  const storiesItems = [
    {
      name: 'DACIA',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ',
      image: 'story1.png',
      verified: true,
    },
    {
      name: 'AD Industrie',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ',
      image: 'story2.png',
    },
    {
      name: 'Intercable',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ',
      image: 'story3.png',
    },
  ];

  return (
    <div className="container  px-6 mx-auto">
      <h1 className="text-3xl font-bold text-black text-center mb-4">Success Stories</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-between">
        <div className="flex flex-col gap-6 justify-between">
          {storiesItems.map((item, index) => (
            <Story key={index} {...item} />
          ))}
        </div>
        <Explore />
      </div>
    </div>
  );
}
