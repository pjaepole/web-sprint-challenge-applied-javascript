import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  //
  
  


  const divCard= document.createElement('div');
      const divHeadline=document.createElement('div');
      const divAuthor=document.createElement('div');
          const divImgContainer=document.createElement('div');
              const imgAuthorPhoto=document.createElement('img');
          const spanAuthorName=document.createElement('span');

  divCard.classList.add('card');
      divHeadline.classList.add('headline');
      divAuthor.classList.add('author');
        divImgContainer.classList.add('img-container');
            

        divHeadline.textContent=article.headline;
        imgAuthorPhoto.src=article.authorPhoto;
        spanAuthorName.textContent=`By  ${article.authorName}`;


  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);
      divAuthor.appendChild(divImgContainer);
          divImgContainer.appendChild(imgAuthorPhoto);
      divAuthor.appendChild(spanAuthorName);

      divCard.addEventListener('click',()=>[
        console.log(article.headline)
      ])

return divCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const cardsContainerr=document.querySelector(selector);
  axios.get(`http://localhost:5000/api/articles`)
    .then(res=>{
    console.log('task6',res.data.articles);
    console.log('task6',res.data);
    const javaS=res.data.articles.javascript;
    const jque=res.data.articles.jquery;
    const bootS=res.data.articles.bootstrap;
    const node=res.data.articles.node;
    const technology=res.data.articles.technology;

    

    javaS.forEach(element => {
      cardsContainerr.appendChild(Card(element));
      
    });

    jque.forEach(elem =>{
      cardsContainerr.appendChild(Card(elem));
    });
    
    node.forEach(elem =>{
      cardsContainerr.appendChild(Card(elem));
    });
    
    bootS.forEach(elem =>{
      cardsContainerr.appendChild(Card(elem));
    });

    technology.forEach(elem =>{
      cardsContainerr.appendChild(Card(elem));
    });
    
  })
}

export { Card, cardAppender }
