const navbar= document.querySelector('.navBar');
const toggle =document.querySelector('.ham');

toggle.addEventListener('click', ()=>{
	const visibility = navbar.getAttribute("data-visible");

	if(visibility==='true'){
		navbar.setAttribute('data-visible', false);
		toggle.setAttribute('aria-expanded', false);
	}
	else if( visibility==='false'){
		navbar.setAttribute('data-visible', true);
		toggle.setAttribute('aria-expanded', true);
	}
});