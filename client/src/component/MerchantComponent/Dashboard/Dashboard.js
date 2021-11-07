import React, { useState } from 'react'

import SideNav from './SideNav'
import ProductPage from './ProductPages'
import TopproductGraph from './TopproductGraph'
import SalesGraph from './SalesGraph'

const Dashboard = () => {
    const [activeStep,setActiveStep] = useState(0)
    const Form = ()=> {
        switch (activeStep) {
            case 0:
                return <ProductPage />
            case 1:
                return <TopproductGraph />
            case 2:
                return <SalesGraph />
            default:
                return <ProductPage />
        }
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="grid-span-full md:grid-span-1">
                <SideNav setActiveStep={setActiveStep}/>
            </div>
            <div className="grid-span-full md:grid-span-5">
                <Form />
            </div>
        </div>
    )
}

export default Dashboard
