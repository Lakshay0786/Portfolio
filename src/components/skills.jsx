import React from "react";
import "./skills.css";
import { Link } from "react-router-dom";

// import { FaCss3Alt, FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiMongodb } from "react-icons/si";

const Skills = () => {
    return (
        <>  <div className="h1">
            <h1 className="skillh1">Skills & Experience.</h1>
        </div>

            <div className='skillbox'>

                <div className='skills'>
                    <ul className="ul-list">
                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                <img
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468176/languages/html-5_aed99c.png"
                                    alt=""
                                />
                            </Link>
                        </li>

                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <FaHtml5 /> */}
                                <img
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468175/languages/css_z5upro.png"
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <IoLogoJavascript /> */}
                                <img
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468178/languages/js_ejooe1.png"
                                    alt=""
                                />
                            </Link>
                        </li>
                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <FaReact /> */}
                                <img
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468182/languages/structure_bvdkl2.png"
                                    alt=""
                                />
                            </Link>
                        </li>


                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <SiMongodb /> */}
                                <img
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660468851/languages/redux-seeklogo.com_sjpa6n.svg"
                                    alt=""
                                />
                            </Link>
                        </li>


                        <li className='skilllist'>
                            <Link to="/" className='skilla'>
                                {/* <SiMongodb /> */}
                                <img
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660469251/languages/git_da6bou.png"
                                    alt=""
                                />
                            </Link>
                        </li>


                    </ul>

                </div>
                <div className="Exp">

                    <p className="skills-p">I bring together form and function to create something that looks good and performs brilliantly.
                    </p>
                    <p className="skills-p">The main area of my expertise are front-end tools like like   <span>HTML, CSS, JavaScript, Tailwind CSS, React.js</span> . Next up I want to deep dive into  TypeScript, Next.js, Three.js & Backend development.</p>

                </div>
            </div>
        </>

    );
};

export default Skills;
