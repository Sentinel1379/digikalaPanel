import Image from "next/image";
import icon3 from "../../assets/icon3.svg";

export default function Orders() {
  return (
    <>
      <div className="Order col-9">
        <div className="Order-container">
          <section className="Order-row1">
            <div className="Order-row1-title">
              <p>تاریخچه سفارشات</p>
            </div>
            <div className="Order-row1-search">
              <i class="bi bi-search"></i>
            </div>
          </section>

          <section className="Order-row2">
            <ul className="Order-row2-tabs">
              <li className="Order-row2-tabs-item">
                <div className="Order-row2-tabs-item-text">
                  <span>جاری</span>
                </div>
                <div className="Order-row2-tabs-item-underline"></div>
              </li>
              <li className="Order-row2-tabs-item">
                <div className="Order-row2-tabs-item-text">
                  <span>تحویل شده</span>
                  <div className="Order-row2-tabs-item-text-badge">۷</div>
                </div>
              </li>
              <li className="Order-row2-tabs-item">
                <div className="Order-row2-tabs-item-text">
                  <span>مرجوع شده</span>
                  <div className="Order-row2-tabs-item-text-badge">۰</div>
                </div>
              </li>
              <li className="Order-row2-tabs-item">
                <div className="Order-row2-tabs-item-text">
                  <span>لغو شده</span>
                  <div className="Order-row2-tabs-item-text-badge">۴</div>
                </div>
              </li>
            </ul>

            <ul className="Order-row2-list">
              <li className="Order-row2-list-item">
                <div className="Order-row2-list-item-contaner">
                  <div className="Order-row2-list-item-emptyIcon">
                    <Image src={icon3} />
                  </div>
                  <span className="Order-row2-list-item-emptyText">
                    هنوز هیچ سفارشی ندادید
                  </span>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
