import { useLocation } from "react-router-dom";
import { Card } from "../Card/Card"
import { useEffect } from "react";


export const CardList = () => {
    const {pathname} = useLocation();
    useEffect(() => {

    }, [])

    return <>
    <div className="flex flex-row">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div className="flex flex-row">
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <div className="row-span-3"><Card /></div>
        <div className="row-span-3"><Card /></div> */}
        {/* <div className="row-span-2 col-span-2"><Card /></div> */}
    </div>
    </>
}