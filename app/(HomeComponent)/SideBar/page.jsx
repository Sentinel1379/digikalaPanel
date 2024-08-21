import SideBarItems from "./SideBarItems/page";

export default function SideBar() {
  return (
    <>
      <div className="SideBar col-3 p-1">
        <div className="SideBar-container">
          <section className="SideBar-row1">
            <div className="SideBar-row1-prof">
              <div className="SideBar-prof">
                <p className="SideBar-prof-name">صادق آنالويي</p>
                <p className="SideBar-prof-number">۰۹۱۸۶۹۱۶۰۲۷</p>
              </div>
              <a href="/profileDetail" className="SideBar-prof-editIcon">
                <i class="bi bi-pencil"></i>
              </a>
            </div>
            <div className="SideBar-row1-pay">
              <div className="SideBar-pay-wallet">
                <div className="SideBar-pay-wallet-title">
                  <h3>کیف پول</h3>
                  <div className="SideBar-pay-wallet-much">
                    <span className="me-1">-</span>
                    تومان
                  </div>
                </div>
                <span className="SideBar-pay-wallet-edit">
                  فعالسازی
                  <i class="bi bi-chevron-left"></i>
                </span>
              </div>
              <div className="SideBar-pay-club">
                <div className="SideBar-pay-club-title">
                  <a href="">
                    <h3>دیجی کلاب</h3>
                  </a>
                  <div>
                    <p>۵</p>
                    <span>امتیاز</span>
                  </div>
                </div>
                <a href="" className="SideBar-pay-club-edit">
                  مشاهده‌ی مأموریت‌ها
                  <i class="bi bi-chevron-left"></i>
                </a>
              </div>
            </div>
          </section>
          <SideBarItems/>
        </div>
      </div>
    </>
  );
}
