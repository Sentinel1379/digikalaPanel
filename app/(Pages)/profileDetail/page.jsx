export default function ProfileDetail() {
  return (
    <>
      <div className="profileDetail col-9">
        <div className="profileDetail-container">
          <section className="profileDetail-row1">
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

          <section className="profileDetail-row2">
            <div className="profileDetail-row2-container row">
              <section className="profileDetail-row2-item col-6 Border-bottom Border-left">
                <div className="profileDetail-row2-item-text">
                  <p>نام و نام خانوادگی</p>
                  <span>صادق آنالويي</span>
                </div>
                <div className="profileDetail-row2-item-edit">
                  <span>
                    <i class="bi bi-pencil"></i>
                  </span>
                </div>
              </section>
              <section className="profileDetail-row2-item col-6 Border-bottom">
                <div className="profileDetail-row2-item-text">
                  <p>کد ملی</p>
                  <span>1234567890</span>
                </div>
                <div className="profileDetail-row2-item-edit">
                  <span>
                    <i class="bi bi-pencil"></i>
                  </span>
                </div>
              </section>
              <section className="profileDetail-row2-item col-6 Border-bottom Border-left">
                <div className="profileDetail-row2-item-text">
                  <div className="d-flex align-items-center">
                    <p>شماره موبایل</p>
                    <div className="Accepted">تاییدشده</div>
                  </div>
                  <span>صادق آنالويي</span>
                </div>
                <div className="profileDetail-row2-item-edit">
                  <span>
                    <i class="bi bi-pencil"></i>
                  </span>
                </div>
              </section>
              <section className="profileDetail-row2-item col-6 Border-bottom">
                <div className="profileDetail-row2-item-text">
                  <p>ایمیل</p>
                  <span>example@gmail.com</span>
                </div>
                <div className="profileDetail-row2-item-edit">
                  <span>
                    <i class="bi bi-pencil"></i>
                  </span>
                </div>
              </section>
              <section className="profileDetail-row2-item col-6 Border-bottom Border-left">
                <div className="profileDetail-row2-item-text">
                  <p>رمز عبور</p>
                  <span>•••••••</span>
                </div>
                <div className="profileDetail-row2-item-edit">
                  <span>
                    <i class="bi bi-pencil"></i>
                  </span>
                </div>
              </section>
              <section className="profileDetail-row2-item col-6 Border-bottom">
                <div className="profileDetail-row2-item-text">
                  <div className="d-flex align-items-center">
                    <p>روش بازگرداندن پول من</p>
                    <div className="Accepted">تاییدشده</div>
                  </div>
                  <span>ﺷﻤﺎره ﺷﺒﺎ - IR۳۳۰۱۹۰۰۰۰۰۰۰۰</span>
                </div>
                <div className="profileDetail-row2-item-edit">
                  <span>
                    <i class="bi bi-pencil"></i>
                  </span>
                </div>
              </section>
              <section className="profileDetail-row2-item col-6 Border-bottom Border-left">
                <div className="profileDetail-row2-item-text">
                  <p>تاریخ تولد</p>
                  <span>۱۳۷۲/۱/۱۸</span>
                </div>
                <div className="profileDetail-row2-item-edit">
                  <span>
                    <i class="bi bi-pencil"></i>
                  </span>
                </div>
              </section>
              <section className="profileDetail-row2-item col-6">
                <div className="profileDetail-row2-item-text">
                  <p>شغل</p>
                  <span>برنامه نویس</span>
                </div>
                <div className="profileDetail-row2-item-edit">
                  <span>
                    <i class="bi bi-pencil"></i>
                  </span>
                </div>
              </section>
              <section className="profileDetail-row2-item col-6">
                <div className="profileDetail-row2-item-text">
                  <p>شغل</p>
                </div>
                <div className="profileDetail-row2-item-edit">
                  <span>
                    <i class="bi bi-plus-lg"></i>
                  </span>
                </div>
              </section>
            </div>
          </section>

          <section className="profileDetail-row3">
            <div className="profileDetail-row3-title">
              <span>
                <p>اطلاعات حقوقی</p>
                <div className="profileDetail-row3-title-underline"></div>
              </span>
            </div>
            <div className="profileDetail-row3-text">
              <p>
                این گزینه برای کسانی است که نیاز به خرید سازمانی (با فاکتور رسمی
                و گواهی ارزش‌افزوده) دارند.
              </p>
              <span className="">
                ثبت اطلاعات حقوقی
                <i class="bi bi-chevron-left"></i>
              </span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
