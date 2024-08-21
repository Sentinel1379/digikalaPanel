"use client";

import { useState } from "react";

export default function ProductionMenu() {
  const [subMenu, setSubMenu] = useState("mobile");
  console.log(subMenu);

  return (
    <>
      <div className="dropdown-menu Navbar-col1-menu">
        <section className="Navbar-col1-menu-titleGroup">
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("mobile");
            }}
            style={{
              borderTop:
                subMenu == "mobile"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "mobile"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "mobile" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-phone"></i>
            <span>موبایل</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("digital");
            }}
            style={{
              borderTop:
                subMenu == "digital"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "digital"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "digital" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-laptop"></i>
            <span>کالای دیجیتال</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("book");
            }}
            style={{
              borderTop:
                subMenu == "book"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "book"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "book" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-pen"></i>
            <span>کتاب، لوازم التحریر و هنر</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("house");
            }}
            style={{
              borderTop:
                subMenu == "house"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "house"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "house" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-cup"></i>
            <span>خانه و آشپزخانه</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("furniture");
            }}
            style={{
              borderTop:
                subMenu == "furniture"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "furniture"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "furniture" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-lamp"></i>
            <span>لوازم خانگی برقی</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("clothes");
            }}
            style={{
              borderTop:
                subMenu == "clothes"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "clothes"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "clothes" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-watch"></i>
            <span>مد و پوشاک</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("golde");
            }}
            style={{
              borderTop:
                subMenu == "golde"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "golde"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "golde" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-watch"></i>
            <span>طلا و نقره</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("health");
            }}
            style={{
              borderTop:
                subMenu == "health"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "health"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "health" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-heart-pulse"></i>
            <span>آرایشی و بهداشتی</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("medicalTools");
            }}
            style={{
              borderTop:
                subMenu == "medicalTools"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "medicalTools"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor:
                subMenu == "medicalTools" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-activity"></i>
            <span>نجهیزات پزشکی و سلامت</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("car");
            }}
            style={{
              borderTop:
                subMenu == "car"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "car"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "car" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-car-front-fill"></i>
            <span>خودرو و موتورسیکلت</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("tools");
            }}
            style={{
              borderTop:
                subMenu == "tools"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "tools"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "tools" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-tools"></i>
            <span>ابزارآلات و تجهیزات</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("sport");
            }}
            style={{
              borderTop:
                subMenu == "sport"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "sport"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "sport" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-scooter"></i>
            <span>ورزش و سفر</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("gift");
            }}
            style={{
              borderTop:
                subMenu == "gift"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "gift"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "gift" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-credit-card"></i>
            <span>کارت هدیه و گیفت کارت</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("food");
            }}
            style={{
              borderTop:
                subMenu == "food"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "food"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "food" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-egg"></i>
            <span>کالای خوراکی و اساسی</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("toy");
            }}
            style={{
              borderTop:
                subMenu == "toy"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "toy"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "toy" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-balloon"></i>
            <span>اسباب بازی، کودک و نوزاد</span>
          </a>
          <a
            href=""
            className="Navbar-col1-menu-titleGroup-item"
            onMouseOver={() => {
              setSubMenu("local");
            }}
            style={{
              borderTop:
                subMenu == "local"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              borderBottom:
                subMenu == "local"
                  ? "1px solid #f0f0f1"
                  : "1px solid transparent",
              backgroundColor: subMenu == "local" ? "#fff" : "transparent",
            }}
          >
            <i class="bi bi-geo"></i>
            <span>محصولات بومی و محلی</span>
          </a>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "mobile" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات موبایل
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای مختلف گوشی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آیفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی نوکیا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موتورولا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ناتینگفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی ال ایکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جنرال لوکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی داریا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گوگل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اوپو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل تنکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی وان پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل دوجی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس قیمت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل ارزان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل قسطی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 2 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 5 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 7 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 15 میلیون تومان </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی بالای 15 میلیون تومان</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس عملکرد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دکمه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ضد آب </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی مناسب عکاسی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی میان رده</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اقتصادی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دانش آموزی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی پرچمدار</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دو سیمکارت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس حافظه داخلی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 32 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 128 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 256 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 1 ترابایت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رزولوشن عکس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 13 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 48 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 108 مگاپیکسل</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قاب و کاور گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلس گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هولدر گوشی موبایل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شارژ و مبدل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاوربانک (شارژر همراه)</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت اپل (آی پد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت مایکروسافت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت دانش آموزی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>داغ ترین‌ها</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 Ultra</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A54</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A34</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A24</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A14</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 FE</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی نوت 12</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو C40</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو X5 Pro 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی A2 Plus</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو M5s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر X9a</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>موتورولا moto E13</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جی پلاس Q20s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>داریا باند 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جدیدترین محصولات اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "digital" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات کالای دیجیتال
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسوس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مک بوک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ HP</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ دل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ام اس آی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ کاستوم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کول پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیف لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>استیکر لپ‌تاپ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کنسول بازی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps5</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>xbox</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps4</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>وسایل گیمینگ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دسته بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فرمان بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دیسک های بازی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>all in one</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>mini pc</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قلم نوری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رم ریدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس اسمبل شده</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیبورد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد مکانیکال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیس کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماوس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس بی سیم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مانیتور</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مانیتور گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>اسپیکر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر بلوتوثی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر jbl</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر هارمن کاردن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر تسکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر مکسیدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پارتی باکس</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>قطعات کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پردازنده (cpu)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت گرافیک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مادربرد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دانگل بلوتوث</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رم کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون ریزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدست</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند ساعت هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لوازم جانبی ساعت هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین فیلمبرداری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین کنون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین چاپ سریع</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رینگ لایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پایه دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لنز دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت حافظه</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات ذخیره‌سازی اطلاعات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد ssd</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اینترنال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اکسترنال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>فلش</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 256 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 128 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 64 گیگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پاور بانک</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فست شارژ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انکر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انرجایزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>باتری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری لیتیومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری قلمی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پرینتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر سه بعدی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر حرارتی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر رنگی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر لیبل زن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر اچ پی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماشین‌های اداری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل پرینتر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارتریج</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسکنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تلفن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بارکدخوان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو وال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو پروژکتور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دستگاه حضور و غیاب</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات شبکه و ارتباطات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>یو پی اس (UPS)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سوییچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پچ پنل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اکسس پوینت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب USB</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سیم آنتن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپلیتر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مودم</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم جیبی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم همراه اول</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات امنیتی و نظارتی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین مدار بسته</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>خانه هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نور و روشنایی هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کلید و پریز هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سنسور هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب و دستیار صوتی هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>توشیبا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تکنو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مبین نت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نینتندو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>وان مور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تی پی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیو سی وای</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون گربه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فیفا</span>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "book" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات موبایل
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای مختلف گوشی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آیفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی نوکیا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موتورولا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ناتینگفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی ال ایکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جنرال لوکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی داریا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گوگل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اوپو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل تنکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی وان پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل دوجی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس قیمت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل ارزان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل قسطی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 2 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 5 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 7 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 15 میلیون تومان </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی بالای 15 میلیون تومان</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس عملکرد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دکمه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ضد آب </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی مناسب عکاسی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی میان رده</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اقتصادی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دانش آموزی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی پرچمدار</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دو سیمکارت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس حافظه داخلی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 32 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 128 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 256 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 1 ترابایت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رزولوشن عکس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 13 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 48 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 108 مگاپیکسل</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قاب و کاور گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلس گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هولدر گوشی موبایل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شارژ و مبدل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاوربانک (شارژر همراه)</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت اپل (آی پد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت مایکروسافت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت دانش آموزی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>داغ ترین‌ها</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 Ultra</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A54</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A34</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A24</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A14</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 FE</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی نوت 12</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو C40</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو X5 Pro 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی A2 Plus</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو M5s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر X9a</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>موتورولا moto E13</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جی پلاس Q20s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>داریا باند 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جدیدترین محصولات اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "house" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
          <a href="" className="subTitleGroup-tab">
              همه محصولات کالای دیجیتال
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسوس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مک بوک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ HP</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ دل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ام اس آی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ کاستوم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کول پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیف لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>استیکر لپ‌تاپ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کنسول بازی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps5</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>xbox</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps4</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>وسایل گیمینگ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دسته بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فرمان بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دیسک های بازی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>all in one</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>mini pc</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قلم نوری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رم ریدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس اسمبل شده</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیبورد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد مکانیکال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیس کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماوس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس بی سیم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مانیتور</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مانیتور گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>اسپیکر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر بلوتوثی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر jbl</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر هارمن کاردن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر تسکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر مکسیدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پارتی باکس</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>قطعات کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پردازنده (cpu)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت گرافیک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مادربرد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دانگل بلوتوث</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رم کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون ریزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدست</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند ساعت هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لوازم جانبی ساعت هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین فیلمبرداری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین کنون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین چاپ سریع</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رینگ لایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پایه دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لنز دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت حافظه</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات ذخیره‌سازی اطلاعات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد ssd</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اینترنال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اکسترنال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>فلش</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 256 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 128 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 64 گیگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پاور بانک</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فست شارژ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انکر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انرجایزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>باتری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری لیتیومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری قلمی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پرینتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر سه بعدی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر حرارتی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر رنگی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر لیبل زن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر اچ پی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماشین‌های اداری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل پرینتر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارتریج</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسکنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تلفن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بارکدخوان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو وال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو پروژکتور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دستگاه حضور و غیاب</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات شبکه و ارتباطات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>یو پی اس (UPS)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سوییچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پچ پنل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اکسس پوینت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب USB</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سیم آنتن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپلیتر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مودم</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم جیبی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم همراه اول</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات امنیتی و نظارتی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین مدار بسته</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>خانه هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نور و روشنایی هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کلید و پریز هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سنسور هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب و دستیار صوتی هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>توشیبا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تکنو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مبین نت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نینتندو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>وان مور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تی پی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیو سی وای</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون گربه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فیفا</span>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "furniture" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات موبایل
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای مختلف گوشی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آیفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی نوکیا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موتورولا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ناتینگفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی ال ایکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جنرال لوکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی داریا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گوگل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اوپو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل تنکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی وان پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل دوجی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس قیمت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل ارزان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل قسطی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 2 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 5 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 7 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 15 میلیون تومان </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی بالای 15 میلیون تومان</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس عملکرد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دکمه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ضد آب </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی مناسب عکاسی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی میان رده</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اقتصادی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دانش آموزی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی پرچمدار</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دو سیمکارت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس حافظه داخلی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 32 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 128 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 256 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 1 ترابایت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رزولوشن عکس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 13 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 48 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 108 مگاپیکسل</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قاب و کاور گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلس گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هولدر گوشی موبایل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شارژ و مبدل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاوربانک (شارژر همراه)</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت اپل (آی پد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت مایکروسافت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت دانش آموزی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>داغ ترین‌ها</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 Ultra</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A54</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A34</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A24</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A14</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 FE</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی نوت 12</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو C40</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو X5 Pro 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی A2 Plus</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو M5s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر X9a</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>موتورولا moto E13</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جی پلاس Q20s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>داریا باند 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جدیدترین محصولات اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "clothes" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
          <a href="" className="subTitleGroup-tab">
              همه محصولات کالای دیجیتال
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسوس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مک بوک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ HP</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ دل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ام اس آی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ کاستوم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کول پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیف لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>استیکر لپ‌تاپ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کنسول بازی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps5</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>xbox</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps4</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>وسایل گیمینگ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دسته بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فرمان بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دیسک های بازی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>all in one</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>mini pc</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قلم نوری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رم ریدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس اسمبل شده</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیبورد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد مکانیکال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیس کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماوس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس بی سیم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مانیتور</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مانیتور گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>اسپیکر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر بلوتوثی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر jbl</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر هارمن کاردن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر تسکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر مکسیدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پارتی باکس</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>قطعات کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پردازنده (cpu)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت گرافیک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مادربرد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دانگل بلوتوث</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رم کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون ریزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدست</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند ساعت هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لوازم جانبی ساعت هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین فیلمبرداری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین کنون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین چاپ سریع</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رینگ لایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پایه دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لنز دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت حافظه</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات ذخیره‌سازی اطلاعات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد ssd</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اینترنال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اکسترنال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>فلش</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 256 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 128 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 64 گیگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پاور بانک</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فست شارژ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انکر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انرجایزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>باتری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری لیتیومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری قلمی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پرینتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر سه بعدی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر حرارتی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر رنگی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر لیبل زن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر اچ پی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماشین‌های اداری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل پرینتر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارتریج</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسکنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تلفن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بارکدخوان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو وال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو پروژکتور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دستگاه حضور و غیاب</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات شبکه و ارتباطات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>یو پی اس (UPS)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سوییچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پچ پنل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اکسس پوینت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب USB</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سیم آنتن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپلیتر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مودم</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم جیبی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم همراه اول</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات امنیتی و نظارتی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین مدار بسته</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>خانه هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نور و روشنایی هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کلید و پریز هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سنسور هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب و دستیار صوتی هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>توشیبا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تکنو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مبین نت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نینتندو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>وان مور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تی پی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیو سی وای</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون گربه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فیفا</span>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "golde" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات موبایل
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای مختلف گوشی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آیفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی نوکیا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موتورولا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ناتینگفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی ال ایکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جنرال لوکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی داریا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گوگل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اوپو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل تنکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی وان پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل دوجی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس قیمت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل ارزان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل قسطی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 2 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 5 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 7 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 15 میلیون تومان </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی بالای 15 میلیون تومان</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس عملکرد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دکمه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ضد آب </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی مناسب عکاسی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی میان رده</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اقتصادی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دانش آموزی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی پرچمدار</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دو سیمکارت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس حافظه داخلی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 32 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 128 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 256 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 1 ترابایت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رزولوشن عکس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 13 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 48 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 108 مگاپیکسل</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قاب و کاور گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلس گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هولدر گوشی موبایل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شارژ و مبدل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاوربانک (شارژر همراه)</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت اپل (آی پد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت مایکروسافت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت دانش آموزی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>داغ ترین‌ها</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 Ultra</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A54</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A34</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A24</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A14</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 FE</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی نوت 12</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو C40</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو X5 Pro 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی A2 Plus</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو M5s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر X9a</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>موتورولا moto E13</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جی پلاس Q20s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>داریا باند 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جدیدترین محصولات اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "health" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات کالای دیجیتال
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسوس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مک بوک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ HP</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ دل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ام اس آی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ کاستوم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کول پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیف لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>استیکر لپ‌تاپ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کنسول بازی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps5</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>xbox</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps4</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>وسایل گیمینگ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دسته بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فرمان بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دیسک های بازی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>all in one</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>mini pc</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قلم نوری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رم ریدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس اسمبل شده</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیبورد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد مکانیکال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیس کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماوس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس بی سیم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مانیتور</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مانیتور گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>اسپیکر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر بلوتوثی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر jbl</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر هارمن کاردن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر تسکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر مکسیدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پارتی باکس</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>قطعات کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پردازنده (cpu)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت گرافیک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مادربرد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دانگل بلوتوث</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رم کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون ریزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدست</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند ساعت هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لوازم جانبی ساعت هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین فیلمبرداری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین کنون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین چاپ سریع</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رینگ لایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پایه دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لنز دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت حافظه</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات ذخیره‌سازی اطلاعات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد ssd</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اینترنال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اکسترنال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>فلش</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 256 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 128 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 64 گیگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پاور بانک</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فست شارژ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انکر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انرجایزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>باتری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری لیتیومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری قلمی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پرینتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر سه بعدی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر حرارتی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر رنگی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر لیبل زن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر اچ پی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماشین‌های اداری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل پرینتر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارتریج</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسکنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تلفن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بارکدخوان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو وال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو پروژکتور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دستگاه حضور و غیاب</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات شبکه و ارتباطات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>یو پی اس (UPS)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سوییچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پچ پنل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اکسس پوینت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب USB</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سیم آنتن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپلیتر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مودم</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم جیبی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم همراه اول</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات امنیتی و نظارتی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین مدار بسته</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>خانه هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نور و روشنایی هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کلید و پریز هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سنسور هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب و دستیار صوتی هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>توشیبا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تکنو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مبین نت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نینتندو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>وان مور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تی پی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیو سی وای</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون گربه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فیفا</span>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "medicalTools" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات موبایل
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای مختلف گوشی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آیفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی نوکیا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موتورولا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ناتینگفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی ال ایکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جنرال لوکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی داریا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گوگل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اوپو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل تنکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی وان پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل دوجی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس قیمت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل ارزان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل قسطی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 2 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 5 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 7 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 15 میلیون تومان </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی بالای 15 میلیون تومان</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس عملکرد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دکمه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ضد آب </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی مناسب عکاسی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی میان رده</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اقتصادی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دانش آموزی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی پرچمدار</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دو سیمکارت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس حافظه داخلی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 32 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 128 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 256 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 1 ترابایت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رزولوشن عکس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 13 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 48 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 108 مگاپیکسل</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قاب و کاور گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلس گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هولدر گوشی موبایل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شارژ و مبدل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاوربانک (شارژر همراه)</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت اپل (آی پد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت مایکروسافت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت دانش آموزی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>داغ ترین‌ها</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 Ultra</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A54</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A34</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A24</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A14</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 FE</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی نوت 12</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو C40</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو X5 Pro 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی A2 Plus</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو M5s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر X9a</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>موتورولا moto E13</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جی پلاس Q20s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>داریا باند 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جدیدترین محصولات اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "car" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات کالای دیجیتال
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسوس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مک بوک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ HP</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ دل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ام اس آی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ کاستوم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کول پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیف لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>استیکر لپ‌تاپ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کنسول بازی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps5</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>xbox</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps4</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>وسایل گیمینگ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دسته بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فرمان بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دیسک های بازی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>all in one</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>mini pc</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قلم نوری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رم ریدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس اسمبل شده</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیبورد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد مکانیکال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیس کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماوس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس بی سیم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مانیتور</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مانیتور گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>اسپیکر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر بلوتوثی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر jbl</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر هارمن کاردن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر تسکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر مکسیدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پارتی باکس</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>قطعات کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پردازنده (cpu)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت گرافیک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مادربرد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دانگل بلوتوث</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رم کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون ریزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدست</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند ساعت هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لوازم جانبی ساعت هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین فیلمبرداری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین کنون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین چاپ سریع</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رینگ لایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پایه دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لنز دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت حافظه</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات ذخیره‌سازی اطلاعات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد ssd</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اینترنال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اکسترنال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>فلش</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 256 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 128 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 64 گیگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پاور بانک</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فست شارژ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انکر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انرجایزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>باتری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری لیتیومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری قلمی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پرینتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر سه بعدی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر حرارتی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر رنگی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر لیبل زن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر اچ پی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماشین‌های اداری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل پرینتر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارتریج</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسکنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تلفن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بارکدخوان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو وال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو پروژکتور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دستگاه حضور و غیاب</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات شبکه و ارتباطات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>یو پی اس (UPS)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سوییچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پچ پنل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اکسس پوینت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب USB</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سیم آنتن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپلیتر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مودم</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم جیبی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم همراه اول</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات امنیتی و نظارتی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین مدار بسته</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>خانه هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نور و روشنایی هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کلید و پریز هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سنسور هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب و دستیار صوتی هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>توشیبا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تکنو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مبین نت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نینتندو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>وان مور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تی پی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیو سی وای</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون گربه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فیفا</span>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "tools" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات موبایل
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای مختلف گوشی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آیفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی نوکیا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موتورولا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ناتینگفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی ال ایکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جنرال لوکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی داریا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گوگل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اوپو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل تنکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی وان پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل دوجی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس قیمت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل ارزان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل قسطی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 2 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 5 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 7 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 15 میلیون تومان </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی بالای 15 میلیون تومان</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس عملکرد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دکمه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ضد آب </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی مناسب عکاسی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی میان رده</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اقتصادی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دانش آموزی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی پرچمدار</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دو سیمکارت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس حافظه داخلی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 32 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 128 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 256 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 1 ترابایت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رزولوشن عکس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 13 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 48 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 108 مگاپیکسل</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قاب و کاور گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلس گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هولدر گوشی موبایل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شارژ و مبدل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاوربانک (شارژر همراه)</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت اپل (آی پد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت مایکروسافت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت دانش آموزی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>داغ ترین‌ها</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 Ultra</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A54</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A34</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A24</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A14</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 FE</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی نوت 12</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو C40</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو X5 Pro 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی A2 Plus</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو M5s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر X9a</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>موتورولا moto E13</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جی پلاس Q20s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>داریا باند 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جدیدترین محصولات اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "sport" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات کالای دیجیتال
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسوس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مک بوک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ HP</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ دل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ام اس آی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ کاستوم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کول پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیف لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>استیکر لپ‌تاپ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کنسول بازی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps5</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>xbox</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps4</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>وسایل گیمینگ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دسته بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فرمان بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دیسک های بازی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>all in one</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>mini pc</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قلم نوری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رم ریدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس اسمبل شده</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیبورد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد مکانیکال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیس کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماوس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس بی سیم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مانیتور</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مانیتور گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>اسپیکر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر بلوتوثی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر jbl</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر هارمن کاردن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر تسکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر مکسیدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پارتی باکس</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>قطعات کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پردازنده (cpu)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت گرافیک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مادربرد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دانگل بلوتوث</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رم کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون ریزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدست</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند ساعت هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لوازم جانبی ساعت هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین فیلمبرداری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین کنون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین چاپ سریع</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رینگ لایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پایه دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لنز دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت حافظه</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات ذخیره‌سازی اطلاعات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد ssd</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اینترنال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اکسترنال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>فلش</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 256 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 128 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 64 گیگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پاور بانک</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فست شارژ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انکر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انرجایزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>باتری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری لیتیومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری قلمی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پرینتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر سه بعدی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر حرارتی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر رنگی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر لیبل زن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر اچ پی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماشین‌های اداری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل پرینتر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارتریج</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسکنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تلفن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بارکدخوان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو وال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو پروژکتور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دستگاه حضور و غیاب</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات شبکه و ارتباطات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>یو پی اس (UPS)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سوییچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پچ پنل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اکسس پوینت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب USB</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سیم آنتن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپلیتر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مودم</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم جیبی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم همراه اول</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات امنیتی و نظارتی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین مدار بسته</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>خانه هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نور و روشنایی هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کلید و پریز هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سنسور هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب و دستیار صوتی هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>توشیبا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تکنو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مبین نت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نینتندو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>وان مور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تی پی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیو سی وای</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون گربه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فیفا</span>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "gift" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات موبایل
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای مختلف گوشی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آیفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی نوکیا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موتورولا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ناتینگفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی ال ایکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جنرال لوکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی داریا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گوگل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اوپو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل تنکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی وان پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل دوجی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس قیمت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل ارزان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل قسطی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 2 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 5 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 7 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 15 میلیون تومان </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی بالای 15 میلیون تومان</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس عملکرد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دکمه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ضد آب </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی مناسب عکاسی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی میان رده</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اقتصادی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دانش آموزی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی پرچمدار</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دو سیمکارت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس حافظه داخلی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 32 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 128 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 256 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 1 ترابایت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رزولوشن عکس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 13 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 48 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 108 مگاپیکسل</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قاب و کاور گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلس گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هولدر گوشی موبایل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شارژ و مبدل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاوربانک (شارژر همراه)</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت اپل (آی پد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت مایکروسافت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت دانش آموزی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>داغ ترین‌ها</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 Ultra</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A54</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A34</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A24</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A14</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 FE</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی نوت 12</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو C40</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو X5 Pro 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی A2 Plus</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو M5s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر X9a</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>موتورولا moto E13</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جی پلاس Q20s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>داریا باند 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جدیدترین محصولات اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "food" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات کالای دیجیتال
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسوس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مک بوک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ HP</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ دل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ام اس آی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ کاستوم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کول پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیف لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>استیکر لپ‌تاپ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کنسول بازی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps5</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>xbox</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps4</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>وسایل گیمینگ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دسته بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فرمان بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دیسک های بازی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>all in one</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>mini pc</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قلم نوری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رم ریدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس اسمبل شده</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیبورد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد مکانیکال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیس کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماوس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس بی سیم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مانیتور</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مانیتور گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>اسپیکر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر بلوتوثی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر jbl</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر هارمن کاردن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر تسکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر مکسیدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پارتی باکس</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>قطعات کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پردازنده (cpu)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت گرافیک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مادربرد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دانگل بلوتوث</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رم کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون ریزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدست</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند ساعت هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لوازم جانبی ساعت هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین فیلمبرداری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین کنون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین چاپ سریع</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رینگ لایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پایه دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لنز دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت حافظه</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات ذخیره‌سازی اطلاعات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد ssd</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اینترنال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اکسترنال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>فلش</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 256 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 128 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 64 گیگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پاور بانک</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فست شارژ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انکر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انرجایزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>باتری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری لیتیومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری قلمی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پرینتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر سه بعدی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر حرارتی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر رنگی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر لیبل زن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر اچ پی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماشین‌های اداری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل پرینتر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارتریج</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسکنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تلفن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بارکدخوان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو وال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو پروژکتور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دستگاه حضور و غیاب</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات شبکه و ارتباطات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>یو پی اس (UPS)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سوییچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پچ پنل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اکسس پوینت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب USB</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سیم آنتن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپلیتر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مودم</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم جیبی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم همراه اول</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات امنیتی و نظارتی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین مدار بسته</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>خانه هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نور و روشنایی هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کلید و پریز هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سنسور هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب و دستیار صوتی هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>توشیبا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تکنو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مبین نت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نینتندو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>وان مور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تی پی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیو سی وای</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون گربه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فیفا</span>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "toy" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات موبایل
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای مختلف گوشی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آیفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی نوکیا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موتورولا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ناتینگفون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جی ال ایکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی جنرال لوکس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی داریا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گوگل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اوپو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل تنکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی وان پلاس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل دوجی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس قیمت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل ارزان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی موبایل قسطی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 2 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 5 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 7 میلیون تومان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 15 میلیون تومان </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی بالای 15 میلیون تومان</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس عملکرد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دکمه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی ضد آب </span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی مناسب عکاسی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی میان رده</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی اقتصادی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی دانش آموزی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی پرچمدار</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دو سیمکارت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>گوشی براساس حافظه داخلی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 32 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 128 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 256 گیگابایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 1 ترابایت</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رزولوشن عکس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 13 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 16 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 48 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 64 مگاپیکسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گوشی تا 108 مگاپیکسل</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی موبایل</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قاب و کاور گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلس گوشی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هولدر گوشی موبایل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شارژ و مبدل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاوربانک (شارژر همراه)</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت اپل (آی پد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت مایکروسافت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تبلت دانش آموزی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>داغ ترین‌ها</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 Ultra</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A54</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A34</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A24</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی A14</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گلکسی S23 FE</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی نوت 12</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو C40</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو X5 Pro 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ردمی A2 Plus</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پوکو M5s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر X9a</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>موتورولا moto E13</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جی پلاس Q20s</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>داریا باند 5G</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>جدیدترین محصولات اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
            </div>
          </div>
        </section>
        <section
          className="Navbar-col1-menu-subTitleGroup"
          style={{ display: subMenu == "local" ? "block" : "none" }}
        >
          <div className="Navbar-col1-menu-subTitleGroup-container">
            <a href="" className="subTitleGroup-tab">
              همه محصولات کالای دیجیتال
              <i class="bi bi-chevron-left"></i>
            </a>
            <div className="subTitleGroup-listGroup">
              <section className="subTitleGroup-listGroup-col">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسوس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ لنوو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مک بوک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ HP</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ دل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ایسر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ ام اس آی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لپ‌تاپ کاستوم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>لوازم جانبی لپ تاپ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شارژر لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کول پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیف لپ‌تاپ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>استیکر لپ‌تاپ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کنسول بازی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps5</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>xbox</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ps4</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>وسایل گیمینگ</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دسته بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فرمان بازی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دیسک های بازی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>all in one</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>mini pc</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>قلم نوری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رم ریدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس پد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس اسمبل شده</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیبورد</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیبورد مکانیکال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>کیس کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیس گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماوس</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ماوس بی سیم</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مانیتور</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مانیتور گیمینگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>اسپیکر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر بلوتوثی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر jbl</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر هارمن کاردن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر تسکو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپیکر مکسیدر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پارتی باکس</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>قطعات کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پردازنده (cpu)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت گرافیک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مادربرد</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دانگل بلوتوث</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>رم کامپیوتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدفون</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بی سیم</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون اپل (ایرپاد)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون سامسونگ (ایربادز)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون جی بی ال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون ریزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>هدست</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ساعت و مچ بند هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ساعت هوشمند شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند اپل واچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بند ساعت هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لوازم جانبی ساعت هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین فیلمبرداری</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین کنون</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین سونی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین چاپ سریع</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>رینگ لایت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پایه دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>لنز دوربین</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت حافظه</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات ذخیره‌سازی اطلاعات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد ssd</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اینترنال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هارد اکسترنال</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>فلش</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 256 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 128 گیگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فلش 64 گیگ</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پاور بانک</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فست شارژ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انکر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پاور بانک انرجایزر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>باتری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری لیتیومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>باتری قلمی</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>پرینتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر سه بعدی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر حرارتی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر رنگی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر لیبل زن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پرینتر اچ پی</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>ماشین‌های اداری</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل پرینتر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارتریج</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسکنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تلفن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بارکدخوان</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو وال</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ویدئو پروژکتور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دستگاه حضور و غیاب</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات شبکه و ارتباطات</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>یو پی اس (UPS)</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سوییچ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>پچ پنل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اکسس پوینت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب USB</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کابل شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کارت شبکه</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سیم آنتن</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اسپلیتر</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>مودم</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم جیبی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مودم همراه اول</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تجهیزات امنیتی و نظارتی</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دوربین مدار بسته</span>
                </a>
              </section>
              <section className="subTitleGroup-listGroup-col mx-5">
                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>تبلت</span>
                  <i class="bi bi-chevron-left"></i>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>خانه هوشمند</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نور و روشنایی هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کلید و پریز هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سنسور هوشمند</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هاب و دستیار صوتی هوشمند</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>شیائومی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>سامسونگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>اپل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هواوی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>آنر</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ریلمی</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>توشیبا</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تکنو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>ایرانسل</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>مبین نت</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>نینتندو</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>بیتس</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>وان مور</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>تی پی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>دی لینک</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>کیو سی وای</span>
                </a>

                <a href="" className="subTitleGroup-listGroup-col-title">
                  <span>برندهای برتر</span>
                  <i class="bi bi-chevron-left"></i>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>گیمینگ</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>هدفون گربه ای</span>
                </a>
                <a href="" className="subTitleGroup-listGroup-col-text">
                  <span>فیفا</span>
                </a>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
