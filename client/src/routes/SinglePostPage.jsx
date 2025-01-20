import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import { IKImage } from "imagekitio-react";
// import { format } from "timeago.js";

export default function SinglePostPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            त्रिविको जग्गा हिनामिना गर्नेलाई कारबाहीको दायरामा ल्याउने
            प्रधानमन्त्रीको प्रतिबद्धता
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">Lokendra Phagami</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            {/* <span>{format(data.createdAt)}</span> */}
            <span>1 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            {" "}
            सरकारले गत जेठ १८ मा पूर्वसचिव शारदाप्रसाद त्रितालको संयोजकत्वमा
            त्रिविको जग्गा खोजबिन समिति बनाएको थियो । तर त्रिताल अस्वस्थ भएपछि
            समिति सदस्य महेन्द्रकुमार थापालाई संयोजक बनाइएको थियो । समिति
            सदस्यमा जानकीबल्लभ अधिकारी र प्रेम सागर चापागाईँ थिए । उनीहरुले
            मंगलबार प्रधानमन्त्री निवास बालुवाटारमा छानबिन प्रतिवेदन बुझाएका थिए
            । I am a software engineer
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <IKImage
            urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
            src="https://ik.imagekit.io/uekieknn4/featured4.jpeg"
            alt=""
            width={600}
            className="rounded-2xl"
          />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            ३ पुस, काठमाडौं । प्रधानमन्त्री केपी शर्मा ओलीले त्रिभुवन
            विश्वविद्यालय (त्रिवि)को जग्गा हिनामिना गर्ने जो कोही भए पनि
            कारबाहीको दायरामा ल्याउने बताएका छन् । त्रिविको जग्गा खोजबिन आयोगको
            प्रतिवेदन बुझेको भोलिपल्ट प्रधानमन्त्री ओलीले जग्गा त्रिवि मातहत
            ल्याउने र हिनामिना गर्नेलाई कारबाहीको दायरामा ल्याउने बताएका हुन् ।
          </p>
          <p>
            त्रिविको जग्गा खोजबिन गर्न गठित समितिले मंगलबार प्रधानमन्त्री ओलीलाई
            प्रतिवेदन बुझाएको थियो । मंगलबार ओलीले सामाजिक सन्जाल फेसबुकमा
            लेखेका छन्, ‘खोजबिन आयोगले प्रतिवेदनमा सिफारिस गरेका तथ्यहरूको थप
            अध्ययन गर्दै सरकारले यसलाई कार्यान्वयन गर्ने छ । त्रिभुवन
            विश्वविद्यालयको जग्गा विश्वविद्यालयकै नाममा ल्याइने छ र हिनामिना
            गर्ने जोकोही भए पनि कानुनी कारबाहीको दायरामा आउनेछन् ।’
          </p>
          <p>
            अध्ययन गर्न नभ्याएका र नसकेका क्षेत्रलाई पनि थप अध्ययन गरेर खोजिने
            प्रधानमन्त्री ओलीले भनेका छन् । ‘आयोगबाट सिफारिस भएका विषयलाई तत्काल
            कार्यान्वयन गर्दै खोज्न बाँकी विषयमा थप अध्ययन गरिनेछ । हात हालेपछि
            यसलाई टुंगोमा पुर्याएरै छाडिने छ,’ प्रधानमन्त्री ओलीको प्रतिबद्धता छ
            ।
          </p>
          <p>
            सरकारले गत जेठ १८ मा पूर्वसचिव शारदाप्रसाद त्रितालको संयोजकत्वमा
            त्रिविको जग्गा खोजबिन समिति बनाएको थियो । तर त्रिताल अस्वस्थ भएपछि
            समिति सदस्य महेन्द्रकुमार थापालाई संयोजक बनाइएको थियो । समिति
            सदस्यमा जानकीबल्लभ अधिकारी र प्रेम सागर चापागाईँ थिए । उनीहरुले
            मंगलबार प्रधानमन्त्री निवास बालुवाटारमा छानबिन प्रतिवेदन बुझाएका थिए
            ।
          </p>
          <p>
            सरकारले गत जेठ १८ मा पूर्वसचिव शारदाप्रसाद त्रितालको संयोजकत्वमा
            त्रिविको जग्गा खोजबिन समिति बनाएको थियो । तर त्रिताल अस्वस्थ भएपछि
            समिति सदस्य महेन्द्रकुमार थापालाई संयोजक बनाइएको थियो । समिति
            सदस्यमा जानकीबल्लभ अधिकारी र प्रेम सागर चापागाईँ थिए । उनीहरुले
            मंगलबार प्रधानमन्त्री निवास बालुवाटारमा छानबिन प्रतिवेदन बुझाएका थिए
            ।
          </p>
          <p>
            सरकारले गत जेठ १८ मा पूर्वसचिव शारदाप्रसाद त्रितालको संयोजकत्वमा
            त्रिविको जग्गा खोजबिन समिति बनाएको थियो । तर त्रिताल अस्वस्थ भएपछि
            समिति सदस्य महेन्द्रकुमार थापालाई संयोजक बनाइएको थियो । समिति
            सदस्यमा जानकीबल्लभ अधिकारी र प्रेम सागर चापागाईँ थिए । उनीहरुले
            मंगलबार प्रधानमन्त्री निवास बालुवाटारमा छानबिन प्रतिवेदन बुझाएका थिए
            ।
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <IKImage
                urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
                src="https://ik.imagekit.io/uekieknn4/userImg.jpeg"
                alt=""
                className="w-12 h-12 rounded-full object-cover"
                width={48}
                height={48}
              />
            </div>
            <Link className="text-blue-800">Lokendra Phagami Pun</Link>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor lokendra sit amet consectetur
            </p>
          </div>
          {/* <PostMenuActions post={data} /> */}
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
