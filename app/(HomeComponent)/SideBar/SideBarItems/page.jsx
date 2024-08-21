"use client";

import { MenuContext } from "@/app/ContextProvider/page";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";

export default function SideBarItems() {
  const {itemBold, setItemBold} = useContext(MenuContext);
  console.log("SideBarItems");

  const router = useRouter();




  return (
    <section className="SideBar-row2">
      <div
        className="SideBar-row2-item"
        style={{
          backgroundColor: itemBold === "brief" ? "#f2f2f2" : "#fff",
        }}
        onClick={() => {
          setItemBold("brief");
          router.push("/");
        }}
      >
        {itemBold === "brief" && <div className="Back-line"></div>}
        <a className="SideBar-row2-item-a">
          <i class="bi bi-house"></i>
          <span
            className="SideBar-row2-item-a-text"
            style={{
              fontWeight: itemBold === "brief" ? "800" : "500",
            }}
          >
            خلاصه فعالیت ‌ها
          </span>
        </a>
      </div>
      <div
        className="SideBar-row2-item"
        style={{
          backgroundColor: itemBold === "digiPlus" ? "#f2f2f2" : "#fff",
        }}
        onClick={() => {
          setItemBold("digiPlus");
          router.push("/dgPlus");
        }}
      >
        {itemBold === "digiPlus" && <div className="Back-line"></div>}
        <a className="SideBar-row2-item-a">
          <i class="bi bi-credit-card"></i>
          <span
            className="SideBar-row2-item-a-text"
            style={{
              fontWeight: itemBold === "digiPlus" ? "800" : "500",
            }}
          >
            دیجی‌پلاس
          </span>
        </a>
      </div>
      <div
        className="SideBar-row2-item"
        style={{
          backgroundColor: itemBold === "orders" ? "#f2f2f2" : "#fff",
        }}
        onClick={() => {
          setItemBold("orders");
          router.push("/orders");
        }}
      >
        {itemBold === "orders" && <div className="Back-line"></div>}
        <a className="SideBar-row2-item-a">
          <i class="bi bi-bag"></i>
          <span
            className="SideBar-row2-item-a-text"
            style={{
              fontWeight: itemBold === "orders" ? "800" : "500",
            }}
          >
            سفارش‌ها
          </span>
        </a>
      </div>
      <div
        className="SideBar-row2-item"
        style={{
          backgroundColor: itemBold === "myList" ? "#f2f2f2" : "#fff",
        }}
        onClick={() => {
          setItemBold("myList");
          router.push("/myList");
        }}
      >
        {itemBold === "myList" && <div className="Back-line"></div>}
        <a className="SideBar-row2-item-a">
          <i class="bi bi-heart"></i>
          <span
            className="SideBar-row2-item-a-text"
            style={{
              fontWeight: itemBold === "myList" ? "800" : "500",
            }}
          >
            لیست‌های من
          </span>
        </a>
      </div>
      <div
        className="SideBar-row2-item"
        style={{
          backgroundColor: itemBold === "comments" ? "#f2f2f2" : "#fff",
        }}
        onClick={() => {
          setItemBold("comments");
          router.push("/comments");
        }}
      >
        {itemBold === "comments" && <div className="Back-line"></div>}
        <a className="SideBar-row2-item-a">
          <i class="bi bi-chat"></i>
          <span
            className="SideBar-row2-item-a-text"
            style={{
              fontWeight: itemBold === "comments" ? "800" : "500",
            }}
          >
            دیدگاه‌ها
          </span>
        </a>
      </div>
      <div
        className="SideBar-row2-item"
        style={{
          backgroundColor: itemBold === "addresses" ? "#f2f2f2" : "#fff",
        }}
        onClick={() => {
          setItemBold("addresses");
          router.push("/addresses");
        }}
      >
        {itemBold === "addresses" && <div className="Back-line"></div>}
        <a className="SideBar-row2-item-a">
          <i class="bi bi-bezier2"></i>
          <span
            className="SideBar-row2-item-a-text"
            style={{
              fontWeight: itemBold === "addresses" ? "800" : "500",
            }}
          >
            آدرس‌ها
          </span>
        </a>
      </div>
      <div
        className="SideBar-row2-item"
        style={{
          backgroundColor: itemBold === "giftCard" ? "#f2f2f2" : "#fff",
        }}
        onClick={() => {
          setItemBold("giftCard");
          router.push("/giftCard");
        }}
      >
        {itemBold === "giftCard" && <div className="Back-line"></div>}
        <a className="SideBar-row2-item-a">
          <i class="bi bi-credit-card"></i>
          <span
            className="SideBar-row2-item-a-text"
            style={{
              fontWeight: itemBold === "giftCard" ? "800" : "500",
            }}
          >
            کارت‌های هدیه
          </span>
        </a>
      </div>
      <div
        className="SideBar-row2-item"
        style={{
          backgroundColor: itemBold === "messages" ? "#f2f2f2" : "#fff",
        }}
        onClick={() => {
          setItemBold("messages");
          router.push("/messages");
        }}
      >
        {itemBold === "messages" && <div className="Back-line"></div>}
        <a
          className="SideBar-row2-item-a"
          style={{ justifyContent: "space-between" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <i class="bi bi-bell"></i>
            <span
              className="SideBar-row2-item-a-text"
              style={{
                fontWeight: itemBold === "messages" ? "800" : "500",
              }}
            >
              پیغام‌ها
            </span>
          </div>
          <span
            style={{
              color: "#fff",
              textAlign: "center",
              padding: "0 8px",
              backgroundColor: "#ef4056",
              borderRadius: "4px",
            }}
          >
            ۳
          </span>
        </a>
      </div>
      <div
        className="SideBar-row2-item"
        style={{
          backgroundColor: itemBold === "lastSeen" ? "#f2f2f2" : "#fff",
        }}
        onClick={() => {
          setItemBold("lastSeen");
          router.push("/lastSeen");
        }}
      >
        {itemBold === "lastSeen" && <div className="Back-line"></div>}
        <a className="SideBar-row2-item-a">
          <i class="bi bi-clock"></i>
          <span
            className="SideBar-row2-item-a-text"
            style={{
              fontWeight: itemBold === "lastSeen" ? "800" : "500",
            }}
          >
            بازدید‌های اخیر
          </span>
        </a>
      </div>
      <div
        className="SideBar-row2-item"
        style={{
          backgroundColor: itemBold === "profileDetail" ? "#f2f2f2" : "#fff",
        }}
        onClick={() => {
          setItemBold("profileDetail");
          router.push("/profileDetail");
        }}
      >
        {itemBold === "profileDetail" && <div className="Back-line"></div>}
        <a className="SideBar-row2-item-a">
          <i className="bi bi-person"></i>
          <span
            className="SideBar-row2-item-a-text"
            style={{
              fontWeight: itemBold === "profileDetail" ? "800" : "500",
            }}
          >
            اطلاعات حساب کاربری
          </span>
        </a>
      </div>
      <div
        className="SideBar-row2-item"
        style={{
          backgroundColor: itemBold === "exit" ? "#f2f2f2" : "#fff",
        }}
        onClick={() => {
          setItemBold("exit");
        }}
      >
        {itemBold === "exit" && <div className="Back-line"></div>}
        <a className="SideBar-row2-item-a">
          <i class="bi bi-box-arrow-right"></i>
          <span
            className="SideBar-row2-item-a-text"
            style={{
              fontWeight: itemBold === "exit" ? "800" : "500",
            }}
          >
            خروج
          </span>
        </a>
      </div>
    </section>
  );
}
