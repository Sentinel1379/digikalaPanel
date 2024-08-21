"use client";

import { useState } from "react";

export default function Help() {
  const [showHelp , setShowHelp] = useState(false)
  const [answer1, setAnswer1] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);

  return (
    <>
      <div className="Help">
        <button className="btn" onClick={() => {
          setShowHelp(!showHelp);
        }}>
          <i className={showHelp ?"bi bi-x" : "bi bi-headset"}></i>
        </button>
        <div className="Help-container" style={{
          display : showHelp ? "block" : "none"
        }}>
          <div className="Help-header">
            <h2>پشتیبانی آنلاین</h2>
            <i class="bi bi-arrow-left-short"></i>
          </div>
          <div className="Help-body">
            <p className="Help-body-text1">سلام👋👋</p>
            <p className="Help-body-text2">
              اینجا می‌توانید تعدادی از پرسش های متداول را ببینید یا در صورت
              تمایل با ما آنلاین گفتگو کنید!
            </p>
            <ul className="Help-body-Q">
              <li className="">
                <div
                  className="Help-body-Q-question"
                  onClick={() => {
                    setAnswer1(!answer1);
                  }}
                >
                  <span>شرایط کسب امتیاز از طریق ثبت نظر چیست؟</span>
                  <i
                    class="bi bi-chevron-up"
                    style={{
                      transform: answer1 ? "rotate(0turn)" : "rotate(.5turn)",
                    }}
                  ></i>
                </div>
                <div
                  className="Help-body-Q-answer"
                  style={{
                    display: answer1 ? "block" : "none",
                  }}
                >
                  <p>
                    شما می توانید پس از دریافت سفارش، نظر خود را در رابطه با
                    محصول خریداری شده در دیجی کالا بنویسید. پس از تایید نظر شما
                    توسط کارشناسان دیجی کالا، امتیاز برای شما ثبت می‌شود.تا قبل
                    از تایید نظر امتیاز شما در قسمت تاریخچه بخش امتیازات در صف
                    نمایش داده میشود.
                  </p>
                </div>
              </li>
              <li className="">
                <div
                  className="Help-body-Q-question"
                  onClick={() => {
                    setAnswer2(!answer2);
                  }}
                >
                  <span>چرا باید در حساب کاربری شماره کارت ثبت کنم؟</span>
                  <i
                    class="bi bi-chevron-up"
                    style={{
                      transform: answer2 ? "rotate(0turn)" : "rotate(.5turn)",
                    }}
                  ></i>
                </div>
                <div
                  className="Help-body-Q-answer"
                  style={{
                    display: answer2 ? "block" : "none",
                  }}
                >
                  <p>
                    در صورتی که از خرید خود منصرف شوید دیجی کالا در کمترین زمان
                    ممکن مبلغ را به شماره کارت شما برگشت می دهد. مهم است که
                    شماره کارت به نام مالک حساب کاربری ثبت داشته باشید
                  </p>
                </div>
              </li>
              <li className="">
                <div
                  className="Help-body-Q-question"
                  onClick={() => {
                    setAnswer3(!answer3);
                  }}
                >
                  <span>چرا باید در حساب کاربری آدرس ایمیل ثبت کنم؟</span>
                  <i
                    class="bi bi-chevron-up"
                    style={{
                      transform: answer3 ? "rotate(0turn)" : "rotate(.5turn)",
                    }}
                  ></i>
                </div>
                <div
                  className="Help-body-Q-answer"
                  style={{
                    display: answer3 ? "block" : "none",
                  }}
                >
                  <p>کلیه مکاتبات دیجی کالا با آدرس ایمیل شما انجام می شود.</p>
                </div>
              </li>
            </ul>
            <div className="Help-body-talking">
              <p>جواب سوالتون رو پیدا نکردید؟</p>
              <button className="btn">
                <span>گفتگو با پشتیبان آنلاین</span>
                <i class="bi bi-chevron-left"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
