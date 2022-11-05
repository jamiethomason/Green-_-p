import React from 'react';

function Nav() {
    const categories = [
        {
          name: "Log in",
          description:
            "",
        },
        { name: "Home", description: "" },
        { name: "Profile", description: "" },
        {
          name: "Blog",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
      ];
      function categorySelected() {
        console.log("hello")
      }
  return (
    <header>
         <h2>
    <a href="/">
      <span role="img" aria-label="Plant">🪴</span> Green Up!
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