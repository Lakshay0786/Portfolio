import React from "react";
import "./skills.css";
import { Link } from "react-router-dom";

// import { FaCss3Alt, FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiMongodb } from "react-icons/si";

const Skills = () => {
    return (
        <>
            <h1 className="skillh1">Skills & Experience.</h1>
            <div className='skillbox'>

                <div className='skills'>
                    <ul>
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
                                <img className="next"
                                    src="https://res.cloudinary.com/drsm0ncyx/image/upload/v1660469022/languages/next-js-seeklogo.com_xzp1dj.svg"
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
                        <li className="para">
                        </li>

                    </ul>

                </div>
                <div className="Exp">

                    <p>I bring together form and function to create something that looks good and performs brilliantly.
                    </p>
                    <p>IoLogoJavascript sadnsakd sakjkasncasc jasbjabsj jbasjbjasb jscjabsjbsac jbjansj jsasac</p>

                    <p>IoLogoJavascript sadnsakd sakjkasncasc jasbjabsj jbasjbjasb jscjabsjbsac jbjansj jsasac</p>

                    <p>IoLogoJavascript sadnsakd sakjkasncasc jasbjabsj jbasjbjasb jscjabsjsadasd sdsad asdsabsac jbjansj jsasac</p>

                    <p>IoLogoJavascript sadnassd sakd sakjkasncasc jasbjabsj sddd asdasdas jbasjbjasb jscjabsjbsac jbjansj jsasac</p>
                </div>
            </div>
        </>

    );
};

export default Skills;
