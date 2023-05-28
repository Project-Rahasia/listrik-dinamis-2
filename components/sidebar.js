const getChapClass = (path) => {
  return this.location.pathname.substr(7, 8) === path ? "show" : "";
};

const getCollapsed = (path) => {
  return this.location.pathname.substr(7, 8) !== path ? "collapsed" : "";
};

const getChapChild = (path) => {
  return this.location.pathname.substring(7) === path ? "course-active" : "";
};

document.getElementById("sidebar").innerHTML = `
<h4>Daftar Materi</h4>

<div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button ${getCollapsed(
        "course-0"
      )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Pendahuluan
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse ${getChapClass(
      "course-0"
    )}" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <div class="list-course mb-3">
          <a href="/pages/course-0/0/" class="list-course-child isDisabled sub-1-0 ${getChapChild(
            "course-0/0/"
          )}">Kompetensi Dasar</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/course-0/1/" class="list-course-child isDisabled sub-1-1 ${getChapChild(
            "course-0/1/"
          )}">Peta Konsep</a>
        </div>
        <div class="list-course">
          <a href="/pages/course-0/2/" class="list-course-child isDisabled sub-1-2 ${getChapChild(
            "course-0/2/"
          )}">Pendahuluan</a>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button ${getCollapsed(
        "course-1"
      )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Konsep Listrik Dinamis
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse ${getChapClass(
      "course-1"
    )}" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <div class="list-course mb-3">
          <a href="/pages/course-1/0/" class="list-course-child isDisabled sub-2-0 ${getChapChild(
            "course-1/0/"
          )}">Arus Listrik</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/course-1/1/" class="list-course-child isDisabled sub-2-1 ${getChapChild(
            "course-1/1/"
          )}">Beda Potensial Listrik</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/course-1/2/" class="list-course-child isDisabled sub-2-2 ${getChapChild(
            "course-1/2/"
          )}">Hambatan Listrik</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/course-1/3/" class="list-course-child isDisabled sub-2-3 ${getChapChild(
            "course-1/3/"
          )}">Rangkaian Listrik</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/course-1/4/" class="list-course-child isDisabled sub-2-4 ${getChapChild(
            "course-1/4/"
          )}">Karakteristik Rangkaian Listrik (Hukum I Kirchhoff)</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/course-1/5/" class="list-course-child isDisabled sub-2-5 ${getChapChild(
            "course-1/5/"
          )}">Karakteristik Rangkaian Listrik (Rangkaian Hambatan Listrik)</a>
        </div>
        <div class="list-course">
          <a href="/pages/course-1/6/" class="list-course-child isDisabled sub-2-6 ${getChapChild(
            "course-1/6/"
          )}">Kuis</a>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button ${getCollapsed(
        "course-2"
      )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Sumber Listrik, Penggunaan Energi Listrik, Upaya Penghematan, dan
      Pencegahan bahaya Penggunaannya
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse ${getChapClass(
      "course-2"
    )}" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <div class="list-course mb-3">
          <a href="/pages/course-2/0/" class="list-course-child isDisabled sub-3-0 ${getChapChild(
            "course-2/0/"
          )}">Sumber Arus Listrik</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/course-2/1/" class="list-course-child isDisabled sub-3-1 ${getChapChild(
            "course-2/1/"
          )}">Sumber-Sumber Energi Listrik</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/course-2/2/" class="list-course-child isDisabled sub-3-2 ${getChapChild(
            "course-2/2/"
          )}">Penggunaan Energi Listrik di Lingkungan Sekitar</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/course-2/3/" class="list-course-child isDisabled sub-3-3 ${getChapChild(
            "course-2/3/"
          )}">Upaya Penghematan Energi Listrik</a>
        </div>
        <div class="list-course mb-3">
          <a href="/pages/course-2/4/" class="list-course-child isDisabled sub-3-4 ${getChapChild(
            "course-2/4/"
          )}">Pencegahan Bahaya Penggunaan Listrik</a>
        </div>
        <div class="list-course">
          <a href="/pages/course-2/5/" class="list-course-child isDisabled sub-3-5 ${getChapChild(
            "course-2/5/"
          )}">Kuis</a>
        </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
      <button class="accordion-button ${getCollapsed(
        "latihan"
      )}" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Evaluasi
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse ${getChapClass(
      "latihan"
    )}" aria-labelledby="panelsStayOpen-headingFour">
      <div class="accordion-body">
        <div class="list-course">
          <a href="/pages/course-3/0/" class="list-course-child isDisabled sub-4-0 ${getChapChild(
            "course-3/0/"
          )}">Evaluasi</a>
        </div>
      </div>
    </div>
  </div>
</div>
`;
