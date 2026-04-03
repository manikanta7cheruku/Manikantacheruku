const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


  window.__VISISTO__ = {
    site: "sk_e343532b594e6f9c23b6f4723a80e692bde1b6906fef6562",
    api: "https://api.visisto.com"
  };

<script
  src="https://cdn.visisto.com/loader.js"
  data-site="sk_e343532b594e6f9c23b6f4723a80e692bde1b6906fef6562"
  data-api="https://api.visisto.com"
  defer
></script>



