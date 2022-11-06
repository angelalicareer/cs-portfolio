function toggleHiddenAbout() {
  let p = document.getElementById('hidden-p')
  if (p.classList.contains('show')) {
    p.className='';
    p.classList.add('d-none', 'd-sm-none', 'd-md-none', 'd-lg-block', 'd-xl-block')
  } else {
    p.className='';
    p.classList.add('show')
  }
}