import React, {useState, Fragment} from 'react';
import Rating from '@material-ui/lab/Rating';
import './App.css';

let products = require('../src/data/products');

function App() {
  let productTypes = products.mattresses;
  const [qty, setQty] = useState(0);
  const [type, setType] = useState('');
  const [showDisableBtnMsg, setShowDisableBtnMsg] = useState(false);
  const [classicQty, setClassicQty] = useState(0);
  const [loomQty, setLoomQty] = useState(0);
  const [zenQty, setZenQty] = useState(0);


  let addCartClickHandler = (e) => {
    if(e.target.classList.contains('disabledBtnDiv') && !type){
      console.log('inside addclickhandler if');
      setShowDisableBtnMsg(true);
    } else {
      console.log('inside addclickhandler else');
      setShowDisableBtnMsg(false);
      qtyChangeHandler(type);
    };
  }

  let qtyChangeHandler = (type) => {
    console.log('inside addclickhandler if', type);
    switch (type) {
      case 'classic':
        setClassicQty(classicQty + 1);
        setQty(qty + 1);
        break;
      case 'loom':
        setLoomQty(loomQty + 1);
        setQty(qty + 1);
        break;
      case 'zen':
        setZenQty(zenQty + 1);
        setQty(qty + 1);
        break;
      default:
        setQty(qty);
    }
  }
  return (
  <div className="g-0">
    <header className="App-header">
      <svg name="saatvaLogo" data-testid="saatva_logo" role="img" alt="Saatva Logo" description="Saatva Logo" viewBox="0 0 180 38.3" width="180" height="38.3" aria-labelledby="saatvaLogo" fill="#c19678"><title id="saatvaLogo">Saatva Logo</title><path d="M59.8,37.5h-4.9v-4.8c-2.4,3.5-6.4,5.6-10.7,5.6c-8.5,0-15.4-7-15.4-16.2c0-9.3,7-16.3,15.5-16.3c8.8,0,15.5,7.1,15.5,16.3L59.8,37.5z M44.4,10.5c-5.8,0-10.4,5.1-10.4,11.6s4.7,11.5,10.4,11.5c5.7,0,10.4-5.1,10.4-11.5C54.8,15.7,50,10.5,44.4,10.5z"></path><path d="M96.3,37.5h-4.9v-4.8c-2.4,3.5-6.4,5.6-10.7,5.6c-8.5,0-15.4-7-15.4-16.2c0-9.3,7-16.3,15.5-16.3c8.8,0,15.5,7.1,15.5,16.3L96.3,37.5z M80.8,10.5c-5.8,0-10.4,5.1-10.4,11.6s4.7,11.5,10.4,11.5c5.7,0,10.4-5.1,10.4-11.5C91.3,15.7,86.5,10.5,80.8,10.5z"></path><path d="M115,37.5c-7.2,0.8-12.2-3.4-12.2-11.3V0h5v6.6h7v4.9h-7v14.8c0,5.5,3.3,6.8,7.1,6.6V37.5z"></path><path d="M119.2,6.6h5.4l8.5,24.1h0.1l8.5-24.1h5.4l-11.2,30.9h-5.5L119.2,6.6z"></path><path d="M180,37.5h-4.9v-4.8c-2.4,3.5-6.4,5.6-10.7,5.6c-8.5,0-15.4-7-15.4-16.2c0-9.3,7-16.3,15.5-16.3c8.8,0,15.5,7.1,15.5,16.3V37.5z M164.5,10.5c-5.8,0-10.4,5.1-10.4,11.6s4.7,11.5,10.4,11.5c5.7,0,10.4-5.1,10.4-11.5C175,15.7,170.2,10.5,164.5,10.5z"></path><path d="M0,33.2c3.6,3.2,8.2,5,13,4.9c6.8,0,11.2-3.7,11.2-9.3v-0.1c0-4.8-2.8-7.4-10-9.1c-6-1.4-7.6-2.5-7.6-5.1v-0.1c0-2.3,2.2-3.9,5.3-3.9c3.1,0.1,6.1,1.2,8.5,3.2l2.8-4C20,7.2,16,5.8,11.9,5.9c-6.3,0-10.7,3.7-10.7,9V15c0,5.7,3.7,7.7,10.4,9.3c5.5,1.3,7.2,2.4,7.2,5v0.1c0,2.5-2.3,4.1-5.7,4.1c-3.6,0-6.7-1.3-10-4.1L0,33.2z"></path></svg>
      <div className="cart_icon">
        <button className="cartIcon">
          <svg name="cart" className="icon icon--cart" fill="#6b6257" role="img" alt="cart icon" description="Cart" viewBox="0 0 25 25" width="25" height="25" aria-labelledby="cartIcon"><title id="cartIcon">Cart</title><path d="M24.6,5.9c-0.3-0.3-0.7-0.6-1.1-0.6l-18.1-2V3.1C5.2,1.4,3.9,0,2.6,0h-2C0.2,0,0,0.2,0,0.5 C0,0.8,0.2,1,0.5,1h2c0.8,0,1.6,1,1.8,2.1l0.8,8.2c0.1,1.5-0.2,3-0.8,4.4c-0.4,0.6-0.4,1.3,0,1.9c0.5,0.7,1.3,1,2.1,0.9h16.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5H6.3c-0.4,0.1-0.9-0.1-1.1-0.4c-0.1-0.3-0.1-0.6,0.1-0.9c0.3-0.5,0.5-1.1,0.7-1.7H22c0.9,0,1.6-0.6,1.8-1.4l1.1-6C25,6.7,24.9,6.2,24.6,5.9L24.6,5.9z M22.8,12.9c-0.1,0.3-0.4,0.6-0.7,0.6H6.1c0.1-0.7,0.2-1.5,0.1-2.2L5.5,4.3l17.9,2c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0.1,0.3L22.8,12.9L22.8,12.9z M19.8,24.2c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3S21.1,24.2,19.8,24.2z M19.8,20.6c-0.5,0-0.9,0.2-1.1,0.6s-0.2,0.9,0,1.3s0.7,0.6,1.1,0.6c0.7,0,1.3-0.6,1.3-1.3S20.6,20.6,19.8,20.6z M7.8,24.2c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3S9.1,24.2,7.8,24.2z M7.8,20.6c-0.5,0-0.9,0.2-1.1,0.6s-0.2,0.9,0,1.3s0.7,0.6,1.1,0.6c0.7,0,1.3-0.6,1.3-1.3S8.6,20.6,7.8,20.6z"></path></svg>
          <span className={"cartIcon__count" + (qty > 0 ? '' : ' hide')} data-testid="cartQtySpan">{qty}</span>
        </button>
      </div>
    </header>
      <div className="row">
        <div className="col-xl-8 px-4 py-4 px-lg-5 py-lg-5 px-md-5 py-md-5">
          {type &&
            <img className="w-100" src={require("./images/"+products.mattresses[type].imageFileName)} alt={products.mattresses[type].name} />
          }
          {!type &&
            <img className="w-100" src={require("./images/hero.jpg")} alt="Saatva Lineup" />
          }
          
        </div>
        
        <div className="col-xl-4 px-4 py-2 px-lg-5 py-lg-5 px-md-5 py-md-0">
          <div className="row pb-4 pb-lg-5 pb-md-3">
            <span className="body_heading">Choose Your Mattress</span>
          </div>

          <div className="row pb-2">
            <span className="type-select-label body-text">SELECT MATTRESS TYPE</span>
          </div>

          <div className="row pb-4">
            <div className="btn-group type-select col-lg-9 col-md-8" role="group">
              {Object.entries(productTypes).map(([key, value]) => {
                return (
                <Fragment key={key}>
                  <input type="radio" className="btn-check" name="btnradio" id={"btn_"+key} autoComplete="off" onClick={()=>{
                    setType(key);
                  }}/>
                  <label className="btn btn-outline-primary body-text type-btn-text col-3" htmlFor={"btn_"+key} data-testid={"typeBtn_"+key}>{value.name}</label>
                </Fragment>)
              })}
            </div>
          </div>
          
          {type &&
          <Fragment>
            <div className="row pb-2">
              <div className="type-details col-lg-9 col-md-8">
                <span className="body-text">Customer Rating</span>
                <Rating
                  className="type-details"
                  name="half-rating-read"
                  precision={0.10}
                  readOnly
                  value={products.mattresses[type].reviewRating}
                />
              </div>
            </div>
            <div className="row pb-2">
              <div className="type-details col-lg-9 col-md-8">
                <span className="body-text"><strong>{products.mattresses[type].name}</strong></span>
                <span className="body-text">${products.mattresses[type].price}</span>
              </div>
            </div>
          </Fragment>
          }

          {showDisableBtnMsg && !type &&
            <div className="row pb-4">
              <div className="col-lg-9 col-md-8">
                <div className="mb-0 body-text alert alert-dark">Select mattress type first</div>
              </div>
            </div>
          }
          
          <div className="row">
            <div className="col-lg-9 col-md-8">
              {type &&
                <button type="button" className="btn qtyBtn body-text w-100" data-testid="qtyBtn" onClick={(e)=>addCartClickHandler(e)}>Add to Cart</button>
              }
              {!type &&
                <div onClick={(e)=>addCartClickHandler(e)} className="disabledBtnDiv">
                  <button type="button" className="btn qtyBtn body-text disabled w-100">Add to Cart</button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;
