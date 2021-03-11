import "./App.css";
import Header from "./Header.js";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import Home from "./Home.js";
import Payment from "./Payment";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51INAeZC4PbIiBgBKOLJz4brw1qormmtWvafDPfGBG8an3OX3V5FrCsGKvU2cDbZHVJ5X7jE3rllw5Cfy5gAkLGQc00nvB1AXUI"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>> ", authUser);

      if (auth) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>{" "}
           
        </Switch>
      </div>
    </Router>
  );
}

export default App;
