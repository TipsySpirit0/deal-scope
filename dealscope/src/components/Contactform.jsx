export default function ContactForm(){
    const {state: formcarryState, submit: formcarrySubmit} = useForm({
        id: 'Your-Form-ID-From-Formcarry'
      });
    
      if (formcarryState.submitted) {
        return <div>Thank you! We received your submission.</div>;
      }
        return(
        <div className="md:max-w-[50%] w-full p-10 flex items-center justify-center">
          <form
            onSubmit={onSubmit}
            className=" bg-white p-5 flex flex-col self-center rounded-md w-full max-w-[500px] shadow-md border border-gray-200 space-y-4"
          >
            <h2 className="font-roboto text-lg mb-2">Contact Us</h2>
            <div>
              <label className="float-left mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mt-4">
              <label className="float-left mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mt-4">
              <label className="float-left mb-2 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-3 py-1 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
    );
}