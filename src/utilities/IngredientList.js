const IngredientList = [
  { ingredient: "vodka", type: "spirit", inStock: false },
  { ingredient: "gin", type: "spirit", inStock: false },
  { ingredient: "sloe gin", type: "spirit", inStock: false },
  { ingredient: "rum", type: "spirit", inStock: false },
  { ingredient: "white rum", type: "spirit", inStock: false },
  { ingredient: "light rum", type: "spirit", inStock: false },
  { ingredient: "dark rum", type: "spirit", inStock: false },
  { ingredient: "spiced rum", type: "spirit", inStock: false },
  { ingredient: "malibu rum", type: "spirit", inStock: false },
  { ingredient: "151 proof rum", type: "spirit", inStock: false },
  { ingredient: "tequila", type: "spirit", inStock: false },
  { ingredient: "whiskey", type: "spirit", inStock: false },
  { ingredient: "rye whiskey", type: "spirit", inStock: false },
  { ingredient: "blended whiskey", type: "spirit", inStock: false },
  { ingredient: "irish whiskey", type: "spirit", inStock: false },
  { ingredient: "southern comfort", type: "spirit", inStock: false },
  { ingredient: "bourbon", type: "spirit", inStock: false },
  { ingredient: "scotch", type: "spirit", inStock: false },
  { ingredient: "absinthe", type: "spirit", inStock: false },
  { ingredient: "brandy", type: "spirit", inStock: false },
  { ingredient: "apricot brandy", type: "spirit", inStock: false },
  { ingredient: "apple brandy", type: "spirit", inStock: false },
  { ingredient: "blackberry brandy", type: "spirit", inStock: false },
  { ingredient: "goldschlager", type: "spirit", inStock: false },
  { ingredient: "cognac", type: "spirit", inStock: false },
  { ingredient: "pisco", type: "spirit", inStock: false },
  { ingredient: "peppermint schnapps", type: "spirit", inStock: false },
  { ingredient: "peach schnapps", type: "spirit", inStock: false },
  { ingredient: "applejack", type: "spirit", inStock: false },
  { ingredient: "everclear", type: "spirit", inStock: false },
  // End spirits
  // Begin Liqueurs
  { ingredient: "triple sec", type: "liqueur", inStock: false },
  { ingredient: "curacao", type: "liqueur", inStock: false },
  { ingredient: "blue curacao", type: "liqueur", inStock: false },
  { ingredient: "cointreau", type: "liqueur", inStock: false },
  { ingredient: "maraschino liqueur", type: "liqueur", inStock: false },
  { ingredient: "coffee liqueur", type: "liqueur", inStock: false },
  { ingredient: "kahlua", type: "liqueur", inStock: false },
  { ingredient: "creme de cacao", type: "liqueur", inStock: false },
  { ingredient: "creme de banane", type: "liqueur", inStock: false },
  { ingredient: "creme de menthe", type: "liqueur", inStock: false },
  { ingredient: "white creme de menthe", type: "liqueur", inStock: false },
  { ingredient: "creme de caassis", type: "liqueur", inStock: false },
  { ingredient: "vermouth", type: "liqueur", inStock: false },
  { ingredient: "dry vermouth", type: "liqueur", inStock: false },
  { ingredient: "sweet vermouth", type: "liqueur", inStock: false },
  { ingredient: "campari", type: "liqueur", inStock: false },
  { ingredient: "amaretto", type: "liqueur", inStock: false },
  { ingredient: "baileys irish cream", type: "liqueur", inStock: false },
  { ingredient: "irish cream", type: "liqueur", inStock: false },
  { ingredient: "j??germeister", type: "liqueur", inStock: false },
  { ingredient: "frangelico", type: "liqueur", inStock: false },
  { ingredient: "benedictine", type: "liqueur", inStock: false },
  { ingredient: "galliano", type: "liqueur", inStock: false },
  { ingredient: "ouzo", type: "liqueur", inStock: false },
  { ingredient: "sambuca", type: "liqueur", inStock: false },
  { ingredient: "green chartreuse", type: "liqueur", inStock: false },
  { ingredient: "yellow chartreuse", type: "liqueur", inStock: false },
  { ingredient: "falernum", type: "liqueur", inStock: false },
  { ingredient: "grand marnier", type: "liqueur", inStock: false },
  { ingredient: "midori melon liqueur", type: "liqueur", inStock: false },
  { ingredient: "chambord raspberry liqueur", type: "liqueur", inStock: false },
  // End Liqueurs
  // Begin Bitters
  { ingredient: "bitters", type: "bitters", inStock: false },
  { ingredient: "angostura bitters", type: "bitters", inStock: false },
  { ingredient: "orange bitters", type: "bitters", inStock: false },
  // End Bitters
  // Begin Syrups
  { ingredient: "sugar syrup", type: "syrup", inStock: false },
  { ingredient: "grenadine", type: "syrup", inStock: false },
  // End Syrups
  // Begin Fruits
  { ingredient: "lemon", type: "fruit", inStock: false },
  { ingredient: "lemon juice", type: "fruit", inStock: false },
  { ingredient: "lemon peel", type: "fruit", inStock: false },
  { ingredient: "lemonade", type: "fruit", inStock: false },
  { ingredient: "lime", type: "fruit", inStock: false },
  { ingredient: "lime juice", type: "fruit", inStock: false },
  { ingredient: "orange", type: "fruit", inStock: false },
  { ingredient: "orange juice", type: "fruit", inStock: false },
  { ingredient: "orange peel", type: "fruit", inStock: false },
  { ingredient: "pineapple", type: "fruit", inStock: false },
  { ingredient: "pineapple juice", type: "fruit", inStock: false },
  { ingredient: "apple juice", type: "fruit", inStock: false },
  { ingredient: "grapefruit juice", type: "fruit", inStock: false },
  { ingredient: "cranberry juice", type: "fruit", inStock: false },
  { ingredient: "cherry", type: "fruit", inStock: false },
  { ingredient: "maraschino cherry", type: "fruit", inStock: false },
  { ingredient: "watermelon", type: "fruit", inStock: false },
  { ingredient: "strawberries", type: "fruit", inStock: false },
  { ingredient: "berries", type: "fruit", inStock: false },
  { ingredient: "kiwi", type: "fruit", inStock: false },

  // End Fruits
  // Begin Others
  { ingredient: "wine", type: "other", inStock: false },
  { ingredient: "white wine", type: "other", inStock: false },
  { ingredient: "red wine", type: "other", inStock: false },
  { ingredient: "port", type: "other", inStock: false },
  { ingredient: "sherry", type: "other", inStock: false },
  { ingredient: "champagne", type: "other", inStock: false },
  { ingredient: "lillet blanc", type: "other", inStock: false },
  { ingredient: "lager", type: "other", inStock: false },
  { ingredient: "cider", type: "other", inStock: false },
  { ingredient: "ginger beer", type: "other", inStock: false },
  { ingredient: "ginger ale", type: "other", inStock: false },
  { ingredient: "coca-cola", type: "other", inStock: false },
  { ingredient: "sprite", type: "other", inStock: false },
  { ingredient: "soda water", type: "other", inStock: false },
  { ingredient: "tonic water", type: "other", inStock: false },
  { ingredient: "water", type: "other", inStock: false },
  { ingredient: "club soda", type: "other", inStock: false },
  { ingredient: "coffee", type: "other", inStock: false },
  { ingredient: "espresso", type: "other", inStock: false },
  { ingredient: "tea", type: "other", inStock: false },
  { ingredient: "tomato juice", type: "other", inStock: false },
  { ingredient: "cream", type: "other", inStock: false },
  { ingredient: "heavy cream", type: "other", inStock: false },
  { ingredient: "light cream", type: "other", inStock: false },
  { ingredient: "whipped cream", type: "other", inStock: false },
  { ingredient: "milk", type: "other", inStock: false },
  { ingredient: "egg", type: "other", inStock: false },
  { ingredient: "egg white", type: "other", inStock: false },
  { ingredient: "egg yolk", type: "other", inStock: false },
  { ingredient: "sour mix", type: "other", inStock: false },
  { ingredient: "sugar", type: "other", inStock: false },
  { ingredient: "powdered sugar", type: "other", inStock: false },
  { ingredient: "demerara sugar", type: "other", inStock: false },
  { ingredient: "brown sugar", type: "other", inStock: false },
  { ingredient: "honey", type: "other", inStock: false },
  { ingredient: "olive", type: "other", inStock: false },
  { ingredient: "nutmeg", type: "other", inStock: false },
  { ingredient: "cinnamon", type: "other", inStock: false },
  { ingredient: "ginger", type: "other", inStock: false },
  { ingredient: "salt", type: "other", inStock: false },
  { ingredient: "mint", type: "other", inStock: false },
  { ingredient: "ice", type: "other", inStock: false },
];

export default IngredientList;
