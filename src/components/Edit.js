import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Edit(props) {
  const [location, setLocation] = useState(props.house.location);
  const [price, setPrice] = useState(props.house.price);
  const [image, setImage] = useState(props.house.image);
  const [image2, setImage2] = useState(props.house.image2);
  const [image3, setImage3] = useState(props.house.image3);
  const [image4, setImage4] = useState(props.house.image4);
  const [image5, setImage5] = useState(props.house.image5);
  const [bd, setBd] = useState(props.house.bd);
  const [ba, setBa] = useState(props.house.ba);
  const [sqft, setSqft] = useState(props.house.sqft);
  const [city, setCity] = useState(props.house.city);
  const [zipcode, setZipcode] = useState(props.house.zipcode);
  const [address, setAddress] = useState(props.house.address);
  const [yb, setYb] = useState(props.house.yb);
  const [active, setActive] = useState(props.house.active);
  const [listedBy, setListedBy] = useState("andy");
  const { loggedIn } = useContext(AuthContext);

  async function update(e, id) {
    e.preventDefault();
    await axios.put(
      "https://home-decor-backend.herokuapp.com/house/" + props.house._id,
      {
        location: location,
        price: price,
        image: image,
        image2: image2,
        image3: image3,
        image4: image4,
        image5: image5,
        bd: bd,
        ba: ba,
        sqft: sqft,
        city: city,
        zipcode: zipcode,
        address: address,
        yb: yb,
        listedBy: listedBy,
        active: active,
      }
    );
    props.renderData();
  }

  return (
    <form onSubmit={update}>
      <div className="add-container">
        <h1>Change it up!</h1>
        <input
          onChange={(event) => {
            setListedBy(event.target.value);
          }}
          placeholder="Your name"
          value={listedBy}
          name="listedBy"
          type="hidden"
        />

        <label>State</label>
        <select
          onChange={(event) => {
            setLocation(event.target.value);
          }}
          required
          name="location"
          value={location}
        >
          <option value="">Choose</option>
          <option value="TX">Texas</option>
          <option value="FL">Florida</option>
          <option value="NC">North Carolina</option>
          <option value="SC">South Carolina</option>
          <option value="GA">Georgia</option>
          <option value="LA">Louisiana</option>
          <option value="VA">Virginia</option>
        </select>

        <label>Price</label>
        <input
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          required
          value={price}
          name="price"
          placeholder="Price"
          type="number"
        />

        <label>Images</label>
        <input
          onChange={(event) => {
            setImage(event.target.value);
          }}
          required
          value={image}
          name="image"
          placeholder="Image 1"
          type="text"
        />
        <input
          onChange={(event) => {
            setImage2(event.target.value);
          }}
          required
          value={image2}
          name="image2"
          placeholder="Image 2"
          type="text"
        />
        <input
          onChange={(event) => {
            setImage3(event.target.value);
          }}
          required
          value={image3}
          name="image3"
          placeholder="Image 3"
          type="text"
        />
        <input
          onChange={(event) => {
            setImage4(event.target.value);
          }}
          required
          value={image4}
          name="image4"
          placeholder="Image 4"
          type="text"
        />
        <input
          onChange={(event) => {
            setImage5(event.target.value);
          }}
          required
          value={image5}
          name="image5"
          placeholder="Image 5"
          type="text"
        />

        <label>Bedrooms</label>
        <select
          onChange={(event) => {
            setBd(event.target.value);
          }}
          required
          name="bd"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>

        <label>Bathrooms</label>
        <select
          onChange={(event) => {
            setBa(event.target.value);
          }}
          required
          name="ba"
        >
          <option value="1">1</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="2.5">2.5</option>
          <option value="3">3</option>
          <option value="3.5">3.5</option>
          <option value="4">4</option>
          <option value="4.5">4.5</option>
          <option value="5">5</option>
          <option value="5.5">5.5</option>
          <option value="6">6</option>
          <option value="6.5">6.5</option>
          <option value="7">7</option>
          <option value="7.5">7.5</option>
          <option value="8">8</option>
          <option value="8.5">8.5</option>
          <option value="9">9</option>
          <option value="9.5">9.5</option>
          <option value="10">10</option>
        </select>

        <label>Sqft.</label>
        <input
          onChange={(event) => {
            setSqft(event.target.value);
          }}
          required
          value={sqft}
          name="sqft"
          placeholder="Approx sqft."
          type="number"
        />

        <label>City</label>
        <input
          onChange={(event) => {
            setCity(event.target.value);
          }}
          required
          value={city}
          name="city"
          placeholder="City"
          type="text"
        />

        <label>Zipcode</label>
        <input
          onChange={(event) => {
            setZipcode(event.target.value);
          }}
          required
          value={zipcode}
          name="zipcode"
          placeholder="Zipcode"
          type="number"
        />

        <label>Address</label>
        <input
          onChange={(event) => {
            setAddress(event.target.value);
          }}
          required
          value={address}
          name="address"
          placeholder="Address"
          type="text"
        />

        <label>Year built</label>
        <select
          onChange={(event) => {
            setYb(event.target.value);
          }}
          required
          value={yb}
          name="yb"
        >
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option selected value="2016">
            2016
          </option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
        </select>

        <label>
          Listing status {active === "active" ? "(Active)" : "(Inactive)"}{" "}
        </label>
        <select
          name="active"
          onChange={(event) => {
            setActive(event.target.value);
          }}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <input className="add-submit" type="submit" value="UPDATE LISTING" />
      </div>
    </form>
  );
}

export default Edit;
