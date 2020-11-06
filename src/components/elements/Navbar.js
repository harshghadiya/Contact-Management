import React from "react";
import { Link } from "react-router-dom";
import { Button, FormControl, Form } from "react-bootstrap";


const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact Book
        </Link>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-20" />
            <Button >Search</Button>
          </Form>
        <div>
          <Link to="/contacts/add" className="btn btn-light ml-auto">
            Create Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 