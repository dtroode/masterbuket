const mapLinks = document.querySelectorAll('a')

// Aadding an event listener to each link
mapLinks.forEach(link => {
  // Getting a href of the link
  const href = link.attributes.href.value;
  // Getting links with the same href
  const sameLinks = document.querySelectorAll(`a[href="${href}"]`)

  // On hover add a hovered class to all link with the same href
  link.addEventListener('mouseover', () => {
    sameLinks.forEach(a => {
      a.classList.add("hovered");
    })
  })

  // Remove class on unhover
  link.addEventListener('mouseout', () => {
    sameLinks.forEach(a => {
      a.classList.remove("hovered");
    })
  })
})
