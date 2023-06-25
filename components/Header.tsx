import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import qush_logo from '../assets/qush_logo.png';
import { ConnectWallet } from "@thirdweb-dev/react";

const style = {
    wrapper: `p-4 w-screen flex justify-between items-center`,
    headerLogo: `flex w-1/4 items-center justify-start`,
    nav: `flex-1 flex justify-center items-center`,
    navItemsContainer: `flex bg-[#79E0EE] rounded-2xl`,
    navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[1rem] cursor-pointer rounded-3xl`,
    activeNavItem: `bg-[#98EECC]`,
    buttonsContainer: `flex w-1/4 justify-center items-center`,
    button: `flex items-center bg-[#E8AA42] rounded-2xl mx-3 text-[1rem] font-semibold cursor-pointer px-4 py-3 m-1 test-lg`,
    buttonPadding: `p-1`,
    buttonTextContainer: `h-8 flex items-center`,
    buttonIconContainer: `flex items-center justify-center w-8 h-8`,
    buttonAccent: `bg-[#B3C890] px-0 border border-[#B3C890] hover:border-[#B3C890] h-full rounded-2xl flex items-center justify-center text-[#B3C890]`,
}

const Header = () => {
    const [selectedNav, setSelectedNav] = useState('Trade')
    const navItems: string[] = ['Trade', 'Lucky Drop', 'Earn']



    return (
        <div className={style.wrapper}> 
            <div className={style.headerLogo}>
                <Image src={qush_logo} alt='uniswap' height={100} width={100} />
            </div>
            <div className={style.nav}>
                <div className={style.navItemsContainer}>
                    {navItems.map((item, index) => {
                        return (
                            <div key={index}
                                onClick={() => setSelectedNav(item)}
                                className={`${style.navItem} ${selectedNav === item && style.activeNavItem
                                    }`}
                            >
                                {item}
                            </div>
                        )
                    })}
                   
                </div>
            </div>
            <div className={style.buttonsContainer}>
                <div className={style.buttonPadding} >
                <ConnectWallet  />;
                </div>
            </div>
        </div>
    )
}
export default Header;
