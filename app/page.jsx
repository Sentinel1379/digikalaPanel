"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import swiper1 from "../app/assets/swiper1.jpg";
import swiper2 from "../app/assets/swiper2.jpg";
import swiper3 from "../app/assets/swiper3.jpg";
import swiper4 from "../app/assets/swiper4.jpg";
import swiper5 from "../app/assets/swiper5.jpg";
import swiper6 from "../app/assets/swiper6.jpg";
import swiper7 from "../app/assets/swiper7.jpg";
import icon7 from "../app/assets/icon7.svg";
import icon8 from "../app/assets/icon8.svg";

export default function Home() {
  return (
    <>
      <div className="BriefPart col-9">
        <div className="BriefPart-container">
          <section className="BriefPart-row1">
            <div className="Verification-text">
              <i class="bi bi-info-circle-fill"></i>
              <span>
                با تایید هویت می‌توانید‌ امنیت حساب کاربری‌تان را افزایش دهید و
                از امکان «خرید اعتباری» نیز استفاده کنید
              </span>
            </div>
            <a href="" className="Verification-edit">
              <span>تایید هویت</span>
              <i class="bi bi-chevron-left"></i>
            </a>
          </section>

          <section className="BriefPart-row2">
            <div className="MyCart-heading">
              <div className="MyCart-heading-title">
                <p>سفارش‌های من</p>
                <div></div>
              </div>
              <a href="" className="MyCart-heading-edit">
                <span>مشاهده همه</span>
                <i class="bi bi-chevron-left"></i>
              </a>
            </div>
            <div className="MyCart-body row my-5">
              <a className="MyCart-body-col col-4">
                <div className="MyCart-body-col-icon">
                  <img
                    src="https://www.digikala.com/statics/img/svg/status-processing.svg"
                    alt=""
                  />
                </div>
                <div className="MyCart-body-col-text">
                  <p>۰ سفارش</p>
                  <span>جاری</span>
                </div>
              </a>
              <a className="MyCart-body-col col-4">
                <div className="MyCart-body-col-icon">
                  <img
                    src="https://www.digikala.com/statics/img/svg/status-delivered.svg"
                    alt=""
                  />
                </div>
                <div className="MyCart-body-col-text">
                  <p>۷ سفارش</p>
                  <span>تحویل شده</span>
                </div>
              </a>
              <a className="MyCart-body-col col-4">
                <div className="MyCart-body-col-icon">
                  <img
                    src="https://www.digikala.com/statics/img/svg/status-returned.svg"
                    alt=""
                  />
                </div>
                <div className="MyCart-body-col-text">
                  <p>۰ سفارش</p>
                  <span>مرجوع شده</span>
                </div>
              </a>
            </div>
          </section>

          <section className="BriefPart-row3">
            <div className="BriefPart-row3-container">
              <div className="BriefPart-row3-title">
                <p>خریدهای پرتکرار شما</p>
                <div></div>
              </div>
              <div className="BriefPart-row3-swiper">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  navigation={true}
                  breakpoints={{
                    1300: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                  modules={[Navigation]}
                  className="mySwiper BriefPart-row3-swiper-container"
                >
                  <SwiperSlide className="BriefPart-row3-swiper-slide">
                    <a
                      href=""
                      className="BriefPart-row3-swiper-slide-container"
                    >
                      <div className="BriefPart-row3-swiper-slide-image">
                        <Image src={swiper1} />
                      </div>
                      <div className="BriefPart-row3-swiper-slide-content">
                        <h3>کاور لنز دوربین لپ تاپ کد BE1103-3</h3>
                        <div className="Price">
                          <p>۲۸,۰۰۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="BriefPart-row3-swiper-slide-button">
                        <button className="btn BriefPart-row3-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="BriefPart-row3-swiper-slide">
                    <a
                      href=""
                      className="BriefPart-row3-swiper-slide-container"
                    >
                      <div className="BriefPart-row3-swiper-slide-image">
                        <Image src={swiper2} />
                      </div>
                      <div className="BriefPart-row3-swiper-slide-content">
                        <h3>دفتر مشق پاپکو کد A4-622</h3>
                        <div className="Price">
                          <p>۱۱۰,۰۰۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="BriefPart-row3-swiper-slide-button">
                        <button className="btn BriefPart-row3-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="BriefPart-row3-swiper-slide">
                    <a
                      href=""
                      className="BriefPart-row3-swiper-slide-container"
                    >
                      <div className="BriefPart-row3-swiper-slide-image">
                        <Image src={swiper3} />
                      </div>
                      <div className="BriefPart-row3-swiper-slide-content">
                        <h3>شانه اصلاح ریش</h3>
                        <div className="Price">
                          <p>۱۴,۰۰۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="BriefPart-row3-swiper-slide-button">
                        <button className="btn BriefPart-row3-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="BriefPart-row3-swiper-slide">
                    <a
                      href=""
                      className="BriefPart-row3-swiper-slide-container"
                    >
                      <div className="BriefPart-row3-swiper-slide-image">
                        <Image src={swiper4} />
                      </div>
                      <div className="BriefPart-row3-swiper-slide-content">
                        <h3>دفتر مشق 80 برگ پاپکو کد A4-603 </h3>
                        <div className="Price">
                          <p>۱۱۲,۹۵۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="BriefPart-row3-swiper-slide-button">
                        <button className="btn BriefPart-row3-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="BriefPart-row3-swiper-slide">
                    <a
                      href=""
                      className="BriefPart-row3-swiper-slide-container"
                    >
                      <div className="BriefPart-row3-swiper-slide-image">
                        <Image src={swiper5} />
                      </div>
                      <div className="BriefPart-row3-swiper-slide-content">
                        <h3>پیچ گوشتی چهارسو ایران پتک مدل QA1012</h3>
                        <div className="Price">
                          <p>۵۸,۰۰۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="BriefPart-row3-swiper-slide-button">
                        <button className="btn BriefPart-row3-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="BriefPart-row3-swiper-slide">
                    <a
                      href=""
                      className="BriefPart-row3-swiper-slide-container"
                    >
                      <div className="BriefPart-row3-swiper-slide-image">
                        <Image src={swiper6} />
                      </div>
                      <div className="BriefPart-row3-swiper-slide-content">
                        <h3>
                          پایه نگهدارنده گوشی موبایل و تبلت یونیورسال مدل 270
                          درجه
                        </h3>
                        <div className="Price">
                          <p>۳۱,۰۰۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="BriefPart-row3-swiper-slide-button">
                        <button className="btn BriefPart-row3-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="BriefPart-row3-swiper-slide">
                    <a
                      href=""
                      className="BriefPart-row3-swiper-slide-container"
                    >
                      <div className="BriefPart-row3-swiper-slide-image">
                        <Image src={swiper7} />
                      </div>
                      <div className="BriefPart-row3-swiper-slide-content">
                        <h3>متر 2 متری تاپ رول کد 132</h3>
                        <div className="Price">
                          <p>۵۴,۹۰۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="BriefPart-row3-swiper-slide-button">
                        <button className="btn BriefPart-row3-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* ---------------mobile---------------------------- */}

      <div className="Mob-BriefPart">
        <section className="Mob-BriefPart-row1">
          <div className="Mob-BriefPart-row1-contaner">
            <div className="Mob-BriefPart-row1-setting">
              <i class="bi bi-gear"></i>
            </div>
            <div className="Mob-BriefPart-row1-notif">
              <a className="Mob-BriefPart-row1-notif-help">
                <i class="bi bi-headset"></i>
              </a>
              <a className="Mob-BriefPart-row1-notif-messages">
                <i class="bi bi-bell"></i>
              </a>
            </div>
          </div>
        </section>

        <section className="Mob-BriefPart-row2">
          <div className="Mob-BriefPart-row2-container">
            <section className="Mob-BriefPart-row2-r1">
              <div className="Mob-BriefPart-row2-r1-prof">
                <div className="Mob-BriefPart-prof">
                  <p className="Mob-BriefPart-prof-name">صادق آنالويي</p>
                  <p className="Mob-BriefPart-prof-number">۰۹۱۸۶۹۱۶۰۲۷</p>
                </div>
                <a
                  href="/profileDetail"
                  className="Mob-BriefPart-prof-editIcon"
                >
                  <i class="bi bi-pencil"></i>
                </a>
              </div>
            </section>

            <section className="Mob-BriefPart-row2-r2">
              <div className="Mob-BriefPart-row2-r2-wallet">
                <div className="Mob-BriefPart-row2-r2-wallet-image">
                  <Image src={icon7} />
                </div>
                <div className="Mob-BriefPart-row2-r2-wallet-text">
                  <p>
                    -<span style={{ color: "#a1a3a8" }}>تومان</span>
                  </p>
                  <a>
                    فعالسازی
                    <i class="bi bi-chevron-left"></i>
                  </a>
                </div>
              </div>
              <div className="Mob-BriefPart-row2-r2-plus">
                <div className="Mob-BriefPart-row2-r2-plus-image">
                  <Image src={icon8} />
                </div>
                <div className="Mob-BriefPart-row2-r2-plus-text">
                  <p>
                    ۵<span style={{ color: "#a1a3a8" }}>امتیاز</span>
                  </p>
                  <a>
                    مأموریت‌های دیجی‌کلاب
                    <i class="bi bi-chevron-left"></i>
                  </a>
                </div>
              </div>
            </section>

            <section className="Mob-BriefPart-row2-r3">
              <div className="Verification-text">
                <i class="bi bi-info-circle-fill"></i>
                <span>
                  با تایید هویت می‌توانید‌ امنیت حساب کاربری‌تان را افزایش دهید
                  و از امکان «خرید اعتباری» نیز استفاده کنید
                </span>
              </div>
              <a href="" className="Verification-edit">
                <span>تایید هویت</span>
                <i class="bi bi-chevron-left"></i>
              </a>
            </section>

            <section className="Mob-BriefPart-row2-r4">
              <div className="MyCart-heading">
                <div className="MyCart-heading-title">
                  <p>سفارش‌های من</p>
                  <div></div>
                </div>
                <a href="" className="MyCart-heading-edit">
                  <span>مشاهده همه</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </div>
              <div className="MyCart-body row">
                <a className="MyCart-body-col col-4">
                  <div className="MyCart-body-col-icon">
                    <img
                      src="https://www.digikala.com/statics/img/svg/status-processing.svg"
                      alt=""
                    />
                    <div className="">۰</div>
                  </div>
                  <div className="MyCart-body-col-text">
                    <span>جاری</span>
                  </div>
                </a>
                <a className="MyCart-body-col col-4">
                  <div className="MyCart-body-col-icon">
                    <img
                      src="https://www.digikala.com/statics/img/svg/status-delivered.svg"
                      alt=""
                    />
                    <div>۷</div>
                  </div>
                  <div className="MyCart-body-col-text">
                    <span>تحویل شده</span>
                  </div>
                </a>
                <a className="MyCart-body-col col-4">
                  <div className="MyCart-body-col-icon">
                    <img
                      src="https://www.digikala.com/statics/img/svg/status-returned.svg"
                      alt=""
                    />
                    <div>۰</div>
                  </div>
                  <div className="MyCart-body-col-text">
                    <span>مرجوع شده</span>
                  </div>
                </a>
              </div>
            </section>

            <section className="Mob-BriefPart-row2-r5">
              <div className="Mob-BriefPart-row2-r5-item">
                <a className="Mob-BriefPart-row2-r5-item-a">
                  <div className="">
                    <i class="bi bi-credit-card"></i>
                    <span className="Mob-BriefPart-row2-r5-item-a-text">
                      دیجی‌پلاس
                    </span>
                  </div>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </div>
              <div className="Mob-BriefPart-row2-r5-item">
                <a className="Mob-BriefPart-row2-r5-item-a">
                  <div className="">
                    <i class="bi bi-bag"></i>
                    <span className="Mob-BriefPart-row2-r5-item-a-text">
                      سفارش‌ها
                    </span>
                  </div>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </div>
              <div className="Mob-BriefPart-row2-r5-item">
                <a className="Mob-BriefPart-row2-r5-item-a">
                  <div className="">
                    <i class="bi bi-heart"></i>
                    <span className="Mob-BriefPart-row2-r5-item-a-text">
                      لیست‌های من
                    </span>
                  </div>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </div>
              <div className="Mob-BriefPart-row2-r5-item">
                <a className="Mob-BriefPart-row2-r5-item-a">
                  <div className="">
                    <i class="bi bi-chat"></i>
                    <span className="Mob-BriefPart-row2-r5-item-a-text">
                      دیدگاه‌ها
                    </span>
                  </div>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </div>
              <div className="Mob-BriefPart-row2-r5-item">
                <a className="Mob-BriefPart-row2-r5-item-a">
                  <div className="">
                    <i class="bi bi-bezier2"></i>
                    <span className="Mob-BriefPart-row2-r5-item-a-text">
                      آدرس‌ها
                    </span>
                  </div>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </div>
              <div className="Mob-BriefPart-row2-r5-item">
                <a className="Mob-BriefPart-row2-r5-item-a">
                  <div className="">
                    <i class="bi bi-credit-card"></i>
                    <span className="Mob-BriefPart-row2-r5-item-a-text">
                      کارت‌های هدیه
                    </span>
                  </div>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </div>
              <div className="Mob-BriefPart-row2-r5-item">
                <a className="Mob-BriefPart-row2-r5-item-a">
                  <div className="">
                    <i class="bi bi-bell"></i>
                    <span className="Mob-BriefPart-row2-r5-item-a-text">
                      پیغام‌ها
                    </span>
                  </div>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </div>
              <div className="Mob-BriefPart-row2-r5-item">
                <a className="Mob-BriefPart-row2-r5-item-a">
                  <div className="">
                    <i class="bi bi-clock"></i>
                    <span className="Mob-BriefPart-row2-r5-item-a-text">
                      بازدید‌های اخیر
                    </span>
                  </div>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </div>
              <div className="Mob-BriefPart-row2-r5-item">
                <a className="Mob-BriefPart-row2-r5-item-a">
                  <div className="">
                    <i className="bi bi-person"></i>
                    <span className="Mob-BriefPart-row2-r5-item-a-text">
                      اطلاعات حساب کاربری
                    </span>
                  </div>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </div>
              <div className="Mob-BriefPart-row2-r5-item">
                <a className="Mob-BriefPart-row2-r5-item-a">
                  <div className="">
                    <i class="bi bi-box-arrow-right"></i>
                    <span className="Mob-BriefPart-row2-r5-item-a-text">
                      خروج
                    </span>
                  </div>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </div>
            </section>

            <section className="Mob-BriefPart-row2-r6">
              <div className="Mob-BriefPart-row2-r6-title">
                <p>خریدهای پرتکرار شما</p>
                <div className="Mob-BriefPart-row2-r6-title-underLine"></div>
              </div>
              <div className="Mob-BriefPart-row2-r6-swiper">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={30}
                  navigation={true}
                  breakpoints={{
                    576: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  modules={[Navigation]}
                  className="mySwiper Mob-BriefPart-row2-r6-swiper-container"
                >
                  <SwiperSlide className="Mob-BriefPart-row2-r6-swiper-slide">
                    <a
                      href=""
                      className="Mob-BriefPart-row2-r6-swiper-slide-container"
                    >
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-image">
                        <Image src={swiper1} />
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-content">
                        <h3>کاور لنز دوربین لپ تاپ کد BE1103-3</h3>
                        <div className="Price">
                          <p>۲۸,۰۰۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-button">
                        <button className="btn Mob-BriefPart-row2-r6-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="Mob-BriefPart-row2-r6-swiper-slide">
                    <a
                      href=""
                      className="Mob-BriefPart-row2-r6-swiper-slide-container"
                    >
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-image">
                        <Image src={swiper2} />
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-content">
                        <h3>دفتر مشق پاپکو کد A4-622</h3>
                        <div className="Price">
                          <p>۱۱۰,۰۰۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-button">
                        <button className="btn Mob-BriefPart-row2-r6-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="Mob-BriefPart-row2-r6-swiper-slide">
                    <a
                      href=""
                      className="Mob-BriefPart-row2-r6-swiper-slide-container"
                    >
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-image">
                        <Image src={swiper3} />
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-content">
                        <h3>شانه اصلاح ریش</h3>
                        <div className="Price">
                          <p>۱۴,۰۰۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-button">
                        <button className="btn Mob-BriefPart-row2-r6-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="Mob-BriefPart-row2-r6-swiper-slide">
                    <a
                      href=""
                      className="Mob-BriefPart-row2-r6-swiper-slide-container"
                    >
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-image">
                        <Image src={swiper4} />
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-content">
                        <h3>دفتر مشق 80 برگ پاپکو کد A4-603 </h3>
                        <div className="Price">
                          <p>۱۱۲,۹۵۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-button">
                        <button className="btn Mob-BriefPart-row2-r6-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="Mob-BriefPart-row2-r6-swiper-slide">
                    <a
                      href=""
                      className="Mob-BriefPart-row2-r6-swiper-slide-container"
                    >
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-image">
                        <Image src={swiper5} />
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-content">
                        <h3>پیچ گوشتی چهارسو ایران پتک مدل QA1012</h3>
                        <div className="Price">
                          <p>۵۸,۰۰۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-button">
                        <button className="btn Mob-BriefPart-row2-r6-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="Mob-BriefPart-row2-r6-swiper-slide">
                    <a
                      href=""
                      className="Mob-BriefPart-row2-r6-swiper-slide-container"
                    >
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-image">
                        <Image src={swiper6} />
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-content">
                        <h3>
                          پایه نگهدارنده گوشی موبایل و تبلت یونیورسال مدل 270
                          درجه
                        </h3>
                        <div className="Price">
                          <p>۳۱,۰۰۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-button">
                        <button className="btn Mob-BriefPart-row2-r6-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                  <SwiperSlide className="Mob-BriefPart-row2-r6-swiper-slide">
                    <a
                      href=""
                      className="Mob-BriefPart-row2-r6-swiper-slide-container"
                    >
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-image">
                        <Image src={swiper7} />
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-content">
                        <h3>متر 2 متری تاپ رول کد 132</h3>
                        <div className="Price">
                          <p>۵۴,۹۰۰</p>
                          <span>تومان</span>
                        </div>
                      </div>
                      <div className="Mob-BriefPart-row2-r6-swiper-slide-button">
                        <button className="btn Mob-BriefPart-row2-r6-swiper-slide-button-btn">
                          <i class="bi bi-cart2"></i>
                          <span>اضافه به سبد</span>
                        </button>
                      </div>
                    </a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
