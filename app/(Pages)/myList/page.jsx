import Image from "next/image";
import icon4 from "../../assets/icon4.svg";

export default function MyList() {
  return (
    <>
      <div className="MyList col-9">
        <div className="MyList-container">
          <section className="MyList-row1">
            <div className="MyList-row1-title">
              <p>لیست‌ها</p>
            </div>
          </section>
          <section className="MyList-row2">
            <ul className="MyList-row2-tabs">
              <li className="MyList-row2-tabs-item">
                <div className="MyList-row2-tabs-item-text">
                  <span>لیست علاقه‌مندی</span>
                </div>
                <div className="MyList-row2-tabs-item-underline"></div>
              </li>
              <li className="MyList-row2-tabs-item">
                <div className="MyList-row2-tabs-item-text">
                  <span>لیست‌های دیگر </span>
                </div>
              </li>
              <li className="MyList-row2-tabs-item">
                <div className="MyList-row2-tabs-item-text">
                  <span>اطلاع‌رسانی‌ها</span>
                </div>
              </li>
            </ul>

            <ul className="MyList-row2-list">
              <li className="MyList-row2-list-item">
                <div className="MyList-row2-list-item-contaner">
                  <div className="MyList-row2-list-item-notif">
                    <div className="MyList-row2-list-item-notif-text">
                      <p>
                        <i class="bi bi-bell"></i>
                        اطلاع رسانی ها
                      </p>
                      <span>
                        اطلاع رسانی تخفیف و روبه اتمام بودن موجودی این کالاها
                      </span>
                    </div>
                    <div className="form-check form-switch MyList-row2-list-item-notif-btn">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </div>
                  <div className="MyList-row2-list-item-empty">
                    <div className="MyList-row2-list-item-empty-Icon">
                      <Image src={icon4} />
                    </div>
                    <span className="MyList-row2-list-item-empty-Text">
                    لیست علاقه‌مندی‌های شما خالی است.
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
