/* PTN 29 Oct 17 -- Updated 31 Mar 20
   Adventures with my chucks webpage/app

*/

// Templating the picture display
const collectionCount = 152 // Needs to be divisble by four
const numCols = 4 // Four pictures per row
const pictureTemplate = document.querySelector('[data-pictures-template]')
const pictureContainer = document.querySelector('[data-pictures]')

function displayPictures() {
  for (let i = 0; i < collectionCount; i += numCols) {
    const picContainer = pictureTemplate.content.cloneNode(true)

    picContainer.querySelector('[data-id-first]').innerText = i + 1
    picContainer.querySelector('[data-id-second]').innerText = i + 2
    picContainer.querySelector('[data-id-third]').innerText = i + 3
    picContainer.querySelector('[data-id-fourth]').innerText = i + 4

    // Need to use back ticks for string interpolation
    picContainer.querySelector('[data-img-first]').src = `../images/Converse${i+1}.jpg`
    picContainer.querySelector('[data-img-second]').src = `../images/Converse${i+2}.jpg`
    picContainer.querySelector('[data-img-third]').src = `../images/Converse${i+3}.jpg`
    picContainer.querySelector('[data-img-fourth]').src = `../images/Converse${i+4}.jpg`

    // Add to the container for rendering
    pictureContainer.append(picContainer)
  }
}

displayPictures()
