import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";

export default function FeaturedPosts() {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <IKImage
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          src="https://ik.imagekit.io/uekieknn4/featured1.jpeg"
          alt=""
          className="rounded-3xl object-cover aspect-video"
          width={895}
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link
          to="/detail"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          अख्तियारमा बेनामे उजुरी दिन पाउने व्यवस्था यथावत
        </Link>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          {/* image div */}
          <div className="w-1/3 aspect-video">
            <IKImage
              urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
              src="https://ik.imagekit.io/uekieknn4/featured2.jpeg"
              alt=""
              className="rounded-3xl object-cover w-full h-full"
              width={298}
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/detail"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              एकीकृत समाजवादीले बनायो २४ सदस्यीय सचिवालय
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          {/* image div */}
          <div className="w-1/3 aspect-video">
            <IKImage
              urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
              src="https://ik.imagekit.io/uekieknn4/featured3.jpeg"
              alt=""
              className="rounded-3xl object-cover w-full h-full"
              width={298}
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/detail"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              एकीकृत समाजवादीमा पाँच सदस्यीय केन्द्रीय कार्यालय गठन, घनश्यामको
              नेतृत्व
            </Link>
          </div>
        </div>
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          {/* image div */}
          <div className="w-1/3 aspect-video">
            <IKImage
              urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
              src="https://ik.imagekit.io/uekieknn4/featured4.jpeg"
              alt=""
              className="rounded-3xl object-cover w-full h-full"
              width={298}
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/detail"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              अख्तियार र भ्रष्टाचारसम्बन्धी विधेयक संसदीय उपसमितिबाट पारित
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
