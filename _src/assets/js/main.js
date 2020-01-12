/* eslint-disable indent */
'use strict';

const collapsibleTrigger = document.querySelectorAll('.js-collapsible-trigger');

function updateCollapsible(event) {
	const currentCollapsible = event.currentTarget.parentElement;
	if (currentCollapsible.classList.contains('collapsible-open')) {
		currentCollapsible.classList.remove('collapsible-open');
	} else {
		for (const item of collapsibleTrigger) {
			item.parentElement.classList.remove('collapsible-open');
		}
		currentCollapsible.classList.add('collapsible-open');
	}
}

for (const item of collapsibleTrigger) {
	item.addEventListener('click', updateCollapsible);
}