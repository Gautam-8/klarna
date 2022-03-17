import "./Category.css";

export const Top = () => {
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
    <div id="category-1">
      <div id="categg">
        <h3>Categories</h3>
        <div id="show">
          {categ.map((e) => (
            <p key={e}>{e}</p>
          ))}
        </div>
      </div>

      <div id="disc">
        <h3>Discount</h3>
        <input type="checkbox" />
        <span>20-30% off</span> <br />
        <input type="checkbox" id="inp2" />
        <span>10-20% off</span>
      </div>
    </div>
  );
};
