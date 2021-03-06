import { useState } from "react";
import { Category } from "./Category";
import data from "./Products.json";

export const Home = () => {
  const [list, setList] = useState(data.data);

  const handleChange = (e) => {
    let query = e.target.value.toLowerCase();
    let matchinglist = data.data.filter((el) =>
      el.name.toLowerCase().startsWith(query)
    );
    let notlist = data.data.filter(
      (el) => !el.name.toLowerCase().startsWith(query)
    );

    setList([...matchinglist, ...notlist]);
  };

  const provideOffer = (flag, from, to) => {
    if (flag) {
      let offer = data.data.filter(
        (e) => e.discount >= from && e.discount <= to
      );
      setList(offer);
    } else {
      setList(data.data);
    }
  };

  return (
    <div>
      <div id="height-alter"></div>
      <h1 id="coupon">All deals and coupons.</h1>
      <p id="coupon-p">
        The best online deals and coupons, including Klarna exclusives, updated
        daily.
      </p>

      {/* <Top /> */}
      <div id="flex-box">
        <Category provideOffer={provideOffer} />
        <div id="products">
          <input id="inputt" placeholder="Search" onChange={handleChange} />
          <div id="data">
            {list.map((e, i) => (
              <div id="box" key={i}>
                <img src={e.image} alt="" />
                <p>{e.name}</p>

                <div id="save">
                  <h1>Save</h1>
                  <h2>{e.discount}% off</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
