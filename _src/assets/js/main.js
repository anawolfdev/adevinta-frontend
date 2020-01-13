/* eslint-disable indent */
'use strict';

const ajaxSectionFour = document.querySelector('.ajax-section');
const ajaxContent = document.querySelector('.ajax-content');
const collapsibleSection = document.querySelectorAll('.js-collapsible-section');

function updateCollapsible(event) {
	const currentCollapsible = event.currentTarget.parentElement;
	if (currentCollapsible.classList.contains('collapsible-open')) {
		currentCollapsible.classList.remove('collapsible-open');
	} else {
		for (const item of collapsibleSection) {
			item.parentElement.classList.remove('collapsible-open');
		}
		currentCollapsible.classList.add('collapsible-open');
	}
}

function ajaxSection() {
	fetch('https://api.rand.fun/movies/title')
		.then(response => response.json())
		.then(data => {
			ajaxContent.innerHTML = data.result;
		});
}

ajaxSectionFour.addEventListener('click', ajaxSection);

for (const item of collapsibleSection) {
	item.addEventListener('click', updateCollapsible);
}