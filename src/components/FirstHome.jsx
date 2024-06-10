import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

export default function FirstHome() {
  return (
    <div>
      <div className="animate-trans-left pt-28 p-2 md:ml-16 md:pt-32">
        <div className="font-bold font-vibes text-4xl md:pt-60">
          I am a Full Stack Developer
        </div>
        <div className="mt-5">
          <p
            style={{
              fontSize: "20px",
            }}
            className="pt-4 font-kurale "
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error
            corrupti nihil est impedit sint tempore eligendi velit eveniet at
            iure ratione maxime, unde dolorum rem maiores laboriosam quis,
            consectetur sed?
            <span
              style={{
                fontSize: "20px",
              }}
              className="hidden md:flex flex-col"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus asperiores corporis expedita ipsum quisquam eligendi
              porro temporibus alias laboriosam accusamus provident, autem quas!
              Officiis modi quibusdam ipsum quam illo obcaecati. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur
              explicabo architecto omnis quis quas, rerum voluptates ipsam
              asperiores voluptatum quod ad! Consectetur molestiae porro quos
              nobis libero sit excepturi.
            </span>
          </p>
        </div>
        <div className="mt-12 ml-5">
          <div className="">
            <Link
              to="Portfolios"
              smooth
              duration={500}
              className="group flex flex-row p-4 gap-2 w-36 bg-gradient-to-r from-orange-300 to-orange-500 rounded shadow-md shadow-gray-1000 cursor-pointer"
            >
              <p className="mr-1 font-kurale">Portfolio</p>
              <FaArrowRight
                size={15}
                className="mt-2.5 group-hover:rotate-90 duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
