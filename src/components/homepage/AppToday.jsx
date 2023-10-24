import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormError, SendIcon, SendingIcon } from "../common/Icon";
const AppToday = () => {
  const [submitVal, setSubmitVal] = useState("Submit Now");
  const form = useRef();
  const [resistration, setresistration] = useState({
    name: "",
    email: "",
    Revenue: "",
    url: "",
    last: "",
    textarea: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const email = e.target.email;
    const value = e.target.value;
    const last = e.target.last;
    const textarea = e.target.textarea;
    setresistration({ ...resistration, [name]: value });
  };
  const [error, setError] = useState(false);
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const FormSubmit = (e) => {
    e.preventDefault();
    if (
      (resistration.name.trim() !== "",
      resistration.email.trim() !== "",
      resistration.url.trim() !== "",
      resistration.last.trim() !== "",
      resistration.Revenue.trim() !== "",
      regex.test(resistration.email))
    ) {
      setError(false);
      setSubmitVal("Sending");
      emailjs
        .sendForm(
          "service_rhvi6ne",
          "template_db3q008",
          form.current,
          "VdFIJa-Q4kIcZzKM7"
        )
        .then(() => {
          setSubmitVal("Sent");
          setresistration({
            name: "",
            email: "",
            Revenue: "",
            url: "",
            last: "",
            textarea: "",
          });
        });
      setTimeout(() => {
        setSubmitVal("Submit Now");
      }, 2000);
    } else {
      setError(true);
    }
  };
  return (
    <div className="container mx-auto py-24 ">
      <div className="lg:flex items-center">
        <div className=" flex justify-center">
          <div className="lg:max-w-[766px] sm:mb-0 mb-12 max-w-[506px] bg-[#dd3b5c] xl:pt-16 pt-[26px] lg:pb-7 pb-10 xl:pe-[82px] px-6  xl:ps-[50px] lg:rounded-l-[30px] lg:rounded-r-[0px] sm:rounded-t-[30px] sm:rounded-none rounded-[30px]">
            <h3 className="text-white lg:text-start text-center font-Manrope font-medium sm:text-lg text-md">
              Sell your app today
            </h3>
            <p className="opacity-70 lg:text-start text-center text-white font-Inter text-sm font-normal mt-4">
              If you have a non-gaming ios app with 5000+ monthly downloads and
              it's been on the App Store for more than a year, we're interested
              in buying it!
            </p>
            <div className="flex justify-center lg:justify-start">
              <div className="max-w-[386px] rounded-xl py-3 md:py-5 px-3 lg:px-10 bg-white mt-10  mb-3 lg:mb-0  border border-[#DEDCEB]">
                <p className="about_text text-sm text-center lg:text-start md:text-xmd capitalize font-medium font-Manrope">
                  We guarantee to give you an offer within 48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#4f44ec] flex items-center lg:h-[450px] w-full rounded-3xl">
          <form
            ref={form}
            onSubmit={FormSubmit}
            className="w-full bg-card border border-[#C0ACE8] py-10 px-6"
          >
            <div className="md:flex gap-6 mb-6">
              <div className="w-full relative">
                <input
                  className=" px-2 w-full outline-none text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[7px] pb-[7px] rounded-lg border-[1.4px] border-[rgba(39, 39, 39, 0.08)] h-[44px]"
                  type="text"
                  placeholder="Your Name"
                  value={resistration.name}
                  onChange={handleInput}
                  id="name"
                  name="name"
                />
                {error && resistration.name === "" ? (
                  <p className="text-[#000] opacity-90 text-[12px] font-Inter font-normal flex items-start mt-1 absolute">
                    <FormError /> This field is required
                  </p>
                ) : (
                  resistration !== ""
                )}
              </div>
              <div className="w-full relative">
                <input
                  className=" px-2 w-full outline-none text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[7px] pb-[7px] rounded-lg border-[1.4px] border-[rgba(39, 39, 39, 0.08) md:mt-0 mt-6 h-[44px]"
                  type="text"
                  placeholder="Your Email"
                  value={resistration.email}
                  onChange={handleInput}
                  id="Email"
                  name="email"
                />
                {error && resistration.email === "" ? (
                  <p className="text-[#000] opacity-90 text-[12px] font-Inter font-normal flex items-start mt-1 pointer-events-none h-[18px] absolute">
                    <FormError /> This field is required
                  </p>
                ) : error && regex.test(resistration.email) === false ? (
                  <p className="text-[#000] opacity-90 text-[12px] font-Inter font-normal flex items-start mt-1 pointer-events-none h-[18px] absolute">
                    <FormError /> This field is required
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="md:flex gap-6 mb-6 flex-col sm:flex-row">
              <div className="w-full relative">
                <input
                  className=" px-2 w-full outline-none text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[7px] pb-[7px] rounded-lg border-[1.4px] border-[rgba(39, 39, 39, 0.08) h-[44px]"
                  type="text"
                  placeholder="Revenue Last Month"
                  value={resistration.Revenue}
                  onChange={handleInput}
                  id="Revenue"
                  name="Revenue"
                />
                {error && resistration.Revenue === "" ? (
                  <p className="text-[#000] opacity-90 text-[12px] font-Inter font-normal flex items-start mt-1 pointer-events-none h-[18px] absolute">
                    <FormError /> This field is required
                  </p>
                ) : (
                  resistration !== ""
                )}
              </div>
              <div className="w-full">
                <input
                  className=" px-2 w-full outline-none text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[7px] pb-[7px] rounded-lg border-[1.4px] border-[rgba(39, 39, 39, 0.08) md:mt-0 mt-6 h-[44px]"
                  type="text"
                  placeholder="Download Last Month"
                  value={resistration.last}
                  onChange={handleInput}
                  id="last"
                  name="last"
                />
              </div>
            </div>
            <div className="w-full relative">
              <input
                className=" px-2 w-full outline-none  mb-6 text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[7px] pb-[7px] h-[44px] rounded-lg border-[1.4px] border-[rgba(39, 39, 39, 0.08)"
                type="text"
                placeholder="App URL..."
                value={resistration.url}
                onChange={handleInput}
                id="url"
                name="url"
              />
              {error && resistration.url === "" ? (
                <p className="text-[#000] opacity-90 text-[12px] font-Inter font-normal flex items-start mt-1 h-[18px] pointer-events-none absolute">
                  <FormError /> This field is required
                </p>
              ) : (
                resistration !== ""
              )}
            </div>
            <textarea
              className=" px-2 w-full outline-none resize-none h-[74px] text-[15px] lg:text-sm font-normal opacity-90 text-light-grey font-Inter bg-white leading-[174%] ps-[10px] pt-[9px] pb-[8px] rounded-lg border-[1.4px] border-[rgba(39, 39, 39, 0.08)"
              type="text"
              placeholder="Anything else you’d like us to know..."
              value={resistration.textarea}
              onChange={handleInput}
              id="textarea"
              name="textarea"
            />

            <div className="flex justify-center mt-11 ">
              <button
                className={`mb-1 text-white text-xsm md:text-sm font-bold font-Manrope leading-[170%] px-8 md:px-10 py-3 md:py-4  hover:to-red-500 hover:from-indigo-600 rounded-[38px] transition-all ease-linear duration-300 opacity-100 cursor-pointer w-[183px] flex items-center justify-center max-w-[183px] ${
                  submitVal === "Sent" || submitVal === "Sending"
                    ? "bg-[#0B9716]"
                    : "bg-gradient-to-r from-red-500 to-indigo-600"
                }`}
              >
                {submitVal}
                {submitVal === "Sending" ? <SendingIcon /> : ""}
                {submitVal === "Sent" ? <SendIcon /> : ""}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppToday;
