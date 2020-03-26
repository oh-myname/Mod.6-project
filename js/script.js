'use strict';
//  here goes a test: find test-button, listen for click, when you hear it, you execute the handler, which is to find 'titles a' and show them in the console
/*
document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});
*/


const titleClickHandler = function(Event){
  console.log('Link was clicked!');
  console.log(Event);


  /* [DONE] remove class 'active' from all article links  */
const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');                                          //1. where it should be removed? should query selector find "titles a.active or "titles a .active"?
}


  /* [DONE] add class 'active' to the clicked link */
  event.preventDefault();
  const clickedElement = this;
  console.log('clickedElement:', clickedElement);                                 //it's better to use this way than 'clickedElement:' + clickedElement
  //console.log('clickedElement (with plus): ' + clickedElement);


  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active ');     // 2. why article.active? only ask don't touch - it works

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');                                     // 1. where it should be removed? should query selector find "titles a.active or "titles a .active"?
  }


  /* [AFOOT] get 'href' attribute from the clicked link */
  const a = document.querySelectorAll('titles')             //i'm not sure about that
  const href = titles.getAttribute('href');
  console.log('href')


  /* [AFOOT] find the correct article using the selector (value of 'href' attribute) */

  /* [AFOOT] add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
