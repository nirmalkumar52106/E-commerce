import React from "react";

import { BannerData, Bringnature2Data, DealData, CartData, HelplineData, LogoData, MenuData, PopularData ,FuterData} from "../Data";
import { Cartsection, Logo } from "../Header/Logosection";
import { Helpline, Menu } from "../Header/Menu";
import { Dailybestsellheading } from "../Heading/Dailybestsellheading";
import { Dealheading } from "../Heading/DealoftheDay";
import { Feauteredheading } from "../Heading/Feauteredctgry";
import { Popularheading } from "../Heading/Popularheading";
import { Banner } from "../Homecomponents/Banner";
import { Browsecategory } from "../Homecomponents/BrowseCategory";
import { Homecategory1 } from "../Homecomponents/Categorysection";
import { Bringnature, BringNature2, } from "../Homecomponents/Dailybestsell";
import { Popularproduct } from "../Homecomponents/Popularproduct";
import { Slider } from "../Homecomponents/Slider";
import { Newsletter } from "../Aboutcomponents/Newsletter";
import { Footerlogosectionn, FuterContent, Paymentmethod } from "../Aboutcomponents/Footer";
import { FooterTemplate } from "../Aboutcomponents/Footertemlate";
import { DealofDay } from "../Product/DealoftheDay";

// import { Slider} from "../Homecomponents/Slider";

import { CartProvider } from "react-use-cart";



function LogocardData(logo) {
  return (
    <>
      <Logo logoimg={logo.logoimg} heading1={logo.heading1} />

    </>
  )
}

function Cartcardata(cart) {
  return (
    <>
      <Cartsection icon={cart.icon} iconheading={cart.iconheading}  />
    </>
  )
}
function Menucardata(menu) {
  return (
    <>
      <Menu menulist={menu.menulist} headphoneimg={menu.headphoneimg} list={menu.list} url={menu.url} />
    </>
  )
}

function HelplinecardData(help) {
  return (
    <>
      <Helpline headphoneimg={help.headphoneimg} headphonehead1={help.headphonehead1} headphonehead2={help.headphonehead2} />

    </>
  )
}
function PopularcardData(item) {
  return (
    <>
      <Popularproduct itemimage={item.itemimage} snackname={item.snackname} itemname={item.itemname}
        actualprice={item.actualprice} pastprice={item.pastprice} />
    </>
  )
}

function Bannercardata(banner) {
  return (
    <>
      <Banner bannerimg={banner.bannerimg} bannertexthead={banner.bannertexthead} />
    </>
  )
}
function BrinnatureCrdData(item) {
  return (
    <>
      <BringNature2 itemimage={item.itemimage} snackname={item.snackname} itemname={item.itemname}
        actualprice={item.actualprice} pastprice={item.pastprice} />
    </>
  )
}
function DealcardData(deal) {
  return (
    <>
      <DealofDay dealimage={deal.dealimage} countdown1={deal.countdown1} countdown2={deal.countdown2} countdown3={deal.countdown3}
        countdown4={deal.countdown4} time1={deal.time1} time2={deal.time2} time3={deal.time3} time4={deal.time4} itemname={deal.itemname}
        actualprice={deal.actualprice} pastprice={deal.pastprice} />
    </>
  )
}
function FootercardData(footer) {
  return (
      <>

          <FuterContent contentheading={footer.contentheading} content1={footer.content1} content2={footer.content2} content3={footer.content3}
              content4={footer.content4} content5={footer.content5} content6={footer.content6} content7={footer.content7} />
      </>
  )
}

function Home() {
  
  return (
    <>
      <div className="container">

        <div className="headermain">
        <div className="logosection">
            {LogoData.map(LogocardData)}
          </div>
          <div className="cartmain">
            <CartProvider>
            {CartData.map(Cartcardata)}
           
            </CartProvider>
          </div>
        </div>
        <div className="menumain">
          <Browsecategory />
          <div className="menuin">
            <ul>
              {MenuData.map(Menucardata)}
            </ul>
          </div>
          <div className="helplinemain">
            {HelplineData.map(HelplinecardData)}
          </div>
        </div>
      </div>
      <div className="slidermain">
        <Slider />
      </div>
      <div className="container">
        <Feauteredheading />
        <Homecategory1 />
        <div className="bannermain">
          {BannerData.map(Bannercardata)}
        </div>
        <Popularheading />
        <div className="itemflex">
          {PopularData.map(PopularcardData)}
        </div>
        <div className="dailybestsellMain">
          <Dailybestsellheading />
        
          <div className="bringnaturemaininsection">
            <div className="bringnature-Section1">
              <Bringnature />
            </div>
            <div className="bringnature-section2">
              <CartProvider>
              {Bringnature2Data.map(BrinnatureCrdData)}
              </CartProvider>
            </div>
          </div>
        </div>
        <div className="dealofdaymain">
          <Dealheading />
          <div className="dealofdaymainSection">
            {DealData.map(DealcardData)}
          </div>
        </div>
      </div>
      <div className="newslettermain">
        <Newsletter />
      </div>
      <div className="footerContainer">
                <div className="footermain">
                    <Footerlogosectionn />
                    {FuterData.map(FootercardData)}
                    <Paymentmethod />
                </div>
                <FooterTemplate />
            
            </div>




    </>
  )
}

export { Home }