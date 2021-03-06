import React from 'react';
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (

            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" className = { (navData: { isActive: boolean }) => navData.isActive ? s.active : s.item }>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" className = { (navData: { isActive: boolean; }) => navData.isActive ? s.active : s.item }>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="*" className = { (navData: { isActive: boolean; }) => navData.isActive ? s.active : s.item }>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="" className = { (navData: { isActive: boolean; }) => navData.isActive ? s.active : s.item }>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="" className = { (navData: { isActive: boolean; }) => navData.isActive ? s.active : s.item }>Settings</NavLink>
                </div>
            </nav>

    );
}