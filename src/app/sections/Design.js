import Image from 'next/image';
import {
  design1,
  design10,
  design11,
  design12,
  design13,
  design14,
  design15,
  design16,
  design2,
  design3,
  design4,
  design5,
  design6,
  design7,
  design8,
  design9,
} from '../assets/image';

let designPicture = [
  { image: design1 },
  { image: design2 },
  { image: design3 },
  { image: design4 },
  { image: design5 },
  { image: design6 },
  { image: design7 },
  { image: design8 },
  { image: design9 },
  { image: design10 },
  { image: design11 },
  { image: design12 },
  { image: design13 },
  { image: design14 },
  { image: design15 },
  { image: design16 },
];

export default function Design() {
  return (
    <div className="w-11/12 py-10 mx-auto xl:w-10/12" id="project">
      <h1 className="font-serif text-6xl font-bold text-blue">Design</h1>

      <div className="grid justify-center grid-cols-2 gap-3 mt-5 md:grid-cols-3 xl:grid-cols-4">
        {designPicture.map((item) => (
          <Image
            isZoomed
            src={item.image}
            className="transition duration-500 cursor-pointer hover:scale-125"
          />
        ))}
      </div>
    </div>
  );
}
