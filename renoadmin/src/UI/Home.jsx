import React, { useState } from "react";
import SideNavBar from "./SideNavigationBar/SideNavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Dashboard from "../Pages/DashBoard_Screen/Dashboard";
import UserDetails from "../Pages/User_Management/All_Users/all_user";
import Configuration from "../Pages/Configuration_Screen/Configuration";
import Prm from "../Pages/PRM/prm";
import EditUser from "../Pages/User_Management/Edit_User_Screen/editUser";
import CreateNewPage from "../Pages/Content_Management/CreateNewPage/createNewPage";
import ViewUser from "../Pages/User_Management/View_Details/viewuser";
import MemberDetails from "../Pages/CRM/MemberDetails/memberdetails";
import AddShowcase from "../Pages/PSM/AddNewShowCase/addNewShowcase";
import EditShowcase from "../Pages/PSM/EditShowcase/editShowcase";
import AddProduct from "../Pages/HSM/AddProduct/addProduct";
import AddPromotion from "../Pages/HSM/AddNewPromotion/addNewPromotion";
import AllPromotion from "../Pages/HSM/AllPromotionList/allPromotionList";
import EditService from "../Pages/HSM/EditService/editService";
import EditProduct from "../Pages/HSM/EditProducts/editProducts";
import Chatdetails from "../Pages/HSM/HelpDesk/chatdetails";
import HelpDesk from "../Pages/HSM/HelpDesk/helpDesk";
import AllPages from "../Pages/Content_Management/AllPages/allPages";
import ProjectList from "../Pages/PSM/AllProjects/allProjects";
import FeaturedProject from "../Pages/PSM/FeaturedProject/featuredProject";
import FeaturedProducts from "../Pages/HSM/FeaturedProducts/featuredProducts";
import AllProducts from "../Pages/HSM/AllProducts/allProducts";
import TransactionHistory from "../Pages/HSM/Transactionhistory/transactionhistory";
import Reviews from "../Pages/HSM/Reviews/reviews";
import PRM from "../Pages/PRM/prm";
import SuspendedUser from "../Pages/User_Management/Suspended_User/suspendedUser";
import AllMembers from "../Pages/CRM/AllMembers/allmembers";
import AddNewRole from "../Pages/PRM/addNewRole";
import EditMember from "../Pages/MarketPlaceManagement/EditMember/editMember";
import EditCategory from "../Pages/MarketPlaceManagement/AllProducts/editCategory.jsx";
import AddNewCategory from "../Pages/MarketPlaceManagement/AllProducts/addNewcategory.jsx";
import AddListing from "../Pages/MarketPlaceManagement/ListingManagement/addListing.jsx";
import EditListing from "../Pages/MarketPlaceManagement/ListingManagement/editListing.jsx";
import AllMarketMember from "../Pages/MarketPlaceManagement/AllMembers/allMembers";
import SuspendedMarketUser from "../Pages/MarketPlaceManagement/SuspendUsers/suspendUsers";
import AllMarketProducts from "../Pages/MarketPlaceManagement/AllProducts/Allproducts";
import ListingManagement from "../Pages/MarketPlaceManagement/ListingManagement/listingManagement";
import ReviewMPM from "../Pages/MarketPlaceManagement/ReviewManagement/reviewManagement";
import ProjectBooking from "../Pages/PSM/ProjectBookings/projectBookings";
import CreateUser from "../Pages/User_Management/Create_User/createUser";
import EditPage from "../Pages/Content_Management/EditPage/editPage";
import cookie from "js-cookie";
import EditPromotion from "../Pages/HSM/EditPromotion/editPromotion";
import AddMembers from "../Pages/CRM/AddMembers/addMembers";
import Vieworder from "../Pages/CRM/MemberDetails/Vieworder.jsx";
import CategoryList from "../Pages/HSM/CategoryList/categorylist.jsx";
import ProductCategory from "../Pages/HSM/ProductCategory/productCategory.jsx";
import ServiceCategory from "../Pages/HSM/ServiceCategory/serviceCategory.jsx";
import ServicePackageList from "../Pages/HSM/ServicePackage/servicePackage";
import AddNewServicePackage from "../Pages/HSM/ServicePackage/addServicePackage";
import EditServicePackage from "../Pages/HSM/ServicePackage/editServicePackage";
import EditCategoryList from "../Pages/HSM/CategoryList/editCategoryList";
import AddNewCategoryList from "../Pages/HSM/CategoryList/addNewCategoryList";
import EditProductCategory from "../Pages/HSM/ProductCategory/editProductCategory";
import EditServiceCategory from "../Pages/HSM/ServiceCategory/editServiceCategory";
import AddNewProductCategory from "../Pages/HSM/ProductCategory/addNewProductCategory";
import AddNewServiceCategory from "../Pages/HSM/ServiceCategory/addNewServiceCategory";
import Psm_Bookings from "../Pages/PSM/ProjectBookings/Bookings_psm";
import PSM_CategoryList from "../Pages/PSM/CRUD/Category";
import EditCategoryList_PSM from "../Pages/PSM/CRUD/editCategoryList";
import AddNewCategoryList_PSM from "../Pages/PSM/CRUD/addNewCategoryList";

// import { useLocation } from 'react-router-dom';

function Home() {
  const [expand, setExpand] = useState("");
  // const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  // const token = location.state.token;

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  const togleExpand = (menu) => {
    setExpand(menu);
  };

  // if (!cookie.get('jwt')) {
  //   navigate('/'); // Redirect to login page
  //   return null; // Return null to prevent rendering the component
  // }

  return (
    <div className="flex">
      {cookie.get("jwt") && (
        <>
          <SideNavBar
            expand={expand}
            setExpand={togleExpand}
            activeTab={activeTab}
            setActiveTab={handleActiveTab}
          />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route
              exact
              path="/allUsers"
              element={
                <UserDetails
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/bookings"
              element={
                <ProjectBooking
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/bookings_psm"
              element={
                <Psm_Bookings
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/categoryList"
              element={
                <CategoryList
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/crud_category"
              element={
                <PSM_CategoryList
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/categoryList"
              element={
                <CategoryList
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/servicePackageList"
              element={
                <ServicePackageList
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/addNewServicePackageList"
              element={
                <AddNewServicePackage
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/addNewCategoryList"
              element={
                <AddNewCategoryList
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/addNewCategoryListpsm"
              element={
                <AddNewCategoryList_PSM
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/addNewServiceCategory"
              element={
                <AddNewServiceCategory
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/addNewProductCategory"
              element={
                <AddNewProductCategory
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/productCategoryList"
              element={
                <ProductCategory
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/serviceCategoryList"
              element={
                <ServiceCategory
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/viewOrder"
              element={
                <Vieworder
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/addMembers"
              element={
                <AddMembers
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/helpDesk"
              element={
                <HelpDesk
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/addListing"
              element={
                <AddListing
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/reviewForManagement"
              element={
                <ReviewMPM
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/catagoryManagement"
              element={
                <AllMarketProducts
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editListing"
              element={
                <EditListing
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editPromotion"
              element={
                <EditPromotion
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editPage"
              element={
                <EditPage
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editMember"
              element={
                <EditMember
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/listingManagement"
              element={
                <ListingManagement
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/suspendMarketUser"
              element={
                <SuspendedMarketUser
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/contentManagement"
              element={
                <AllPages
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editDetails"
              element={
                <EditUser
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/UserDetails"
              element={
                <ViewUser
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/createUser"
              element={
                <CreateUser
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/MemberDetails"
              element={
                <MemberDetails
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/createNewPage"
              element={
                <CreateNewPage
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/addShowcase"
              element={
                <AddShowcase
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/addProduct"
              element={
                <AddProduct
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/addNewRole"
              element={
                <AddNewRole
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/addPromotion"
              element={
                <AddPromotion
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/addNewCategory"
              element={
                <AddNewCategory
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />

            <Route
              exact
              path="/editServices"
              element={
                <EditService
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editCategoryList"
              element={
                <EditCategoryList
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editCategoryListpsm"
              element={
                <EditCategoryList_PSM
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editServiceCategory"
              element={
                <EditServiceCategory
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editProductCategory"
              element={
                <EditProductCategory
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editProduct"
              element={
                <EditProduct
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editShowcase"
              element={
                <EditShowcase
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editCategory"
              element={
                <EditCategory
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/editServicePackage"
              element={
                <EditServicePackage
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/chatHelp"
              element={
                <Chatdetails
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/permission"
              element={
                <Prm setExpand={togleExpand} setActiveTab={handleActiveTab} />
              }
            />
            <Route
              exact
              path="/settings"
              element={
                <Configuration
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/projectList"
              element={
                <ProjectList
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/featuredProject"
              element={
                <FeaturedProject
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/productList"
              element={
                <AllProducts
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/featuredProduct"
              element={
                <FeaturedProducts
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/promotionManagement"
              element={
                <AllPromotion
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/transactionHistory"
              element={
                <TransactionHistory
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/reviewManagement"
              element={
                <Reviews
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/permission"
              element={
                <PRM setExpand={togleExpand} setActiveTab={handleActiveTab} />
              }
            />
            <Route
              exact
              path="/SuspendUsers"
              element={
                <SuspendedUser
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/customerRelationship"
              element={
                <AllMembers
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
            <Route
              exact
              path="/allMembers"
              element={
                <AllMarketMember
                  setExpand={togleExpand}
                  setActiveTab={handleActiveTab}
                />
              }
            />
          </Routes>
        </>
      )}
    </div>
  );
}

export default Home;
