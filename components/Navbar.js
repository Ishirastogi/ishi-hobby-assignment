/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { FaBookmark, FaChevronDown } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { IoCloseSharp, IoNotifications } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profile, setProfile] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    localStorage.removeItem("login");
    setLoggedIn(false);
  };

  useEffect(() => {
    let user = localStorage.getItem("login");
    if (user) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container ">
          <Link href={"/"} className="navbar-brand d-block  d-md-none small">
            <img src={"/assets/hubbylogosmall.png"} alt="" />
          </Link>
          <Link href={"/"} className="navbar-brand d-none d-md-flex d-lg-none ">
            <img src={"/assets/HobbyCue Logo v2 2.svg"} alt="" />
          </Link>
          <Link href={"/"} className="navbar-brand d-none d-lg-flex">
            <img src={"/assets/HobbyCue_Logo.png"} alt="" />
          </Link>
          <div className=" d-flex gap-3 align-items-center">
            <div className="pointer  d-lg-none">
              <IoNotifications color="#8064A2" size={23} />
            </div>
            <div className="pointer  d-lg-none">
              <IoMdSearch color="#8064A2" size={23} />
            </div>
            <button
              className="navbar-toggler  "
              style={{
                border: "none",
                backgroundColor: "transparent",
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <BsList
                className={` ${openDrawer ? " d-none" : " d-block"}`}
                size={30}
                color="#8064A2"
              />
              <IoCloseSharp
                size={30}
                className={` ${!openDrawer ? " d-none" : "d-block"}`}
              />
            </button>
          </div>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav d-none d-inline-block d-lg-flex mt-3 pt-1 me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="input-group input-group-sm mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                    // aria-label="Dollar amount (with dot and two decimal places)"
                  />
                  <img src={"/assets/search_icon.png"} alt="" />
                </div>
              </li>
            </ul>
            <div className="d-lg-flex gap-3   align-items-center ">
              {/* Expolor */}

              <div className="dropdown">
                {/* Trigger for the dropdown */}
                <button className="dropbtn d-flex border-0 gap-2 align-items-center bg-transparent">
                  <MdExplore color="#8064A2" size={26} />
                  <h5 className=" mt-1">Explore</h5>
                  <FaChevronDown className="light-icon " />
                </button>
                {/* Dropdown content */}
                <div className="dropdown-content ">
                  <div className=" nav-dropdown-content ">
                    <div className=" bg-transparent space">hello</div>
                    <ul className="list-group card">
                      <li className="list-group-item">
                        <Link className="nav-dropdown-link" href={"#"}>
                          People - Community
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link className="nav-dropdown-link" href={"#"}>
                          Places - Venues
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link className="nav-dropdown-link" href={"#"}>
                          Programs - Events
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link className="nav-dropdown-link" href={"#"}>
                          Products - Store
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <Link className="nav-dropdown-link" href={"#"}>
                          Blogs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* hobbies  -- */}
              <div className="dropdown">
                {/* Trigger for the dropdown */}
                <div className="  d-flex border-0 gap-2 align-items-center bg-transparent">
                  <MdExplore color="#8064A2" size={26} />
                  <h5 className=" mt-1">Hobbies</h5>
                  <FaChevronDown className="light-icon " />
                </div>
                {/* Dropdown content */}
                <div className="nav-dropdown-content  ">
                  <div className=" bg-transparent space">white space</div>
                  <ul className="list-group  card">
                    <li className="list-group-item">
                      <Link className="nav-dropdown-link" href={"#"}>
                        Item 1
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className="nav-dropdown-link" href={"#"}>
                        Item 2
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className="nav-dropdown-link" href={"#"}>
                        Item 3
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className="nav-dropdown-link" href={"#"}>
                        Item 4
                      </Link>
                    </li>
                    <li className="list-group-item">
                      <Link className="nav-dropdown-link" href={"#"}>
                        Item 5
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className=" d-lg-flex gap-3  ">
                <div className="pointer d-flex gap-3 ">
                  <FaBookmark color="#8064A2" className="navlink-icon" />
                  <h5 className=" d-lg-none   ">Saved</h5>
                </div>
                <div className="pointer d-flex gap-3 navlink-icon">
                  <IoNotifications color="#8064A2" />
                  <h5 className=" d-lg-none ">Notification</h5>
                </div>
                <div className="pointer d-flex gap-3 navlink-icon">
                  <FaShoppingCart color="#8064A2" />
                  <h5 className=" d-lg-none ">Cart</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
