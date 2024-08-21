export default function MobileFooter() {
  return (
    <>
      <div className="MobileFooter">
        <div className="MobileFooter-container row">
          <a href="" className="MobileFooter-item col-3">
            <i class="bi bi-house"></i>
            <p>خانه</p>
          </a>
          <a href="" className="MobileFooter-item col-3">
            <i class="bi bi-grid"></i>
            <p>دسته‌بندی</p>
          </a>
          <a href="" className="MobileFooter-item col-3">
            <i class="bi bi-cart2"></i>
            <p>سبد خرید</p>
          </a>
          <a href="" className="MobileFooter-item col-3">
          <i class="bi bi-person-fill" style={{color : "#424750"}}></i>
            <p style={{fontWeight : "700"}}>دیجی‌کالای من</p>
          </a>
        </div>
      </div>
    </>
  );
}
