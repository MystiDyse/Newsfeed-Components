/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const newMenu = data => {
	const div = document.createElement("div");
	div.classList.add("menu");

	const ul = document.createElement("ul");
	div.appendChild(ul);

	const menuItems = data.map(item => {
		const listitem = document.createElement("li");
		listitem.textContent = item;
		return listitem;
	});

	for (let menuItem of menuItems) {
		ul.appendChild(menuItem);
	}

	document.querySelector(".menu-button").addEventListener("click", () => {
		div.classList.toggle("menu--open");
	});

	return div;
};

document.querySelector(".Header").appendChild(newMenu(menuItems));
