'use client';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "postcss";
import CardSlider from "./CardSlider";

const TextSlider = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* Text Container */}
              <div className="text-container mb-4">
                <h1 className="fw-bold">
                  최고의 실력을 가진 <br />
                  외국인 인재를 찾고 계신가요?
                </h1>
                <h3 className="mt-3 text-secondary">
                  법률 및 인사관리 부담없이 <br />
                  1주일 이내에 원격으로 채용해보세요.
                </h3>
                <h6 className="mt-4 text-primary">개발자가 필요하신가요?</h6>
              </div>

              {/* Cards Section */}
              <div className="row gy-3">
                <div className="col-12 col-md-4">
                  <div className="cardd p-3 text-left shadow-smm h-100">
                    <hr />
                    <h2 className="fs-4">평균 월 120만원</h2>
                    <h4 className="fs-6 text-muted">
                      임금을 해당 국가를 기준으로 계산합니다.
                    </h4>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="cardd p-3 text-left shadow-smm h-100">
                    <hr />
                    <h2 className="fs-4">최대 3회 인력교체</h2>
                    <h4 className="fs-6 text-muted">
                      임금을 해당 국가를 기준으로 계산합니다.
                    </h4>
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="cardd p-3 text-left shadow-smm h-100">
                    <hr />
                    <h2 className="fs-4">평균 월 120만원</h2>
                    <h4 className="fs-6 text-muted">
                      임금을 해당 국가를 기준으로 계산합니다.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <CardSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextSlider;
