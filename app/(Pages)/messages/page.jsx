import Image from "next/image";
import mIcon1 from "../../assets/mIcon1.jpg";

export default function Messages() {
  return (
    <>
      <div className="Messages col-9">
        <div className="Messages-container">
          <div className="Messages-header">
            <div className="Messages-header-title">
              <p>پیغام ها</p>
              <div className="Messages-header-title-underline"></div>
            </div>
          </div>

          <div className="Messages-tabs">
            <span
              className="Messages-tabs-item"
              style={{
                borderColor: "rgb(239, 57, 78)",
                color: "rgb(239, 57, 78)",
                padding: "6px 14px",
              }}
            >
              همه پیام‌ها
            </span>
            <span className="Messages-tabs-item">
              <i class="bi bi-bell"></i>
              اطلاع‌رسانی‌ها
            </span>
            <span className="Messages-tabs-item">
              <i class="bi bi-bag"></i>
              سفارش‌ها
            </span>
            <span className="Messages-tabs-item">
              <i class="bi bi-megaphone"></i>
              پیشنهادها
            </span>
            <span className="Messages-tabs-item">
              <i class="bi bi-newspaper"></i>
              تراکنش‌ها
            </span>
          </div>

          <div className="Messages-body">
            <div className="Messages-body-message">
              <div
                className="Messages-body-message-icon"
                style={{
                  backgroundColor: "rgb(239, 57, 78)",
                }}
              >
                <Image src={mIcon1} />
              </div>
              <div className="Messages-body-message-content">
                <div className="Messages-body-message-r1">
                  <p className="Messages-body-message-r1-title">
                    ۳ ماه اشتراک دیجی‌پلاس به قیمت ۱ ماه 😱
                  </p>
                  <p className="Messages-body-message-r1-subTitle">
                    ۱۲ ارسال رایگان و کلی مزایای دیگه بگیر! 🚀
                  </p>
                </div>
                <div className="Messages-body-message-r2">
                  <a href="" className="Messages-body-message-r2-more">
                    جزئیات بیشتر
                    <i class="bi bi-chevron-left"></i>
                  </a>
                  <span className="Messages-body-message-r2-date">
                    ۲۸ تیر ۱۴۰۳
                  </span>
                </div>
              </div>
            </div>
            <div
              className="Messages-body-message"
              style={{
                borderTop: "1px solid #E0E0E8",
              }}
            >
              <div
                className="Messages-body-message-icon"
                style={{
                  backgroundColor: "rgb(239, 57, 78)",
                }}
              >
                <Image src={mIcon1} />
              </div>
              <div className="Messages-body-message-content">
                <div className="Messages-body-message-r1">
                  <p className="Messages-body-message-r1-title">
                    میلیاردها تخفیف روی میلیون‌ها کالا 🔥
                  </p>
                  <p className="Messages-body-message-r1-subTitle">
                    در نسخه‌ی جدید اپلیکیشن دیجی‌کالا 👆
                  </p>
                </div>
                <div className="Messages-body-message-r2">
                  <a href="" className="Messages-body-message-r2-more">
                    جزئیات بیشتر
                    <i class="bi bi-chevron-left"></i>
                  </a>
                  <span className="Messages-body-message-r2-date">
                    ۱۶ اردیبهشت ۱۴۰۳
                  </span>
                </div>
              </div>
            </div>
            <div
              className="Messages-body-message"
              style={{
                borderTop: "1px solid #E0E0E8",
              }}
            >
              <div
                className="Messages-body-message-icon"
                style={{
                  backgroundColor: "rgb(239, 57, 78)",
                }}
              >
                <Image src={mIcon1} />
              </div>
              <div className="Messages-body-message-content">
                <div className="Messages-body-message-r1">
                  <p className="Messages-body-message-r1-title">
                    نسخه‌ی جدید اپلیکیشن دیجی‌کالا منتشر شد 🤩
                  </p>
                  <p className="Messages-body-message-r1-subTitle">
                    بروزرسانی 👇
                  </p>
                </div>
                <div className="Messages-body-message-r2">
                  <a href="" className="Messages-body-message-r2-more">
                    جزئیات بیشتر
                    <i class="bi bi-chevron-left"></i>
                  </a>
                  <span className="Messages-body-message-r2-date">
                    ۱۰ اردیبهشت ۱۴۰۳
                  </span>
                </div>
              </div>
            </div>
            <div
              className="Messages-body-message"
              style={{
                borderTop: "1px solid #E0E0E8",
              }}
            >
              <div
                className="Messages-body-message-icon"
                style={{
                  backgroundColor: "rgb(239, 57, 78)",
                }}
              >
                <Image src={mIcon1} />
              </div>
              <div className="Messages-body-message-content">
                <div className="Messages-body-message-r1">
                  <p className="Messages-body-message-r1-title">
                    سوپرتخفیف‌های حراج سرماه رو از دست نده 😱
                  </p>
                  <p className="Messages-body-message-r1-subTitle">
                    به تعداد محدود | همین حالا ببین 👇
                  </p>
                </div>
                <div className="Messages-body-message-r2">
                  <a href="" className="Messages-body-message-r2-more">
                    جزئیات بیشتر
                    <i class="bi bi-chevron-left"></i>
                  </a>
                  <span className="Messages-body-message-r2-date">
                    ۴ اردیبهشت ۱۴۰۳
                  </span>
                </div>
              </div>
            </div>
            <div
              className="Messages-body-message"
              style={{
                borderTop: "1px solid #E0E0E8",
              }}
            >
              <div
                className="Messages-body-message-icon"
                style={{
                  backgroundColor: "rgb(239, 57, 78)",
                }}
              >
                <Image src={mIcon1} />
              </div>
              <div className="Messages-body-message-content">
                <div className="Messages-body-message-r1">
                  <p className="Messages-body-message-r1-title">
                    حراج سر ماه دیجی‌کالا شروع شد 🔔
                  </p>
                  <p className="Messages-body-message-r1-subTitle">
                    با قیمت پارسال خرید کن 👇
                  </p>
                </div>
                <div className="Messages-body-message-r2">
                  <a href="" className="Messages-body-message-r2-more">
                    جزئیات بیشتر
                    <i class="bi bi-chevron-left"></i>
                  </a>
                  <span className="Messages-body-message-r2-date">
                    ۱ اردیبهشت ۱۴۰۳
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
