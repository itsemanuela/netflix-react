const MyFooter = () => {
  return (
    <footer class="mt-5 py-5 container">
      <div class="row justify-content-center">
        <div class="col-6 col-md-2 mb-3">
          <div class="d-flex mb-3">
            <a
              href="https://www.facebook.com/..."
              target="_blank"
              class="text-secondary me-3"
            >
              <i class="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://www.instagram.com/..."
              target="_blank"
              class="text-secondary me-3"
            >
              <i class="fab fa-instagram-square fa-lg"></i>
            </a>
            <a
              href="https://x.com/..."
              target="_blank"
              class="text-secondary me-3"
            >
              <i class="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="https://www.youtube.com/..."
              target="_blank"
              class="text-secondary"
            >
              <i class="fab fa-youtube fa-lg"></i>
            </a>
          </div>

          <ul class="list-unstyled mt-3">
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Audio and Subtitles
              </a>
            </li>
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Media Center
              </a>
            </li>
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Contact us
              </a>
            </li>
          </ul>
          <button
            type="button"
            class="btn btn-outline-secondary btn-sm mt-3 rounded-0"
          >
            Service Code
          </button>
          <div class="mt-3">
            <p>
              <a class="text-decoration-none text-secondary" href="#">
                <i class="far fa-copyright"></i> 1997-2019 Netflix, Inc.
              </a>
            </p>
          </div>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <ul class="list-unstyled mt-md-5">
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Audio Description
              </a>
            </li>
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Legal Notices
              </a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <ul class="list-unstyled mt-md-5">
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Cookies Preferences
              </a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md-2 mb-3">
          <ul class="list-unstyled mt-md-5">
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" class="text-secondary text-decoration-none small">
                Corporate Information
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default MyFooter;
