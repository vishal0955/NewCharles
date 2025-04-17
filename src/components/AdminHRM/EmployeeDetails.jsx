import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const EmployeeDetails = () => {
  // const { id } = useParams(); // URL se ID fetch kar rahe hai
  // const numericId = Number(id.replace("EMP", "")); // "EMP001" -> 1

  const employees = {
    1: {
      name: "John Doe",
      role: "Senior Developer",
      email: "john.doe@company.com",
      phone: "+1 (555) 123-4567",
      dob: "15 March 1985",
      gender: "Male",
      nationality: "American",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    2: {
      name: "Jane Smith",
      role: "HR Manager",
      email: "jane.smith@company.com",
      phone: "+1 (555) 987-6543",
      dob: "22 July 1990",
      gender: "Female",
      nationality: "Canadian",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    3: {
      name: "Robert Johnson",
      role: "Finance Analyst",
      email: "robert.johnson@company.com",
      phone: "+1 (555) 246-8135",
      dob: "5 September 1983",
      gender: "Male",
      nationality: "British",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  };

  // const employee = employees[numericId];

  // if (!employee) {
  //   return <p className="text-center text-red-500">Employee Not Found</p>;
  // }

  const darkMode = useSelector((state) => state.theme.isDarkMode);


  return (
    <main className="mx-auto py-6 sm:px-6 lg:px-8">
      <div className="relative">
        {/* Gradient Header */}
       

        {/* White Content */}
        <div className={`${darkMode ? "dark-mode" : null } rounded-b-lg shadow  pb-6  md:px-6`}>
          {/* Profile Info */}
          <img
                className="h-24 w-24 rounded-full border-4 border-white "
                src="https://via.placeholder.com/96"
                alt="Profile"
              />
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div>
            
              <h1 className="text-2xl font-bold  flex items-center gap-2">
                Stephen Peralt
                <i className="fas fa-check-circle text-[#1a202c]"></i>
              </h1>
              <div className="mt-1 flex items-center gap-2">
                <span className="">Software Developer</span>
                <span className="text-sm  bg-[#1a202c]/10 px-2 py-0.5 rounded">
                  10+ years of Experience
                </span>
              </div>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button className="rounded bg-gray-900 text-white px-4 py-2 flex items-center gap-2">
                <i className="fas fa-edit"></i>
                Edit Info
              </button>
              <button className="rounded bg-[#1a202c] text-white px-4 py-2 flex items-center gap-2">
                <i className="fas fa-comment"></i>
                Message
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mt-6">
            {/* Sidebar Card */}
            <div className="md:col-span-1">
              <div className= {`${darkMode ? "dark-mode" : null } rounded-lg border border-gray-200 p-2 space-y-8`}>
                {/* Basic Information */}
                <div>
                  <h3 className="font-medium ">
                    Basic Information
                  </h3>
                  <dl className="mt-4 space-y-4">
                    <div className="flex justify-between">
                      <dt className="">Client ID</dt>
                      <dd className="">CLT-0024</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="">Team</dt>
                      <dd className="">UI/UX Design</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="">Join Date</dt>
                      <dd className="">1st Jan 2023</dd>
                    </div>
                    <div className="flex justify-between items-center">
                      <dt className="">Reports to</dt>
                      <dd className="flex items-center gap-2">
                        <img
                          className="h-6 w-6 rounded-full"
                          src="https://via.placeholder.com/24"
                          alt="Manager"
                        />
                        <span className="">Douglas Martini</span>
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="font-medium ">
                    Contact Information
                  </h3>
                  <dl className="mt-4 space-y-4">
                    <div className="flex justify-between">
                      <dt className="">Phone</dt>
                      <dd className="">(163) 2459 315</dd>
                    </div>
                    <div className="flex justify-between items-center">
                      <dt className="">Email</dt>
                      <dd className="flex items-center gap-2">
                        <a
                          href="mailto:peralt12@example.com"
                          className=""
                        >
                          peralt12@example.com
                        </a>
                       
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="">Address</dt>
                      <dd className=" text-right">
                         1861 Bayonne Ave,
                        <br />
                        Manchester, NJ, 08759<br/>
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Personal Information */}
                <div>
                  <h3 className="font-medium ">
                    Personal Information
                  </h3>
                  <dl className="mt-4 space-y-4">
                    <div className="flex justify-between">
                      <dt className="">Birthday</dt>
                      <dd className="">24th July 2000</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="">Nationality</dt>
                      <dd className="">Indian</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="">Religion</dt>
                      <dd className="">Christianity</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="">Marital Status</dt>
                      <dd className="">Married</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Main Content Cards */}
            <div className="md:col-span-3 space-y-6">
              {/* About Employee */}
              <div className=" rounded-lg border border-gray-200">
                <div className="p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium ">
                      About Employee
                    </h3>
                    <button className=" hover:text-gray-500">
                      <i className="fas fa-pen"></i>
                    </button>
                  </div>
                  <p className="mt-4">
                    As an award winning designer, I deliver exceptional quality
                    work and bring value to your brand! With 10 years of
                    experience and 350+ projects completed worldwide with
                    satisfied customers, I developed the 360° brand approach,
                    which helped me to create numerous brands that are relevant,
                    meaningful and loved.
                  </p>
                </div>
              </div>

              {/* Education & Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education */}
                <div className=" rounded-lg border border-gray-200">
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium ">
                        Education Details
                      </h3>
                      <i className="fas fa-chevron-down "></i>
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 bg-blue-100 rounded flex items-center justify-center">
                          <i className="fas fa-graduation-cap text-blue-600"></i>
                        </div>
                        <div>
                          <h4 className="font-medium ">
                            Master in Computer Science
                          </h4>
                          <p className="text-sm ">
                            Stanford University • 2018 - 2020
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="h-12 w-12 bg-green-100 rounded flex items-center justify-center">
                          <i className="fas fa-university text-green-600"></i>
                        </div>
                        <div>
                          <h4 className="font-medium ">
                            Bachelor in Software Engineering
                          </h4>
                          <p className="text-sm ">
                            MIT • 2014 - 2018
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className=" rounded-lg border border-gray-200">
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium ">Experience</h3>
                      <i className="fas fa-chevron-down "></i>
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 bg-purple-100 rounded flex items-center justify-center">
                          <i className="fas fa-briefcase text-purple-600"></i>
                        </div>
                        <div>
                          <h4 className="font-medium ">
                            Senior Software Developer
                          </h4>
                          <p className="text-sm ">
                            Google • 2020 - Present
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="h-12 w-12 bg-yellow-100 rounded flex items-center justify-center">
                          <i className="fas fa-laptop-code text-yellow-600"></i>
                        </div>
                        <div>
                          <h4 className="font-medium ">
                            Software Developer
                          </h4>
                          <p className="text-sm ">
                            Microsoft • 2018 - 2020
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div className=" rounded-lg border border-gray-200">
                <div className="border-b border-gray-200">
                  <nav className="flex -mb-px">
                    <button className="px-6 py-4  font-medium border-b-2 border-[#1a202c]">
                      Projects
                    </button>
                    <button className="px-6 py-4  font-medium">
                      Assets
                    </button>
                  </nav>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Project 1 */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
                          <i className="fas fa-hospital text-blue-600 text-xl"></i>
                        </div>
                        <div>
                          <h4 className="font-medium ">
                            World Health
                          </h4>
                          <p className="text-sm ">
                            8 tasks • 15 Completed
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 flex justify-between items-center">
                        <div>
                          <p className="text-sm ">Deadline</p>
                          <p className="font-medium ">
                            31 July 2025
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://via.placeholder.com/32"
                            alt="Project Lead"
                          />
                          <div>
                            <p className="text-sm ">
                              Project Lead
                            </p>
                            <p className="font-medium ">Leona</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project 2 */}
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
                          <i className="fas fa-hospital-user text-purple-600 text-xl"></i>
                        </div>
                        <div>
                          <h4 className="font-medium ">
                            Hospital Administration
                          </h4>
                          <p className="text-sm ">
                            8 tasks • 15 Completed
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 flex justify-between items-center">
                        <div>
                          <p className="text-sm ">Deadline</p>
                          <p className="font-medium ">
                            31 July 2025
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://via.placeholder.com/32"
                            alt="Project Lead"
                          />
                          <div>
                            <p className="text-sm ">
                              Project Lead
                            </p>
                            <p className="font-medium ">Leona</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content Grid End */}
        </div>
      </div>
    </main>
  );
};

export default EmployeeDetails;
