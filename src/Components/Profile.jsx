import { Component } from "react";
class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isItalian: false,
      profileName: "Strive Student",
    };
  }

  componentDidMount() {
    console.log("Componente EditProfile montato correttamente.");
  }

  handleLanguageChange = (e) => {
    this.setState({ isItalian: e.target.value === "it" });
  };

  render() {
    const { isItalian, profileName } = this.state;

    return (
      <div className="edit-profile-bg">
        <div className="container py-5" style={{ maxWidth: "750px" }}>
          <h1 className="display-4 fw-normal mb-2">
            {isItalian ? "Modifica Profilo" : "Edit Profile"}
          </h1>
          <hr className="border-secondary opacity-50 mb-0" />

          <div className="row mt-0 pt-4 gx-4">
            <div className="col-auto">
              <div className="position-relative">
                <img
                  id="pen1"
                  src="./Immagini/avatar.png"
                  className="rounded-1"
                  style={{ width: "120px" }}
                  alt="Profilo"
                />
                <div
                  className="position-absolute bottom-0 start-0 translate-middle-y ms-2 mb-2 bg-dark border border-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "26px", height: "26px" }}
                >
                  <i
                    className="bi bi-pencil-fill text-danger"
                    style={{ fontSize: "10px" }}
                  ></i>
                </div>
              </div>
            </div>

            <div className="col">
              <input
                type="text"
                className="form-control input-nome-profilo py-2 mb-4"
                defaultValue={profileName}
              />

              <div className="mb-4">
                <label className="text-secondary small fw-bold d-block mb-2">
                  {isItalian ? "Lingua:" : "Language:"}
                </label>
                <select
                  id="languageSelector"
                  className="form-select bg-black text-white border-secondary rounded-0 w-auto py-1"
                  value={isItalian ? "it" : "en"}
                  onChange={this.handleLanguageChange}
                >
                  <option value="en">English</option>
                  <option value="it">Italiano</option>
                </select>
              </div>

              <hr className="border-secondary opacity-50 my-4" />

              <div className="mb-4">
                <label className="text-secondary small fw-bold d-block mb-2 text-uppercase">
                  {isItalian
                    ? "Impostazioni di classificazione:"
                    : "Maturity Settings:"}
                </label>
                <div className="d-inline-block bg-dark text-white fw-bold px-2 py-1 mb-2">
                  {isItalian
                    ? "TUTTE LE CLASSIFICAZIONI"
                    : "ALL MATURITY RATINGS"}
                </div>
                <p className="small text-white mb-3">
                  {isItalian
                    ? "Mostra i titoli di tutte le classificazioni per questo profilo."
                    : "Show titles of all maturity ratings for this profile."}
                </p>
                <button className="btn bottone-grigio-vuoto px-4 text-white text-uppercase">
                  {isItalian ? "Modifica" : "Edit"}
                </button>
              </div>

              <hr className="border-secondary opacity-50 my-4" />

              <div className="mb-4">
                <label className="text-secondary small fw-bold d-block mb-2 text-uppercase">
                  {isItalian
                    ? "Controlli per la riproduzione automatica:"
                    : "Autoplay controls:"}
                </label>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input selezione-quadrata"
                    type="checkbox"
                    id="next"
                    defaultChecked
                  />
                  <label
                    className="form-check-label small text-white"
                    htmlFor="next"
                  >
                    {isItalian
                      ? "Riproduci automaticamente il prossimo episodio."
                      : "Autoplay next episode."}
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input selezione-quadrata"
                    type="checkbox"
                    id="preview"
                    defaultChecked
                  />
                  <label
                    className="form-check-label small text-white"
                    htmlFor="preview"
                  >
                    {isItalian
                      ? "Riproduci automaticamente le anteprime."
                      : "Autoplay previews."}
                  </label>
                </div>
              </div>

              <hr className="border-secondary opacity-50 my-5" />

              <div className="d-flex flex-wrap gap-3">
                <button className="bottone-conferma-rosso">
                  {isItalian ? "Salva" : "Save"}
                </button>
                <button className="btn bottone-grigio-vuoto px-4 text-uppercase text-white">
                  {isItalian ? "Annulla" : "Cancel"}
                </button>
                <button className="btn bottone-grigio-vuoto px-4 text-uppercase text-white">
                  {isItalian ? "Elimina Profilo" : "Delete Profile"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
