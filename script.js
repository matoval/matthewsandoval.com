(function () {
  var command = document.body.getAttribute('data-command') || '';
  var promptEl = document.getElementById('prompt-text');
  var loadingEl = document.getElementById('loading');
  var siteEl = document.getElementById('site');
  var mobileNavBtn = document.getElementById('mobile-nav-btn');
  var i = 0;

  // Set copyright year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function typeNext() {
    if (i < command.length) {
      promptEl.textContent += command[i++];
      setTimeout(typeNext, 60);
    } else {
      setTimeout(showSite, 500);
    }
  }

  function showSite() {
    loadingEl.style.display = 'none';
    siteEl.style.display = 'flex';
    siteEl.style.flexDirection = 'column';
    siteEl.style.flex = '1';
  }

  setTimeout(typeNext, 400);

  mobileNavBtn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    mobileNavBtn.textContent = open ? '[X]' : '[ ]';
  });
})();
