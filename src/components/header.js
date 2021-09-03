const Header = (title, date, temp) => {
  // create element
  const headerr=document.createElement('div');
      const spanDate=document.createElement('span');
      const hOne=document.createElement('h1'); 
      const spanTemp=document.createElement('span');
 

  //adding class to elems
  headerr.classList.add('header');
      spanDate.classList.add('date');
      spanTemp.classList.add('temp');


 // add textcontent
  spanDate.textContent=`${date}`;
  hOne.textContent=`${title}`;
  spanTemp.textContent=`${temp}`;



  //adding structure to elems
  headerr.appendChild(spanDate);
  headerr.appendChild(hOne);
  headerr.appendChild(spanTemp);    


  return headerr;



  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}
// const headerContainerr=document.querySelector('.header-container');

const headerAppender = (selector) => {
  // const titleDateTemp=(selector, 'july', 'sdf');
  // const titleDateTemp= Header('Birthday','2/18',3);
  // headerContainerr.appendChild(titleDateTemp);

  const selection=document.querySelector(selector);
  selection.appendChild(Header());
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
