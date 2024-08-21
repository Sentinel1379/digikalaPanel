export default function ModalAddress() {
  return (
    <div
      className="modal fade Modal-address"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content Modal-address-content">
          <div className="modal-header Modal-address-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              انتخاب آدرس
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body Modal-address-body">
            <div className="form-check Modal-address-body-item">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                بلوار قدس ،خ ابوریحان ، ک بوستان6
              </label>
            </div>
            <div className="form-check Modal-address-body-item">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" for="flexRadioDefault1">
                تهران ، خ پیروزی ، ک مدیر
              </label>
            </div>
            <div className="Modal-address-add">
              <button className="btn">
                <i class="bi bi-plus-circle"></i>
                <span>افزودن آدرس</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
