document.querySelector(".navbar").innerHTML = `
<div class="container">
  <a class="navbar-brand" href="/">
    <img src="/assets/img/32x32.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
    Listrik Dinamis
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" aria-current="page" href="/">Beranda</a>
      <a class="nav-link" href="/about.html">Tentang</a>
    </div>
  </div>
</div>
`;
