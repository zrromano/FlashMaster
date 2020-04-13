import React, { Component } from "react";
import NavBar from "./components/navbar";
import Collection from "./components/collection";
import FlashTest from "./components/flashtest";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import NotFound from "./components/notfound";
import CreateCollection from "./components/createCollection";
import { withFirebase } from "./components/firebase";

library.add(fas);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    const links = [{ path: "/flashcards", text: "Flashcards", icon: "book" }];
    const user = {
      collections: [
        {
          title: "Example",
          cards: [
            { front: "What is a zebra?", back: "Stripe horse" },
            { front: "What is a giraffe?", back: "Long horse" },
            { front: "What is a moose?", back: "Canadian horse" },
          ],
        },
      ],
    };
    return (
      <div className="App">
        <NavBar className="nav-icon" links={links} user={this.state.authUser} />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/flashcards"
              component={() => (
                <Collection
                  user={this.state.authUser ? this.state.authUser : user}
                />
              )}
            />
            <Route
              path="/create"
              component={() => <CreateCollection user={this.state.authUser} />}
            />
            <Route path="/flashtest" component={FlashTest} />
            <Route path="/login" component={withFirebase(Login)} />
            <Route path="/logout" component={withFirebase(Logout)} />
            <Route path="/register" component={withFirebase(Register)} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withFirebase(App);
