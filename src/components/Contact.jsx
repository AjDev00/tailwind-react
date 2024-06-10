export default function Contact() {
  return (
    <div>
      <div name="Contact Me">
        <div className="pb-4">
          <h4 className="font-vibes text-4xl p-4 font-bold md:text-right md:pt-20 md:mr-10">
            Contact Me
          </h4>
          <div className="flex flex-col px-5 pt-3 md:items-center">
            <form>
              <label className="font-bold font-kurale">First Name *</label>
              <div className="pt-2 pb-6">
                <input
                  type="text"
                  className="border border-black font-kurale p-3 w-80 rounded-md outline-orange-300 md:w-96"
                />
              </div>
              <label className="font-bold font-kurale">Last Name *</label>
              <div className="pt-2 pb-6">
                <input
                  type="text"
                  className="border border-black font-kurale p-3 w-80 rounded-md outline-orange-300 md:w-96"
                />
              </div>
              <label className="font-bold font-kurale">Email Address *</label>
              <div className="pt-2 pb-6">
                <input
                  type="text"
                  className="border border-black font-kurale p-3 w-80 rounded-md outline-orange-300 md:w-96"
                />
              </div>
              <label className="font-bold font-kurale">Message *</label>
              <div className="pt-2 pb-6">
                <textarea
                  type="text"
                  className="border border-black font-kurale p-3 w-80 h-52 rounded-md outline-orange-300 md:w-96"
                />
              </div>
              <div className="flex flex-row justify-center items-center">
                <button className="p-2.5 font-kurale text-white bg-gradient-to-r from-orange-300 to-orange-500 rounded-lg">
                  Let's Connect
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
