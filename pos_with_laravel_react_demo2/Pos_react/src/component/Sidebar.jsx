import React from 'react';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <NavLink to ="/" className="brand-link">
        <img
          src="assets/dist/img/logopic.png"
          alt="logopic.png"
          style={{ width: 200 }}
        />
        <span className="brand-text font-weight-light" />
      </NavLink>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="assets/dist/img/raju_ring1.png"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              Raihan Raju
            </a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item menu-open">
              <NavLink  to ="/" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>
                  Dashboard
                  <i className="right fas fa-angle-left" />
                </p>
              </NavLink>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                wholesale
                  <i className="fas fa-angle-left right" />
                  <span className="badge badge-info right">6</span>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/Addseler" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add seler</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Manageseler"
                    className="nav-link"
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Manage seler</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                Catagory
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to ="/AddCatagory" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add Catagory</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to ="/ManageCatagory" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Mange Catagory</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                Products
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/AddProducts" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add products</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/ManageProducts" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Manage products</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-table" />
                <p>
                  Invoice & Customer
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink to="/MakeInvoice" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Make Invoice</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/ManageInvoice" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Manage Invoice</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/ManageCustomer" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Manage Customer</p>
                  </NavLink>
                </li>
               
              </ul>
            </li>
          
            
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon far fa-plus-square" />
                <p>
                Return Produc
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink  to="/Return" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add Return Produc</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  to="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Manage Return Produc</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a  href="#" className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                 All Cost
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink  to="/AddCost" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Add All kind Cost</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  to="/ManageCost" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Cost Manage</p>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-book" />
                <p>
                  Company
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <NavLink  to="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Employee recruitment </p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <p>Employee Management</p>
                  </a>
                </li>
             
              </ul>
            </li>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
          </ul>
        </nav>
      </div>
      {/* /.sidebar */}
    </aside>
        </>
    );
};

export default Sidebar;