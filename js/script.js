  'use strict';

const titleClickHandler = function(event){
  event.preventDefault();
  const clickedElement = this;

  /* [DONE] remove class 'active' from all article links  */
  const activeLink = document.querySelector('.titles a.active');
  activeLink.classList.remove('active');

  /* [DONE] remove class 'active' from all articles */
  const activeArticle = document.querySelector('.posts article.active ');       // 1. why article.active? to find arcticle with class 'active' not to find element with class 'active'
  activeArticle.classList.remove('active');

  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');

  /* [AFOOT] find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  /* [DONE] add active class to clickedElement, add active class to targetArticle*/
  clickedElement.classList.add('active');
  targetArticle.classList.add('active');

}
const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}
