import CustomMap from "@/components/custom-map";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative flex items-center justify-center min-h-screen">
        <CustomMap />
      </section>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "75vh" }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(
              "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
            )`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Your ultimate destination for flexible and secure online hotel
                  bookings.
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  For those planning longer stays or traditional vacations,
                  Rooms24 continues to excel in daily bookings. Immerse yourself
                  in a visually stunning and user-friendly interface as you
                  explore a myriad of options for a single night or an extended
                  period.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: " 70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold">24 Hours Service</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Service or support system is accessible and operational
                    around the clock, 24 hours a day, seven days a week.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Free to Use</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Service or product that is offered without requiring
                    payment.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Verified Hotels</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Ensure the accuracy and reliability of the information they
                    provide to users.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <i className="fas fa-user-friends text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Our commitment to enhancing your overall travel experience.
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Our commitment to enhancing your overall travel experience is
                reflected in our user-friendly platform, transparent pricing,
                24/7 customer support, and additional services aimed at
                providing convenience and flexibility throughout your journey.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                We are dedicated to elevating your travel experience by offering
                a user-friendly interface, transparent pricing, and
                round-the-clock customer support, ensuring a seamless and
                enjoyable journey from booking to stay.
              </p>
              <a href="Javascripr:;" className="font-bold text-gray-800 mt-8">
                Umesh Thapa{" "}
              </a>{" "}
              -Rooms24
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/19407078/pexels-photo-19407078/free-photo-of-a-patio-and-facade-of-a-building-illuminated-in-the-evening.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="..."
                  width={1260}
                  height={750}
                  layout="responsive"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{ height: "95px", top: "-94px" }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold">Top Notch Services</h4>
                  <p className="text-md font-light mt-2">
                    A diverse range of accommodations worldwide, combining
                    competitive prices with user-friendly interfaces for a
                    seamless travel experience.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.pexels.com/photos/3184603/pexels-photo-3184603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Seamless journey for both hotels and users
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Our commitment to a seamless journey for both hotels and users
                  is evident in our user-friendly interface, transparent
                  communication, and efficient processes, ensuring a
                  straightforward and enjoyable experience from booking to stay
                  for travelers and streamlined operations for our hotel
                  partners.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Verified Hotels</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Amazing Experience</h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">Dynamic Locations</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Here are our heroes</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600">
                Our team is a dynamic and dedicated group of professionals,
                united by a shared passion for delivering excellence. Comprising
                individuals with diverse backgrounds and expertise, we
                collaborate seamlessly to achieve our common goal.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="Rajkumar Tamang"
                  src="../../../assets/images/team/rajkumar.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Rajkumar Tamang</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Chief Executive Officer(CEO)
                  </p>
                  <div className="mt-6">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/rajkumar.tamang.359"
                      className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>

                    <a
                      target="_blank"
                      href="https://www.facebook.com/rajkumar.tamang.359"
                      className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="Raj Thapaliya"
                  src="../../../assets/images/team/raj.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Raj Thapaliya</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Business Analyst
                  </p>
                  <div className="mt-6">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/lu.sang.7140"
                      className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/lusang6298"
                      className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="Rajiv Thapaliya"
                  src="../../../assets/images/team/rajiv.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Rajiv Thapaliya</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Chief Financial Officer
                  </p>
                  <div className="mt-6">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/rajiv.mangolianheart"
                      className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/rajivthapaliya/"
                      className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="Rajiv Thapaliya"
                  src="../../../assets/images/team/bishow.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Bishow Poudyal</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Marketing Manager
                  </p>
                  <div className="mt-6">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100009351646426"
                      className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>

                    <a
                      target="_blank"
                      href="https://www.instagram.com/bishwopoudel479/"
                      className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="../../../assets/images/team/b.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Bijen Shrestha</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Fullstack Developer
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://www.facebook.com/bijen.shrestha.3"
                      className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/0_0bijen/"
                      className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="../../../assets/images/team/sid.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Siddartha Thapa</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Fullstack Developer
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://www.instagram.com/siddhartha.thapa77/"
                      className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="../../../assets/images/team/prabesh.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Prabesh Yadav</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Backend Developer
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://www.facebook.com/prabesh.yadav.10004"
                      className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/prabesh_yadav087/"
                      className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="Lalita Sapkota"
                  src="../../../assets/images/team/lalita.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Lalita Sapkota</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    UI/UX Designer
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://www.facebook.com/lalita.sapkota.37"
                      className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/lalitasapkota_/"
                      className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="Aayusha Ghimire"
                  src="../../../assets/images/team/aaisha.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Aayusha Ghimire</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Web Designer
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://www.facebook.com/aayusha.ghimire.31"
                      className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/aayushaghimire562019/"
                      className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="Aashish Nepal"
                  src="../../../assets/images/team/aashish.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Aashish Nepal</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Flutter Developer
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://www.facebook.com/aashish.nepal1"
                      className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/__aashish008__/"
                      className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="Umesh Thapa"
                  src="https://pbs.twimg.com/profile_images/1572047922593951745/3OgzmiTq_400x400.jpg"
                  className="shadow-lg rounded-full max-w-full mx-auto"
                  style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Umesh Thapa</h5>
                  <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                    Developer
                  </p>
                  <div className="mt-6">
                    <a
                      href="http://www.twitter.com/ewumesh"
                      className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>

                    <a
                      href="http://www.facebook.com/ewumesh"
                      className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                      href="http://www.instagram.com/ewumesh"
                      className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-300">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Download Apps
            </h1>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-1 mr-3 text-base font-medium text-center"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              title="Play Store"
              target="_blank"
              href="https://play.google.com/"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg "
            >
              <img
                className="mt-2"
                alt="Play Store"
                style={{ height: "50px" }}
                src="../../../assets/images/playstore.png"
              />
            </a>

            <a
              title="App Store"
              target="_blank"
              href="https://www.apple.com/app-store/"
              className="inline-flex items-center justify-center px-5 py-3 mx-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg "
            >
              <img
                alt="App Store"
                style={{ height: "50px" }}
                src="../../../assets/images/appstore.png"
              />
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <section className="pb-20 relative block bg-gray-900">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                Build something
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                Building a high-performing tech team involves defining clear
                goals, recruiting talent strategically, cultivating a
                collaborative culture, providing effective leadership, investing
                in professional development, embracing agile methodologies,
                staying abreast of technology trends, creating a positive work
                environment, implementing performance measurement and feedback
                systems, and fostering a culture of continuous improvement.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Excelent Services
              </h6>
              <p className="mt-2 mb-4 text-gray-500">
                Providing excellent services entails consistently exceeding
                customer expectations through quality delivery, effective
                communication, professionalism, innovation, and a commitment to
                continuous improvement.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-poll text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Grow your market
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                Growing your market involves implementing strategic initiatives
                to expand your customer base, increase brand awareness, and
                enhance market share. This process often includes identifying
                new target audiences, developing innovative marketing campaigns,
                optimizing product offerings, and establishing partnerships to
                reach untapped markets.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">Explore</h5>
              <p className="mt-2 mb-4 text-gray-500">
                Exploring ideas is a dynamic process of brainstorming and
                innovation, involving open communication and diverse
                perspectives to uncover creative solutions and possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative block py-24 lg:pt-0 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">
                    Want to work with us?
                  </h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Full Name"
                      style={{ transition: "all 0.15s ease 0s" }}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Email"
                      style={{ transition: "all 0.15s ease 0s" }}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      cols={80}
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                    ></textarea>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all 0.15s ease 0s" }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
