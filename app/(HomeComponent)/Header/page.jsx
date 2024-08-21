"use client";

import { useContext, useEffect, useRef, useState } from "react";
import ProductionMenu from "./ProductionMenu/page";
import ModalAddress from "./ModalAddress/page";
import { useRouter } from "next/navigation";
import { MenuContext } from "@/app/ContextProvider";

export default function Header() {
  const { itemBold, setItemBold } = useContext(MenuContext);
  const router = useRouter();
  const headerRef = useRef(null);
  const headerBottomRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current.style.height = "75px";
        headerBottomRef.current.style.transform = "translateY(-100%)";
        headerBottomRef.current.style.visibility = "hidden";
      } else {
        headerRef.current.style.height = "119px";
        headerBottomRef.current.style.transform = "none";
        headerBottomRef.current.style.visibility = "visible";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <>
      <header className="Header" ref={headerRef}>
        <section className="Header-top">
          <div className="Header-top-container row">
            <div className="Header-top-Col1 col-9">
              <a href="/" className="Header-top-logo">
                <div>
                  <img
                    src="https://www.digikala.com/statics/img/svg/logo.svg"
                    alt="logo"
                  />
                </div>
              </a>
              <div className="Header-top-searchInput">
                <div className="Header-top-searchInput-container">
                  <input type="search" placeholder="جستجو" />
                  <i class="bi bi-search"></i>
                </div>
              </div>
            </div>
            <div className="Header-top-Col2 col-3">
              <div className="Profile-menu">
                <button
                  type="button"
                  className="Profile-menu-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person"></i>
                  <i className="bi bi-caret-down-fill"></i>
                </button>
                <ul className="dropdown-menu Profile-menu-ul">
                  <li className="Profile-menu-item-1">
                    <a
                      className="dropdown-item Profile-menu-item-1-a"
                      onClick={() => {
                        setItemBold("brief");
                        router.push("/");
                      }}
                    >
                      <span className="Profile-menu-name">صادق آنالوئی</span>
                      <i class="bi bi-chevron-left"></i>
                    </a>
                  </li>
                  <li className="Profile-menu-item">
                    <a href="#" className="dropdown-item Profile-menu-item-a">
                      <div className="Profile-menu-item-icon">
                        <div>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 9C16.5 13.1425 13.1425 16.5 9 16.5C4.85748 16.5 1.5 13.1425 1.5 9C1.5 4.85748 4.85748 1.5 9 1.5C13.1425 1.5 16.5 4.85748 16.5 9Z"
                              fill="#FFDF4E"
                            />
                            <path
                              d="M6.30327 16.0007C5.74308 15.7848 5.21534 15.5036 4.72939 15.1664L15.1368 4.68697C15.48 5.17449 15.7666 5.70476 15.9871 6.26823L6.30327 16.0007Z"
                              fill="#FFF077"
                            />
                            <path
                              d="M14.0449 3.44998L3.47817 14.0757C3.08895 13.6525 2.74777 13.1844 2.46326 12.6801L12.635 2.43799C13.1443 2.72068 13.6172 3.06094 14.0449 3.44998Z"
                              fill="#FFF077"
                            />
                            <path
                              d="M13.2426 13.2426C10.8991 15.5862 7.10091 15.5862 4.75736 13.2426C2.41381 10.8991 2.41381 7.10091 4.75736 4.75736C7.10091 2.41381 10.8991 2.41381 13.2426 4.75736C15.5862 7.10091 15.5862 10.8991 13.2426 13.2426Z"
                              fill="#FFCB05"
                            />
                            <path
                              d="M4.75736 13.2427C7.10091 15.5862 10.8991 15.5862 13.2426 13.2427C15.5862 10.8991 15.5862 7.10094 13.2426 4.75739L4.75736 13.2427Z"
                              fill="#FCA400"
                            />
                            <path
                              d="M10.1916 10.1495L9.76402 10.5701C9.73598 10.5981 9.72196 10.6332 9.72897 10.6752L9.8271 11.264C9.84112 11.3622 9.74299 11.4323 9.65888 11.3902L9.12617 11.1098C9.09112 11.0888 9.04906 11.0888 9.02103 11.1098L8.48832 11.3902C8.4042 11.4323 8.30607 11.3622 8.32009 11.264L8.41822 10.6752C8.42523 10.6402 8.41121 10.5981 8.38318 10.5701L7.95561 10.1495C7.88551 10.0794 7.92757 9.9673 8.01869 9.95328L8.61448 9.86917C8.64953 9.86216 8.68458 9.84113 8.70561 9.80608L8.97196 9.26637C9.01402 9.18225 9.14019 9.18225 9.18224 9.26637L9.4486 9.80608C9.46262 9.84113 9.49766 9.86216 9.53972 9.86917L10.1285 9.95328C10.2196 9.9673 10.2617 10.0865 10.1916 10.1495ZM12.715 7.80842L12.0701 7.16356C11.965 7.05842 11.7897 7.06543 11.6916 7.17758C11.0537 7.91356 10.1075 8.36917 9.06308 8.36917C8.01869 8.36917 7.08645 7.91356 6.4486 7.1916C6.35047 7.07945 6.17523 7.07244 6.07009 7.17758L5.43224 7.81543C5.33411 7.91356 5.3271 8.06777 5.42523 8.17291C5.89486 8.68459 6.47663 9.09814 7.12149 9.37851V12.007C7.12149 12.3785 7.4229 12.6799 7.79439 12.6799H10.3528C10.7243 12.6799 11.0257 12.3785 11.0257 12.007V9.37851C11.6776 9.09814 12.2523 8.68459 12.722 8.17291C12.8201 8.06076 12.8131 7.90655 12.715 7.80842Z"
                              fill="#FFF077"
                            />
                            <path
                              d="M9.0771 7.17758C9.60981 7.17758 10.0374 6.75001 10.0374 6.2173C10.0374 5.68459 9.60981 5.25702 9.0771 5.25702C8.54439 5.25702 8.11682 5.6916 8.11682 6.2173C8.10981 6.75001 8.54439 7.17758 9.0771 7.17758Z"
                              fill="#FFF077"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="Profile-menu-item-content">
                        <span>دیجی‌کلاب</span>
                        <span>
                          ۵<small>امتیاز</small>
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="Profile-menu-item">
                    <a href="#" className="dropdown-item Profile-menu-item-a">
                      <div className="Profile-menu-item-icon">
                        <div>
                          <i class="bi bi-credit-card"></i>
                        </div>
                      </div>
                      <div className="Profile-menu-item-content">
                        <span style={{ color: "#c0c2c5" }}>دیجی‌پلاس</span>
                        <div>
                          <p>خرید اشتراک</p>
                          <i class="bi bi-chevron-left"></i>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="Profile-menu-item">
                    <a
                      className="dropdown-item Profile-menu-item-a"
                      onClick={() => {
                        setItemBold("orders");
                        router.push("/orders");
                      }}
                    >
                      <div className="Profile-menu-item-icon">
                        <div>
                          <i class="bi bi-bag"></i>
                        </div>
                      </div>
                      <div className="Profile-menu-item-content">
                        <span>سفارش‌ها</span>
                      </div>
                    </a>
                  </li>
                  <li className="Profile-menu-item">
                    <a
                      className="dropdown-item Profile-menu-item-a"
                      onClick={() => {
                        setItemBold("myList");
                        router.push("/myList");
                      }}
                    >
                      <div className="Profile-menu-item-icon">
                        <div>
                          <i class="bi bi-heart"></i>
                        </div>
                      </div>
                      <div className="Profile-menu-item-content">
                        <span>لیست‌ها</span>
                      </div>
                    </a>
                  </li>
                  <li className="Profile-menu-item">
                    <a
                      className="dropdown-item Profile-menu-item-a"
                      onClick={() => {
                        setItemBold("comments");
                        router.push("/comments");
                      }}
                    >
                      <div className="Profile-menu-item-icon">
                        <div>
                          <i class="bi bi-chat"></i>
                        </div>
                      </div>
                      <div className="Profile-menu-item-content">
                        <span>دیدگاه‌ها و پرسش‌ها</span>
                      </div>
                    </a>
                  </li>
                  <li className="Profile-menu-item">
                    <a
                      className="dropdown-item Profile-menu-item-a"
                      onClick={() => {
                        setItemBold("messages");
                        router.push("/messages");
                      }}
                    >
                      <div className="Profile-menu-item-icon">
                        <div>
                          <i class="bi bi-bell"></i>
                        </div>
                      </div>
                      <div className="Profile-menu-item-content">
                        <span>پیغام ها</span>
                        <span
                          style={{
                            color: "#fff",
                            textAlign: "center",
                            padding: "0 8px",
                            backgroundColor: "#ef4056",
                            borderRadius: "4px",
                          }}
                        >
                          ۳
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="Profile-menu-item">
                    <a className="dropdown-item Profile-menu-item-a" href="#">
                      <div className="Profile-menu-item-icon">
                        <div>
                          <i class="bi bi-box-arrow-right"></i>
                        </div>
                      </div>
                      <div
                        className="Profile-menu-item-content"
                        style={{ border: "0" }}
                      >
                        <span>خروج از حساب کاربری</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <span className="Dividing-line"></span>
              <div className="Cart-btn">
                <button type="button">
                  <i class="bi bi-cart3"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="Header-bottom" ref={headerBottomRef}>
          <div className="Header-bottom-container row">
            <section className="col-9 Header-bottom-Navbar">
              <section className="Navbar-col1">
                <button
                  type="button"
                  className="Navbar-col1-menu-btn"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-list" style={{color : "#3f4064"}}></i>
                  <span style={{fontWeight : "700"}}>دسته‌بندی کالاها</span>
                  <span></span>
                </button>
                <ProductionMenu />
                <div className="Overlay-1"></div>
              </section>
              <section className="Navbar-col2">
                <div className="Navbar-col2-item">
                  <a href="">
                    <i class="bi bi-percent"></i>
                    <span>شگفت‌انگیزها</span>
                  </a>
                </div>
                <div className="Navbar-col2-item">
                  <a href="">
                    <i class="bi bi-basket2-fill"></i>
                    <span>سوپرمارکت</span>
                  </a>
                </div>
                <div className="Navbar-col2-item">
                  <a href="">
                    <i class="bi bi-credit-card"></i>
                    <span>کارت هدیه</span>
                  </a>
                </div>
                <div className="Navbar-col2-item">
                  <a href="">
                    <i class="bi bi-browser-firefox"></i>
                    <span>پرفروش‌ترین‌ها</span>
                  </a>
                </div>
              </section>
              <section className="Navbar-col3">
                <div className="Navbar-col3-item">
                  <a href="">سوالی دارید؟</a>
                </div>
                <div className="Navbar-col3-item">
                  <a href="">در دیجی‌کالا بفروشید!</a>
                </div>
              </section>
            </section>
            <section className="col-3 Header-bottom-Location">
              <button
                type="button"
                className="btn Header-bottom-Location-btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <div className="Header-bottom-Location-btn-icon">
                  <i class="bi bi-geo-alt"></i>
                </div>
                <div className="Header-bottom-Location-btn-text">
                  ارسال به مرکزی، اراک
                  <div className="Location-text-tooltip">
                    ارسال به مرکزی، اراک
                  </div>
                </div>
              </button>
              <ModalAddress />
            </section>
          </div>
        </section>
      </header>
    </>
  );
}
