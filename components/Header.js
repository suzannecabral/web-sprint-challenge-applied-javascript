// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    // create elements
    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const title = document.createElement('h1');
    const weatherSpan = document.createElement('span');

    //add styles
    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    weatherSpan.classList.add('temp');

    //add content
    dateSpan.innerHTML = 'MARCH 28, 2020';
    title.innerHTML = 'Lambda Times';
    weatherSpan.innerHTML = '98°';

    //connect together
    headerDiv.append(dateSpan,title,weatherSpan);

    //return new element
    // console.log(headerDiv);
    return headerDiv;

}

const headerContainer = document.querySelector('div.header-container');
const newHeader = Header();
headerContainer.append(newHeader);