import React, { FC, ReactNode, useEffect, useState } from 'react'
import { Header} from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'
import headerStyles from './../header/Header.module.css'

type PropsType = {
    children: ReactNode
}

export const Layout: FC<PropsType> = ({ children }) => {
    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    useEffect(() => {
        const header = document.getElementsByClassName(headerStyles.header)
        const headerElement = header[0] as HTMLElement
        if (open) {
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            headerElement.style.paddingRight = `${50 + scrollBarWidth}px`
            document.body.style.paddingRight = `${scrollBarWidth}px`
            document.body.style.overflow = 'hidden'
        }
        if (!open) {
            headerElement.style.paddingRight = `50px`
            document.body.style.paddingRight = `0px`
            document.body.style.overflow = 'unset'
        }
    }, [open]) // отключает прокрутку при открытом меню

    return (
        <>
            <Sidebar open={open} handleClose={handleClose} />
            <Header handleOpen={handleOpen} />
            <div>
                {/*страницы*/}
                {children}
            </div>
        </>
    )
}
