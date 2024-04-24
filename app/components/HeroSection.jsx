import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I am A.I Ashik
          </h1>
          <p className="text-[#ABD7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            repudiandae iusto ex quas est voluptatem, et tenetur facilis nisi
            inventore commodi.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/hero img.jpg"
              alt="hero image"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
