import Image from "next/image";
import icon5 from "../../assets/icon5.svg";
import cardC1 from "../../assets/cardC1.jpg";
import cardC2 from "../../assets/cardC2.jpg";
import cardC5 from "../../assets/cardC5.jpg";

export default function Comments() {
  return (
    <>
      <div className="Comments col-9">
        <div className="Comments-container">
          <section className="Comments-row1">
            <div className="Comments-row1-title">
              <p>دیدگاه‌ها و پرسش‌ها</p>
            </div>
          </section>

          <section className="Comments-row2">
            <ul className="Comments-row2-tabs">
              <li className="Comments-row2-tabs-item">
                <div className="Comments-row2-tabs-item-text">
                  <span>در انتظار دیدگاه</span>
                </div>
                <div className="Comments-row2-tabs-item-underline"></div>
              </li>
              <li className="Comments-row2-tabs-item">
                <div className="Comments-row2-tabs-item-text">
                  <span>دیدگاه‌های من</span>
                </div>
              </li>
              <li className="Comments-row2-tabs-item">
                <div className="Comments-row2-tabs-item-text">
                  <span>پرسش‌های من</span>
                </div>
              </li>
            </ul>

            <ul className="Comments-row2-list">
              <li className="Comments-row2-list-item">
                <div className="Comments-row2-list-item-contaner">
                  <section className="Comments-row2-list-item-r1">
                    <div className="Comments-row2-list-item-r1-img">
                      <Image src={icon5} />
                    </div>
                    <div className="Comments-row2-list-item-r1-text">
                      <p>از این کالاها راضی هستید؟</p>
                      <span>
                        با ثبت دیدگاه برای هر کالا ۵ امتیاز از دیجی‌کلاب بگیرید!
                      </span>
                    </div>
                  </section>
                  <section className="Comments-row2-list-item-r2 row">
                    <div className="Comments-cardProduct col-6">
                      <div className="Comments-cardProduct-container">
                        <section className="Comments-cardProduct-Specific">
                          <a
                            href=""
                            className="Comments-cardProduct-Specific-a"
                          >
                            <div className="Comments-cardProduct-Specific-a-img">
                              <Image src={cardC1} />
                            </div>
                            <p>فون عکاسی کروماکی کد 250-400</p>
                          </a>
                          <div className="Comments-cardProduct-Specific-sub">
                            <span className="Comments-cardProduct-Specific-sub-store">
                              <i class="bi bi-shop Comments-cardProduct-Specific-sub-store-i"></i>
                              <p className="Comments-cardProduct-Specific-sub-store-name">
                                کروماکی لند
                              </p>
                              <i class="bi bi-dot Comments-cardProduct-Specific-sub-space"></i>
                            </span>
                            <div
                              className="Comments-cardProduct-Specific-sub-colorI"
                              style={{
                                backgroundColor: "rgb(0, 230, 118)",
                              }}
                            ></div>
                            <p className="Comments-cardProduct-Specific-sub-colorT">
                              سبز
                            </p>
                            <i class="bi bi-dot Comments-cardProduct-Specific-sub-space"></i>
                            <p className="Comments-cardProduct-Specific-sub-date">
                              ۲۸ بهمن ۱۴۰۲
                            </p>
                          </div>
                        </section>
                        <section className="Comments-cardProduct-Score">
                          <p>امتیاز دهید!</p>
                          <div className="Comments-cardProduct-Score-icons">
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۱</span>
                            </div>
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۲</span>
                            </div>
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۳</span>
                            </div>
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۴</span>
                            </div>
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۵</span>
                            </div>
                          </div>
                        </section>
                        <section className="Comments-cardProduct-button">
                          <button className="btn">
                            <i class="bi bi-chat"></i>
                            ثبت دیدگاه
                          </button>
                        </section>
                      </div>
                    </div>
                    <div className="Comments-cardProduct col-6">
                      <div className="Comments-cardProduct-container">
                        <section className="Comments-cardProduct-Specific">
                          <a
                            href=""
                            className="Comments-cardProduct-Specific-a"
                          >
                            <div className="Comments-cardProduct-Specific-a-img">
                              <Image src={cardC2} />
                            </div>
                            <p>كاغذ يادداشت كد 1010 بسته 300 عددی</p>
                          </a>
                          <div className="Comments-cardProduct-Specific-sub">
                            <span className="Comments-cardProduct-Specific-sub-store">
                              <i class="bi bi-shop Comments-cardProduct-Specific-sub-store-i"></i>
                              <p className="Comments-cardProduct-Specific-sub-store-name">
                                آریانا گستر لند
                              </p>
                              <i class="bi bi-dot Comments-cardProduct-Specific-sub-space"></i>
                            </span>
                            <div
                              className="Comments-cardProduct-Specific-sub-colorI"
                              style={{
                                backgroundColor: "rgb(255, 255, 255)",
                              }}
                            ></div>
                            <p className="Comments-cardProduct-Specific-sub-colorT">
                              سفید
                            </p>
                            <i class="bi bi-dot Comments-cardProduct-Specific-sub-space"></i>
                            <p className="Comments-cardProduct-Specific-sub-date">
                              ۲۸ بهمن ۱۴۰۲
                            </p>
                          </div>
                        </section>
                        <section className="Comments-cardProduct-Score">
                          <p>امتیاز دهید!</p>
                          <div className="Comments-cardProduct-Score-icons">
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۱</span>
                            </div>
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۲</span>
                            </div>
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۳</span>
                            </div>
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۴</span>
                            </div>
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۵</span>
                            </div>
                          </div>
                        </section>
                        <section className="Comments-cardProduct-button">
                          <button className="btn">
                            <i class="bi bi-chat"></i>
                            ثبت دیدگاه
                          </button>
                        </section>
                      </div>
                    </div>
                    <div className="Comments-cardProduct col-6">
                      <div className="Comments-cardProduct-container">
                        <section className="Comments-cardProduct-Specific">
                          <a
                            href=""
                            className="Comments-cardProduct-Specific-a"
                          >
                            <div className="Comments-cardProduct-Specific-a-img">
                              <Image src={cardC5} />
                            </div>
                            <p className="">
                              کتاب پرستاری کودکان کودک سالم 1 اثر جمعی از
                              نویسندگان انتشارات اندیشه رفیع{" "}
                            </p>
                          </a>
                          <div className="Comments-cardProduct-Specific-sub">
                            <span className="Comments-cardProduct-Specific-sub-store">
                              <i class="bi bi-shop Comments-cardProduct-Specific-sub-store-i"></i>
                              <p className="Comments-cardProduct-Specific-sub-store-name">
                                گیتاتک
                              </p>
                              <i class="bi bi-dot Comments-cardProduct-Specific-sub-space"></i>
                            </span>
                            <i class="bi bi-dot Comments-cardProduct-Specific-sub-space"></i>
                            <p className="Comments-cardProduct-Specific-sub-date">
                              ۲۸ بهمن ۱۴۰۲
                            </p>
                          </div>
                        </section>
                        <section className="Comments-cardProduct-Score">
                          <p>امتیاز دهید!</p>
                          <div className="Comments-cardProduct-Score-icons">
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۱</span>
                            </div>
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۲</span>
                            </div>
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۳</span>
                            </div>
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۴</span>
                            </div>
                            <div className="">
                              <i class="bi bi-star"></i>
                              <span>۵</span>
                            </div>
                          </div>
                        </section>
                        <section className="Comments-cardProduct-button">
                          <button className="btn">
                            <i class="bi bi-chat"></i>
                            ثبت دیدگاه
                          </button>
                        </section>
                      </div>
                    </div>
                  </section>
                  <section className="Comments-row2-list-item-r3"></section>
                </div>
              </li>
            </ul>
          </section>

          <section className="Comments-row3">
            <div
              className="Comments-row3-backBTN"
              style={{
                opacity: "0",
              }}
            >
              <i class="bi bi-chevron-right"></i>
              <span>قبلی</span>
            </div>
            <div className="Comments-row3-paginatiom">
              <span
                className="Comments-row3-paginatiom-active"
                style={{
                  backgroundColor: "#ef394e",
                  color: "#fff",
                }}
              >
                ۱
              </span>
            </div>
            <div
              className="Comments-row3-nextBTN"
              style={{
                opacity: "1",
              }}
            >
              <span>بعدی</span>
              <i class="bi bi-chevron-left"></i>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
