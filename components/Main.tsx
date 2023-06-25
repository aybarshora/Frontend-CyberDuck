import Modal from 'react-modal';
import React, { useContext } from 'react'

Modal.setAppElement('#__next')

const style = {
    wrapper: `w-screen flex items-center justify-center mt-14 pb-5`,
    content: `bg-[#79E0EE] w-[95%] rounded-2xl p-4 items-center`,
    formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
    transferPropContainer: `bg-[#79E0EE] my-3 rounded-2xl p-4 text-xl border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
    transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
    currencySelector: `flex w-1/4`,
    currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
    currencySelectorIcon: `flex items-center`,
    currencySelectorTicker: `mx-2`,
    currencySelectorArrow: `text-lg`,
    confirmButton: `bg-[#2172E5] my-2 rounded-2xl py-4 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
    textGame: `font-nunito text-center text-4xl subpixel-antialiased font-bold uppercase text-[#E8AA42] `,
}

const customStyles = {
    content: {
        top: '80%',
        left: '80%',
        right: '80%',
        bottom: '80%',
        transform: 'translate(-80%, -80%)',
        backgroundColor: '#B3C890',
        padding: 0,
        border: 'none',
    },
    overlay: {
        backgroundColor: 'rgba(10, 11, 13, 0.75)',
    },
}

export const Main: React.FC = () => {
   

    return (
        <div>
        
        <div className={style.wrapper}>
            
        </div>
        </div>
    )
}
