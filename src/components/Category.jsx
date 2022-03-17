import "./Category.css";

export const Category = ({ provideOffer }) => {
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
  const handleChange = (e, from, to) => {
    provideOffer(e.target.checked, from, to);
  };
  return (
    <div id="category">
      <div id="categg">
        <h3>Categories</h3>
        <div id="show">
          {categ.map((e) => (
            <p key={e}>{e}</p>
          ))}
        </div>
      </div>
      <hr />
      <div id="disc">
        <h3>Discount</h3>
        <div id="show1">
          <input type="checkbox" onChange={(e) => handleChange(e, 0, 20)} />
          <span>5-20% off</span> <br />
          <input
            type="checkbox"
            id="inp2"
            onChange={(e) => handleChange(e, 20, 30)}
          />
          <span>20-30% off</span>
        </div>
      </div>

      <hr />
    </div>
  );
};
