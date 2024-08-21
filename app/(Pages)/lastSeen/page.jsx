import Image from "next/image";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
import card6 from "../../assets/card6.jpg";
import card7 from "../../assets/card7.jpg";
import card8 from "../../assets/card8.jpg";

export default function LastSeen() {
  return (
    <>
      <div className="LastSeen col-9">
        <div className="LastSeen-container">
          <div className="LastSeen-header">
            <div className="LastSeen-header-title">
              <p>بازدید‌های اخیر</p>
              <div className="LastSeen-header-title-underline"></div>
            </div>
          </div>

          <div className="LastSeen-body row">
            <section className="LastSeen-body-card col-6 B-l B-b">
              <a href="" className="LastSeen-body-card-container">
                <div className="Br">
                  <br />
                </div>
                <div className="LastSeen-body-card-image">
                  <Image src={card1} />
                </div>
                <div className="LastSeen-body-card-text">
                  <div className="LastSeen-body-card-text-r1">
                    <span>غیراصل</span>
                  </div>
                  <h3 className="LastSeen-body-card-text-r2">
                    کیف رودوشی مردانه مدل KS-0085
                  </h3>
                  <div className="LastSeen-body-card-text-r3">
                    <p></p>
                    <div className="Score">
                      <span>۴.۴</span>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div className="LastSeen-body-card-text-r4">
                    <span>۲۴۵,۰۰۰</span>
                    تومان
                  </div>
                </div>
                <div className="LastSeen-body-card-buttons">
                  <button className="btn LastSeen-body-card-buttons-remove">
                    <i class="bi bi-trash"></i>
                    حذف
                  </button>
                  <button className="btn LastSeen-body-card-buttons-add">
                    <i class="bi bi-cart2"></i>
                    اضافه به سبد
                  </button>
                </div>
              </a>
            </section>
            <section className="LastSeen-body-card col-6 B-b">
              <a href="" className="LastSeen-body-card-container">
                <div className="Br">
                  <br />
                </div>
                <div className="LastSeen-body-card-image">
                  <Image src={card2} />
                </div>
                <div className="LastSeen-body-card-text">
                  <div className="LastSeen-body-card-text-r1">
                    <span>غیراصل</span>
                  </div>
                  <h3 className="LastSeen-body-card-text-r2">
                    کیف رودوشی مدل S-20
                  </h3>
                  <div className="LastSeen-body-card-text-r3">
                    <p></p>
                    <div className="Score">
                      <span>۴.۱</span>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div className="LastSeen-body-card-text-r4">
                    <span>۱۳۶,۰۶۰</span>
                    تومان
                  </div>
                </div>
                <div className="LastSeen-body-card-buttons">
                  <button className="btn LastSeen-body-card-buttons-remove">
                    <i class="bi bi-trash"></i>
                    حذف
                  </button>
                  <button className="btn LastSeen-body-card-buttons-add">
                    <i class="bi bi-cart2"></i>
                    اضافه به سبد
                  </button>
                </div>
              </a>
            </section>
            <section className="LastSeen-body-card col-6 B-l B-b">
              <a href="" className="LastSeen-body-card-container">
                <div className="Br">
                  <br />
                </div>
                <div className="LastSeen-body-card-image">
                  <Image src={card3} />
                </div>
                <div className="LastSeen-body-card-text">
                  <div className="LastSeen-body-card-text-r1">
                    <span></span>
                  </div>
                  <h3 className="LastSeen-body-card-text-r2">
                    کیف رودوشی اسکای با مدل 5678
                  </h3>
                  <div className="LastSeen-body-card-text-r3">
                    <p></p>
                    <div className="Score">
                      <span>۴.۶</span>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div className="LastSeen-body-card-text-r4">
                    <span>۴۹۵,۰۰۰</span>
                    تومان
                  </div>
                </div>
                <div className="LastSeen-body-card-buttons">
                  <button className="btn LastSeen-body-card-buttons-remove">
                    <i class="bi bi-trash"></i>
                    حذف
                  </button>
                  <button className="btn LastSeen-body-card-buttons-add">
                    <i class="bi bi-cart2"></i>
                    اضافه به سبد
                  </button>
                </div>
              </a>
            </section>
            <section className="LastSeen-body-card col-6 B-b">
              <a href="" className="LastSeen-body-card-container">
                <div className="Br">
                  <br />
                </div>
                <div className="LastSeen-body-card-image">
                  <Image src={card4} />
                </div>
                <div className="LastSeen-body-card-text">
                  <div className="LastSeen-body-card-text-r1">
                    <span></span>
                  </div>
                  <h3 className="LastSeen-body-card-text-r2">
                  کیف رودوشی مردانه مدل BR6
                  </h3>
                  <div className="LastSeen-body-card-text-r3">
                    <p></p>
                    <div className="Score">
                      <span>۴.۱</span>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div className="LastSeen-body-card-text-r4">
                    <span>۱۳۲,۰۰۰</span>
                    تومان
                  </div>
                </div>
                <div className="LastSeen-body-card-buttons">
                  <button className="btn LastSeen-body-card-buttons-remove">
                    <i class="bi bi-trash"></i>
                    حذف
                  </button>
                  <button className="btn LastSeen-body-card-buttons-add">
                    <i class="bi bi-cart2"></i>
                    اضافه به سبد
                  </button>
                </div>
              </a>
            </section>
            <section className="LastSeen-body-card col-6 B-l B-b">
              <a href="" className="LastSeen-body-card-container">
                <div className="Br">
                  <br />
                </div>
                <div className="LastSeen-body-card-image">
                  <Image src={card5} />
                </div>
                <div className="LastSeen-body-card-text">
                  <div className="LastSeen-body-card-text-r1">
                    <span></span>
                  </div>
                  <h3 className="LastSeen-body-card-text-r2">
                  کیف رودوشی مردانه مدل DL-21
                  </h3>
                  <div className="LastSeen-body-card-text-r3">
                    <p>تنها ۲ عدد در انبار باقی مانده</p>
                    <div className="Score">
                      <span>۳.۹</span>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div className="LastSeen-body-card-text-r4">
                    <span>۱۴۷,۰۰۰</span>
                    تومان
                  </div>
                </div>
                <div className="LastSeen-body-card-buttons">
                  <button className="btn LastSeen-body-card-buttons-remove">
                    <i class="bi bi-trash"></i>
                    حذف
                  </button>
                  <button className="btn LastSeen-body-card-buttons-add">
                    <i class="bi bi-cart2"></i>
                    اضافه به سبد
                  </button>
                </div>
              </a>
            </section>
            <section className="LastSeen-body-card col-6 B-b">
              <a href="" className="LastSeen-body-card-container">
                <div className="Br">
                  <br />
                </div>
                <div className="LastSeen-body-card-image">
                  <Image src={card6} />
                </div>
                <div className="LastSeen-body-card-text">
                  <div className="LastSeen-body-card-text-r1">
                    <span>غیراصل</span>
                  </div>
                  <h3 className="LastSeen-body-card-text-r2">
                  کیف کراس بادی مردانه مدل Yikes 890
                  </h3>
                  <div className="LastSeen-body-card-text-r3">
                    <p></p>
                    <div className="Score">
                      <span>۴.۹</span>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div className="LastSeen-body-card-text-r4">
                    <span>۲۸۸,۰۰۰</span>
                    تومان
                  </div>
                </div>
                <div className="LastSeen-body-card-buttons">
                  <button className="btn LastSeen-body-card-buttons-remove">
                    <i class="bi bi-trash"></i>
                    حذف
                  </button>
                  <button className="btn LastSeen-body-card-buttons-add">
                    <i class="bi bi-cart2"></i>
                    اضافه به سبد
                  </button>
                </div>
              </a>
            </section>
            <section className="LastSeen-body-card col-6 B-l B-b">
              <a href="" className="LastSeen-body-card-container">
                <div className="Br">
                  <br />
                </div>
                <div className="LastSeen-body-card-image">
                  <Image src={card7} />
                </div>
                <div className="LastSeen-body-card-text">
                  <div className="LastSeen-body-card-text-r1">
                    <span></span>
                  </div>
                  <h3 className="LastSeen-body-card-text-r2">
                  کیف رودوشی مردانه مدل YU
                  </h3>
                  <div className="LastSeen-body-card-text-r3">
                    <p></p>
                    <div className="Score">
                      <span>۳.۸</span>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div className="LastSeen-body-card-text-r4">
                    <span>۱۳۲,۰۰۰</span>
                    تومان
                  </div>
                </div>
                <div className="LastSeen-body-card-buttons">
                  <button className="btn LastSeen-body-card-buttons-remove">
                    <i class="bi bi-trash"></i>
                    حذف
                  </button>
                  <button className="btn LastSeen-body-card-buttons-add">
                    <i class="bi bi-cart2"></i>
                    اضافه به سبد
                  </button>
                </div>
              </a>
            </section>
            <section className="LastSeen-body-card col-6 B-b">
              <a href="" className="LastSeen-body-card-container">
                <div className="Br">
                  <br />
                </div>
                <div className="LastSeen-body-card-image">
                  <Image src={card8} />
                </div>
                <div className="LastSeen-body-card-text">
                  <div className="LastSeen-body-card-text-r1">
                    <span></span>
                  </div>
                  <h3 className="LastSeen-body-card-text-r2">
                  کیف دستی مردانه مدل JL234
                  </h3>
                  <div className="LastSeen-body-card-text-r3">
                    <p></p>
                    <div className="Score">
                      <span>۴</span>
                      <i class="bi bi-star-fill"></i>
                    </div>
                  </div>
                  <div className="LastSeen-body-card-text-r4">
                    <span>۱۲۵,۵۰۰</span>
                    تومان
                  </div>
                </div>
                <div className="LastSeen-body-card-buttons">
                  <button className="btn LastSeen-body-card-buttons-remove">
                    <i class="bi bi-trash"></i>
                    حذف
                  </button>
                  <button className="btn LastSeen-body-card-buttons-add">
                    <i class="bi bi-cart2"></i>
                    اضافه به سبد
                  </button>
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
