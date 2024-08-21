import Image from "next/image";
import icon6 from "../../assets/icon6.png";

export default function giftCard() {
  return (
    <>
      <div className="GiftCard col-9">
        <div className="GiftCard-container">
          <section className="GiftCard-row1">
            <div className="GiftCard-row1-title">
              <p>کارت‌های هدیه</p>
            </div>
          </section>

          <section className="GiftCard-row2">
            <ul className="GiftCard-row2-tabs">
              <li className="GiftCard-row2-tabs-item">
                <div className="GiftCard-row2-tabs-item-text">
                  <span>هدیه گرفتم</span>
                </div>
                <div className="GiftCard-row2-tabs-item-underline"></div>
              </li>
              <li className="GiftCard-row2-tabs-item">
                <div className="GiftCard-row2-tabs-item-text" style={{
                    fontWeight : "400"
                }}>
                  <span>هدیه دادم</span>
                </div>
              </li>
            </ul>

            <ul className="GiftCard-row2-list">
              <li className="GiftCard-row2-list-item">
                <div className="GiftCard-row2-list-item-contaner">
                  <div className="GiftCard-row2-list-item-empty">
                    <div className="GiftCard-row2-list-item-empty-Icon">
                      <Image src={icon6} />
                    </div>
                    <span className="GiftCard-row2-list-item-empty-Text">
                      کسی به شما کارت هدیه داده‌؟ اینجا اضافه کنید تا بعدا
                      دنبالش نگردید
                    </span>
                    <button className="btn GiftCard-row2-list-item-empty-edit">
                      اضافه کردن کارت هدیه
                    </button>
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
