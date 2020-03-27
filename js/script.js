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


  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);


  /* [AFOOT] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(href);
  console.log(targetArticle);


  /* [AFOOT] add class 'active' to the correct article */
  event.preventDefault();
  const clickedArticle = this;
  console.log('clickedArticle:', clickedArticle);


  /*[AFOOT] DELETE the content of links list (left column)*/



  /*[AFOOT] READ article id and save it as a const*/



  /*[AFOOT] FIND element with determined title and save its content to a const*/



  /*[AFOOT] CREATE HTML link code and save it to a const*/



  /*[AFOOT] PUT created HTML code to the list of links (left column)*/


}


const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
