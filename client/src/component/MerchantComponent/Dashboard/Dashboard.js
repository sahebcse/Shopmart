import React, { useState, useEffect } from 'react'

import SideNav from './SideNav'
import ProductPage from './ProductPages'
import TopproductGraph from './TopproductGraph'
import SalesGraph from './SalesGraph'
import AddProduct from '../MerchantForms/AddProduct'
import MerchantProfile from './Profile'
import {getMerchantProducts} from '../../../action/Merchant'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    useEffect(() => {
        dispatch(getMerchantProducts(user.result._id))
    }, [])

    const [activeStep,setActiveStep] = useState(0)
    const Form = ()=> {
        switch (activeStep) {
            case 0:
                return <ProductPage />
            case 1:
                return <TopproductGraph />
            case 2:
                return <SalesGraph />
            case 3:
                return <AddProduct />
            case 4:
                return <MerchantProfile />
            default:
                return <ProductPage />
        }
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="col-span-full md:col-span-1 lg:col-span-1">
                <SideNav setActiveStep={setActiveStep}/>
            </div>
            <div className="col-span-full md:col-span-2 lg:col-span-5">
                <Form />
            </div>
        </div>
    )
}

export default Dashboard
