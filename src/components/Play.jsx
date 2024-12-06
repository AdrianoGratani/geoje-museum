// a tailwind css full page playground to practice.

import React from "react";
import ia from "../assets/images/hero/ia.jpg"; // asset images. BUNDLED AS STATIC RESOURCES.
import ib from "../assets/images/hero/ib.jpg";
import ic from "../assets/images/hero/ic.jpg";
import id from "../assets/images/hero/id.jpg";
import ie from "../assets/images/hero/ie.jpg";

function Play() {
  return (
    //  if you add m to outer container, it OVERFLOWS. avoid it. assign margins to inner container instead
    <div className="m w-full h-full  ">
      <div className="mx-10 my-5 flex flex-col gap-y-6">
        <header className="flex flex-row justify-between">
          <nav>
            <ul className="flex flex-row">
              <li className="mx-3 ">
                <a href="#">거제시</a>
              </li>
              <li className="mx-3">
                <a href="#">문화</a>
              </li>
              <li className="mx-3">
                <a href="#">정보</a>
              </li>
              <li className="mx-3">
                <a href="#">탐색</a>
              </li>
            </ul>
          </nav>
          <h1 className="">거제 전통 회화 박물관</h1>
          <nav>
            <ul className="flex flex-row">
              <li className="mx-3">
                <a href="#">고객 본호: (02-5220-XXXX)</a>
              </li>
              <li className="mx-3">
                <a href="#">자손</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* hero */}
        <section className="l  text-7xl w-full flex flex-col">
          <p className=" text-center">
            거제의 <span className="mb">아름다운</span> 그림 
          </p>

                                                                                                    {/* container to center the image */}
          <div className="my-4 flex flex-row justify-center">
                                                                                                    {/* container to resize-cut the image */}
            <div className="w-96 h-96 overflow-hidden ">
              <img
                className="object-cover w-full h-full rounded-full "
                src={ie}
                alt="image"
              />
            </div>
          </div>
          <p className="text-center">탐방을 <span className="mb">시작해</span> 보세요.</p>
        </section>
      </div>
    </div>
  );
}

export default Play;
