import React from "react";
import styles from "./styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={`bg-light py-4 ${styles.footer}`}>
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <h5 className={styles.brand}>hyperhire</h5>
            <p>
              우리는 구직과 경력자를 넘어 최고의 인재를 제공합니다.
            </p>
            <p>010-0000-0000</p>
            <p>aaaaa@naver.com</p>
          </div>

          {/* Middle Section */}
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="d-flex flex-wrap gap-3">
              {/* Icon Blocks */}
              <div className={styles.iconBlock}>
                <p>해외 개발자 원격 채용</p>
                <a href="#" className="text-decoration-none">
                  보기기 →
                </a>
              </div>
              <div className={styles.iconBlock}>
                <p>외국인 인재 채용 (비개발)</p>
                <a href="#" className="text-decoration-none">
                  보기기 →
                </a>
              </div>
              <div className={styles.iconBlock}>
                <p>한국어 가능한 외국인 채용</p>
                <a href="#" className="text-decoration-none">
                  보기기 →
                </a>
              </div>
              <div className={styles.iconBlock}>
                <p>해외 개발자 검증 서비스</p>
                <a href="#" className="text-decoration-none">
                  보기기 →
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-4 col-md-6 col-12">
            <p>
              <strong>상호명:</strong> 하이퍼하이어
            </p>
            <p>
              <strong>대표 CEO:</strong> Juhyun Kim
            </p>
            <p>
              <strong>사업자등록번호 CIN:</strong> 427-88-01817
            </p>
            <p>
              <strong>주소 ADDRESS:</strong>
              서울특별시 강남구 439, 자하빌딩 2층 <br />
              D-138, Street number 71, Jagjeet Nagar, North East Delhi, New
              Delhi, 110053 India
            </p>
          </div>
        </div>
        <div className="text-center mt-3">
          <p>&copy; 2023 hyperhire</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
