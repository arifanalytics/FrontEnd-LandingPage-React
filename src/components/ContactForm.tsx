import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { FormEvent, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_omfuuui", "template_gbffefr", form.current, {
        publicKey: "lbmw4eP8dbnYrqso8",
      })
      .then(
        (response: EmailJSResponseStatus) => {
          toast.success("Message sent!");
          form.current?.reset();
        },
        (error: Error) => {
          toast.error("Something went wrong, please try again later!");
        }
      );
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="mx-auto mt-16 px-8 md:px-40 pt-16 pb-16">
        <form ref={form} onSubmit={sendEmail} className="mx-auto">
          <div className="mx-auto md:grid md:grid-cols-2 gap-4 mb-2">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                First Name
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="firstname"
                placeholder="First Name"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Last Name
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                name="lastname"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mx-auto md:grid md:grid-cols-2 gap-4 mb-2">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Company
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                name="company"
                placeholder="Company"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Email
              </label>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="mx-auto mb-2">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Organization
              </label>
              <textarea
                rows={3}
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                name="organization"
                placeholder="Tell us a little about your organization and needs"
                required
              ></textarea>
            </div>
          </div>
          <div className="mx-auto mb-2">
            <div className="mx-auto text-center mb-5">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
