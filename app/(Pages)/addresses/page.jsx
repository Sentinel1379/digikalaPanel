import Image from "next/image";
import add1 from "../../assets/add1.jpg";
import add2 from "../../assets/add2.jpg";

export default function Addresses() {
  return (
    <>
      <div className="Address col-9">
        <div className="Address-container">
          <div className="Address-header">
            <div className="Address-header-title">
              <p>آدرس‌ها</p>
              <div className="Address-header-title-underline"></div>
            </div>

            <button className="btn Address-header-editBTN">
              <i class="bi bi-geo-alt"></i>
              <span>ثبت آدرس جدید</span>
            </button>
          </div>

          <div className="Address-body">
            <section className="Address-body-item">
              <div className="Address-body-item-row1">
                <p>بلوار قدس ،خ ابوریحان ، ک بوستان6</p>
                <button className="Address-body-item-row1-more">
                  <i class="bi bi-three-dots-vertical"></i>
                  <div className="Address-body-item-row1-more-menu">
                    <div className="More-menu-container">
                      <button className="btn More-menu-item">
                        <i class="bi bi-pencil"></i>
                        <span>ویرایش آدرس</span>
                      </button>
                      <button className="btn More-menu-item">
                        <i class="bi bi-trash"></i>
                        <span>حذف آدرس</span>
                      </button>
                    </div>
                  </div>
                </button>
              </div>
              <div className="Address-body-item-row2">
                <div className="Address-body-item-row2-text">
                  <div>
                    <i class="bi bi-bezier2"></i>
                    <span>اراک</span>
                  </div>
                  <div>
                    <i class="bi bi-envelope"></i>
                    <span>۳۸۱۸۸۱۷۹۳۷</span>
                  </div>
                  <div>
                    <i class="bi bi-telephone"></i>
                    <span>۰۹۱۸۶۹۱۶۰۲۷</span>
                  </div>
                  <div>
                    <i class="bi bi-person"></i>
                    <span>صادق آنالويي</span>
                  </div>
                </div>
                <div className="Address-body-item-row2-image">
                  <Image src={add1} />
                </div>
              </div>
            </section>
            <section className="Address-body-item">
              <div className="Address-body-item-row1">
                <p>تهران ، خ پیروزی ، ک مدیر</p>
                <button className="Address-body-item-row1-more">
                  <i class="bi bi-three-dots-vertical"></i>
                  <div className="Address-body-item-row1-more-menu">
                    <div className="More-menu-container">
                      <button className="btn More-menu-item">
                        <i class="bi bi-pencil"></i>
                        <span>ویرایش آدرس</span>
                      </button>
                      <button className="btn More-menu-item">
                        <i class="bi bi-trash"></i>
                        <span>حذف آدرس</span>
                      </button>
                    </div>
                  </div>
                </button>
              </div>
              <div className="Address-body-item-row2">
                <div className="Address-body-item-row2-text">
                  <div>
                    <i class="bi bi-bezier2"></i>
                    <span>تهران</span>
                  </div>
                  <div>
                    <i class="bi bi-envelope"></i>
                    <span>۳۸۱۸۸۱۷۹۳۷</span>
                  </div>
                  <div>
                    <i class="bi bi-telephone"></i>
                    <span>۰۹۱۸۶۹۱۶۰۲۷</span>
                  </div>
                  <div>
                    <i class="bi bi-person"></i>
                    <span>صادق آنالويي</span>
                  </div>
                </div>
                <div className="Address-body-item-row2-image">
                  <Image src={add2} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
