'use strict';
//  here goes a test: find test-button, listen for click, when you hear it, you execute the handler, which is to find 'titles a' and show them in the console
/*
document.getElementById('test-button').addEventListener('click', function(){
  const links = document.querySelectorAll('.titles a');
  console.log('links:', links);
});
*/

const titleClickHandler = function(MouseEvent){
  console.log('Link was clicked!');
  console.log(MouseEvent);

  /* remove class 'active' from all article links  */

const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');                   //where it should be removed? should query selector find "titles a.active or "titles a .active"?
}

  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active '); // why article.active?

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');                   //where it should be removed? should query selector find "titles a.active or "titles a .active"?
  }

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
