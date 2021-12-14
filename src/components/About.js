import React from "react";

const About = () => {
  return (
    <div className="main-comp">
      <div>
        <p>Cocktail Assistant</p>
        <p>My Bar - Displays ingredients currently in your bar</p>
        <p>My Cocktails - Displays your saved/previously made cocktails</p>
        <p>Bar Builder - Allows you to select which ingredients you have in your bar. These ingredients will be used to determine which cocktails you can make</p>
        <p>Make a Cocktail - Displays either all cocktails (no filter) or available cocktails based on your ingredients. Filter by ingredients, search for specific ingredients, etc.</p>
        <p>Random Cocktail - Provides you with a random cocktail based on the ingredients in your bar</p>
        <p>Login - Login with your email address to save your bar/cocktails to use again in the future (That way you don't have to build your bar every time you're looking for cocktail inspiration</p>
      </div>
    </div>
  );
};

export default About;
