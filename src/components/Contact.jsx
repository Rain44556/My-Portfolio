import { MdAttachEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSendMessage = async (e) => {
    e.preventDefault();

    const form = e.target;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      userName: userName,
      userEmail: userEmail,
      subject: subject,
      message: message,
    };

    try{
    const res = await emailjs.send(serviceID, templateID, templateParams, publicID);
    form.reset();
    alert("Message sent successfully!");
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }

  }

  return (
    <div id="contact" className="bg-[#2a3729] text-[#F2F1DB] py-10 px-6 my-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#D1F26D]">Get in Touch</h2>
        <p className="text-[#D1F26D] mb-8">
          Feel free to reach out to me for any opportunities or queries. I'm
          always excited to connect and collaborate!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div className="text-center lg:text-left flex flex-col justify-center items-center gap-6">
          <Link
            to="bristy44556@gmail.com"
            className="flex gap-2 items-center bg-gray-800 px-6 py-6 w-2/3 rounded-lg shadow-md hover:bg-lime-600 transition duration-300"
          >
            <span>
              <MdAttachEmail size={24} />
            </span>
            <span>bristy44556@gmail.com</span>
          </Link>

          <Link
            to="tel:+1787621395"
            className="flex gap-2 items-center bg-gray-800  px-6 py-6 w-2/3 rounded-lg shadow-md hover:bg-lime-600 transition duration-300"
          >
            <FaPhoneVolume size={24} />
            <span>01787621395</span>
          </Link>

          <Link
            to="https://wa.me/01787621395"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center bg-gray-800 p-4  px-6 py-6 w-2/3 rounded-lg shadow-md hover:bg-lime-600 transition duration-300"
          >
            <IoLogoWhatsapp size={24} />
            <span>Chat on WhatsApp</span>
          </Link>
        </div>

        <div className="card w-full max-w-xl px-3 mx-auto shrink-0 shadow-2xl py-10">
          <form onSubmit={handleSendMessage} className="card-body">
            <div className="form-control">
              <input
                name="userName"
                type="text"
                placeholder="Name"
                className="input bg-gray-800 px-6 py-6 input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="userEmail"
                type="email"
                placeholder="Email"
                className="input bg-gray-800 px-6 py-6 input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                name="subject"
                type="subject"
                placeholder="Subject"
                className="input bg-gray-800 px-6 py-6 input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <textarea
                name="message"
                className="textarea bg-gray-800 text-lg px-6 mt-2 h-[130px]"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#D1F26D] border-none text-[#3B4D3A] hover:bg-lime-600 hover:text-white">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
