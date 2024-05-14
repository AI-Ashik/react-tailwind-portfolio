/* eslint-disable react/no-unescaped-entities */
// import FacebookIcon from "/public/icons/facebook.png";
// import InstagramIcon from "/public/icons/instagram.png";
// import TwitterIcon from "/public/icons/twitter.png";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 gap-4 py-24 ">
      <div>
        <h5 className="text-xl font-bold text-white my-2 ">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis
          nisi molestias sint expedita ipsum quas tenetur odit. Minima voluptas
          asperiores quidem reiciendis sequi.
        </p>
        {/* <div
          className="socials flex flex-row
         gap-2"
        >
          <Link href="facebook.com">
            <Image
              src={FacebookIcon}
              alt="Facebook icon"
              height={32}
              width={32}
            />
          </Link>
          <Link href="instagram.com">
            <Image
              src={InstagramIcon}
              alt="Instagram icon"
              height={32}
              width={32}
            />
          </Link>

          <Link href="twitter.com">
            <Image
              src={TwitterIcon}
              alt="Twitter icon"
              height={32}
              width={32}
            />
          </Link>
        </div> */}
      </div>
      <div>
        <form className="flex flex-col gap-4" action="">
          <div>
            <label htmlFor="email" className="text-white text-sm font-medium">
              Your E-Mail :{" "}
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="example@example.com"
              className="bg-[#18191e] border border-[#33353f] text-gray-100 placeholder-[#9CA2A9] text-sm rounded-lg w-full p-2.5"
            />
          </div>

          <div>
            <label htmlFor="subject" className="text-white text-sm font-medium">
              Your Subject :{" "}
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Your Subject"
              className="bg-[#18191e] border border-[#33353f] text-gray-100 placeholder-[#9CA2A9] text-sm rounded-lg w-full p-2.5"
            />
          </div>

          <div>
            <label htmlFor="subject" className="text-white text-sm font-medium">
              Your Message :{" "}
            </label>
            <textarea
              name="message"
              id="subject"
              required
              placeholder="Your Message"
              rows={8}
              cols={8}
              className="bg-[#18191e] border border-[#33353f] text-gray-100 placeholder-[#9CA2A9] text-sm rounded-lg w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
