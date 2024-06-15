import React from "react";
import { socials } from "../../data";

function Contact() {
  return (
    <section className=" text-white py-12 border-x-2 border-white ">
      <div className=" container mx-auto px-4 grid gap-8 lg:grid-cols-2 ">
        <div>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
            Contact Me
          </h1>
          <p className="mb-8 text-lg ">
            For further assistance or inquiries, please feel free to send me an
            email using the adjacent form or connect with me on LinkedIn through
            the link provided.
          </p>

          <div className=" text-lg font-bold">Find me on:</div>
          <div className=" mb-8 ">
            <ul className="flex gap-6">
              {socials.map((item, index) => (
                <li key={index}>
                  <a
                    target="_blank"
                    href={item.link}
                    rel="noopener noreferrer"
                    className="py-2 flex flex-col md:flex-row gap-2 items-center justify-center"
                  >
                    {item.name}
                    <img
                      src={item.icon}
                      alt={item.alt}
                      width="25px"
                      height="25px"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <form
            action="https://public.herotofu.com/v1/417d8c50-29ae-11ef-baa4-2f3d60870fc4"
            method="post"
            accept-charset="UTF-8"
          >
            <div className="w-full mb-4">
              <label
                className="form-label inline-block mb-2 text-gray-300"
                for="name"
              >
                Your Name
              </label>
              <input
                className="text-black block w-full px-3 py-2 border-black border-2 rounded-xl"
                name="Name"
                id="name"
                type="text"
                required
              />
            </div>
            <div className="w-full mb-4">
              <label
                className="form-label inline-block mb-2 text-gray-300"
                for="name"
              >
                Your Email
              </label>
              <input
                className="text-black block w-full px-3 py-2 border-black border-2 rounded-xl"
                name="Email"
                id="email"
                type="email"
                required
              />
            </div>
            <div className="w-full mb-4">
              <label
                className="form-label inline-block mb-2 text-gray-300"
                for="message"
              >
                Message
              </label>
              <textarea
                name="messenge"
                id="messenge"
                cols="30"
                rows="10"
                className="
              block w-full px-3 py-2 border-black border-2 rounded-xl text-black"
              >
                {" "}
              </textarea>
            </div>
            <div>
              <input
                type="submit"
                value="Send it!"
                className="px-6 py-4 rounded-md bg-#1D562D hover:bg-#00AB30"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
