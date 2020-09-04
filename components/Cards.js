import axios from 'axios';


// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get ('https://lambda-times-api.herokuapp.com/articles')
    .then((result)=>{
        const articleData = result.data.articles;
        // console.log(articleData);

        const articleArray = [];

        const dataKeys = Object.entries(articleData);
        // console.log(dataKeys);

        dataKeys.forEach((topic)=>{
            topic[1].map((article)=>{
                article.topic = topic[0];
                //works: adds topic to each article
                articleArray.push(article);
            });
        //works: adds articles to array individually
        });
        // console.log(articleArray);

        articleMaker(articleArray,articlesContainer);


    //ending .then    
    })
    .catch((err)=>{
        console.log(err);
        debugger
    })


const fakeArticle = {
    authorName: "PUPPER S. DOGGO",
    authorPhoto: "https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg",
    headline: "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",
    id: "f19cea1d-4606-40c1-9c3a-abf9a31591f0",
    topic: 'javascript'
}


const fakeArticleArr = [{
    authorName: "PUPPER S. DOGGO",
    authorPhoto: "https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg",
    headline: "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",
    id: "f19cea1d-4606-40c1-9c3a-abf9a31591f0",
    topic: 'javascript'
},
{
    authorName: "PUPPER S. DOGGO",
    authorPhoto: "https://tk-assets.lambdaschool.com/44260ce3-c8f0-4db8-bc1d-9877662fdf96_puppers.jpg",
    headline: "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",
    id: "f19cea1d-4606-40c1-9c3a-abf9a31591f0",
    topic: 'javascript'
}
]

const articlesContainer = document.querySelector('div.cards-container');

function articleMaker (dataArr,container){ 
    dataArr.forEach((article)=>{
        //create elements
        const articleCard = document.createElement('div');
        const headline = document.createElement('div');
        const authorDiv = document.createElement('div');
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        const authorName = document.createElement('span');
        
        //add css classes
        articleCard.classList.add('card');
        headline.classList.add('headline');
        authorDiv.classList.add('author');
        imgContainer.classList.add('img-container');

        //add content
        headline.innerText = article.headline;
        img.src = article.authorPhoto;
        authorName.innerText = article.authorName;

        //conenct elements
        imgContainer.append(img)
        authorDiv.append(imgContainer,authorName);
        articleCard.append(headline,authorDiv,);

        //click listener
        articleCard.addEventListener('click',(e)=>{
            e.stopPropagation;
            console.log('test');
            // console.log(e.currenttarget)
            // e.stopPropagation;
        });

        //append to html
        container.append(articleCard);
        // console.log(articleCard);
    });
}


// articleMaker(fakeArticleArr,articlesContainer);