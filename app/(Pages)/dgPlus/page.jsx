import Image from "next/image";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";

export default function DgPlus() {
  return (
    <>
      <div className="DgPlus col-9">
        <section className="DgPlus-row1">
          <div className="DgPlus-row1-title">
            <p>دیجی‌پلاس</p>
          </div>
          <div className="DgPlus-row1-buy">
            <p>اشتراک فعال ندارید</p>
            <div>
              <button className="btn">خرید اشتراک</button>
            </div>
          </div>
          <div className="DgPlus-row1-history">
            <a href="" className="DgPlus-row1-history-a">
              <div className="DgPlus-row1-history-a-text">
                <i class="bi bi-hourglass-split"></i>
                <span>تاریخچه اشتراک‌های شما</span>
              </div>
              <i class="bi bi-chevron-left"></i>
            </a>
          </div>
        </section>

        <section className="DgPlus-row2">
          <div
            className="DgPlus-row2-col"
            style={{
              borderLeftn: "1px solid #f0f0f1",
            }}
          >
            <div className="d-flex align-items-center">
              <div className="DgPlus-row2-col-image">
                <Image src={icon1} />
              </div>
              <div className="DgPlus-row2-col-text">
                <p>۰تومان</p>
                <span>هدیه نقدی دریافت شده</span>
              </div>
            </div>
            <div className="DgPlus-row2-col-detail">
              <a href="">
                جزئیات
                <i class="bi bi-chevron-left"></i>
              </a>
            </div>
          </div>
          <div className="DgPlus-row2-col">
            <div className="d-flex align-items-center">
              <div className="DgPlus-row2-col-image">
                <Image src={icon2} />
              </div>
              <div className="DgPlus-row2-col-text">
                <p>۰تومان</p>
                <span>ارسال رایگان استفاده شده</span>
              </div>
            </div>
            <div className="DgPlus-row2-col-detail">
              <a href="">
                جزئیات
                <i class="bi bi-chevron-left"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
