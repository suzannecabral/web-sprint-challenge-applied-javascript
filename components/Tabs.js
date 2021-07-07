// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
 

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then((result)=>{
        const topicData = result.data.topics;
        // console.log(topicData);
        tabMaker(topicData,tabContainer);
    })
    .catch((err)=>{
        console.log(err);
    })



// const fakeData = {"topics":["javascript","bootstrap","technology","jquery","node.js"]};
// const fakeDataTopics = fakeData.topics;
// console.log(fakeDataTopics);

const tabContainer = document.querySelector('div.topics');

function tabMaker (data, container) {
    data.forEach((item) => {
        const newTab = document.createElement('div');
        newTab.classList.add('tab');
        newTab.innerHTML = item;
        container.append(newTab);
    });
}


// tabMaker(fakeDataTopics,tabContainer);

