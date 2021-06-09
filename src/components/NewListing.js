import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function NewListing() {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [bd, setBd] = useState(1);
  const [ba, setBa] = useState(1);
  const [sqft, setSqft] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [yb, setYb] = useState(2016);
  const [active, setActive] = useState("active");
  const [listedBy, setListedBy] = useState("andy");

  const [data, setData] = useState([]);

  const history = useHistory();

  function renderData() {
    axios
      .get("http://localhost:5000/house")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function add(event) {
    event.preventDefault();
    axios.post("http://localhost:5000/house", {
      location: location,
      price: price,
      image: image,
      bd: bd,
      ba: ba,
      sqft: sqft,
      city: city,
      zipcode: zipcode,
      address: address,
      yb: yb,
      listedBy: listedBy,
      active: active,
    });
    history.push("/" + location);
    renderData();
  }

  return (
    <form onSubmit={add}>
      <label>State</label>
      <select
        onChange={(event) => {
          setLocation(event.target.value);
        }}
        required
        name="location"
      >
        <option value="" disabled selected>
          Choose
        </option>
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

      <label>Image</label>
      <input
        onChange={(event) => {
          setImage(event.target.value);
        }}
        required
        value={image}
        name="image"
        placeholder="Image"
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
      <label>Sqft.</label>

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
        {" "}
        {active === "active" ? "Active" : "Inactive"} Listing status{" "}
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

      <input
        placeholder="listed by"
        value={listedBy}
        name="listedBy"
        type="text"
      />

      <input type="submit" value="ADD LISTING" />
    </form>
  );
}

export default NewListing;
