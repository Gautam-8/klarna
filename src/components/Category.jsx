import "./Category.css";

export const Category = () => {
  const categ = [
    "All",
    "Babies & Kids",
    "Clothing & Apparel",
    "Computers & Accessories",
    "Consumer Electronics",
    "Gifts",
    "Health & Beauty",
    "Holidays & Occasions",
    "Household",
    "Media",
  ];
  return (
    <div id="category">
      <h3>Categories</h3>
      {categ.map((e) => (
        <p>{e}</p>
      ))}
      <hr />
      <h3>Filter</h3>
      <h4>Discount</h4>
      <input type="checkbox" />
      <span>20-30% off</span> <br />
      <input type="checkbox" id="inp2" />
      <span>10-20% off</span>
      <hr />
    </div>
  );
};
