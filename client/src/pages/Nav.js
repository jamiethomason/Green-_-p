import React from 'react';

function Nav() {
    const categories = [
        {
          name: "Login",
          description:
            "WHere users log in and create a profile",
        },
        { name: "Profile", description: "The users profile" },
        { name: "Blog", description: "Blog away to your hearts content" },
        {
          name: "Plant pics",
          description: "Show us your plants",
        },
      ];
      function categorySelected() {
        console.log("hello")
      }
  return (
    <header>
         <h2>
    <a href="/">
      <span role="img" aria-label="plant"> 🪴</span> Green UP!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About Green Up
        </a>
      </li>
      <li>
        <span>Contact Us</span>
      </li>
      {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
           <span onClick={() => categorySelected(category.name)} >
            {category.name}
          </span>
        </li>
      ))}
    </ul>
  </nav>
    </header>
  );
}

export default Nav;