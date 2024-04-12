'use client'

import { useEffect, useState } from "react";

export function CustomPage() {
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth
            if (width >= 2560) {
                setScreenSize('xl:w-1/6')
            } else if (width >= 1920) {
                setScreenSize('xl:w-1/5')
            } else {
                setScreenSize('xl:w-1/4')
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const savedPosition = sessionStorage.getItem('scrollPosition')
        if (savedPosition !== null) {
            window.scrollTo(0, parseInt(savedPosition, 10))
        }
        return () =>
            sessionStorage.setItem('scrollPosition', window.scrollY.toString())
    }, [])

    return (
        <div>

        </div>
    )

}