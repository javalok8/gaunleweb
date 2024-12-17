import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";
// import { format } from "timeago.js";

export default function PostListItem() {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <IKImage
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          src="https://ik.imagekit.io/uekieknn4/postImg.jpeg"
          alt=""
          className="rounded-2xl object-cover"
          width={735}
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          अमेरिकाको स्कुलमा छात्राले गोली चलाउँदा २ जनाको मृत्यु
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" to="/autherName">
            Lokendra Phagami
          </Link>
          <span>on</span>
          <Link className="text-blue-800">Mobile App Development</Link>
          <span>2 days ago</span>
        </div>
        {/* this is for description */}
        <p>
          २ पुस, काठमाडौं । अमेरिकाको म्याडिसनस्थित एक क्रिश्चियन विद्यालयमा
          गोली चल्दा तीन जनाको मृत्यु भएको छ । मृत्यु हुनेमा एक शिक्षिका, एक
          छात्र र गोली चलाउने छात्रा छन् ।
        </p>
        <Link to="/readmore" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
}
