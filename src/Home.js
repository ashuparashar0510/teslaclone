import React from 'react'
import Header from './Header'
import Section from './Section'

export default function Home(){
    return(
        <>
        <Header/>
        <Section
            carname="Model 3"
            tagline="Order Online for Touchless Delievery"
            lbuttontext="Custom Order"
            rbuttontext="Existing Inventory"
            bgimage="model-3.jpg"
        
        />

        <Section
            carname="Model Y"
            tagline="Order Online for Touchless Delievery"
            lbuttontext="Custom Order"
            rbuttontext="Existing Inventory"
            bgimage="model-y.jpg"
        />

        <Section
            carname="Model S"
            tagline="Order Online for Touchless Delievery"
            lbuttontext="Custom Order"
            rbuttontext="Existing Inventory"
            bgimage="model-s.jpg"
        />

        <Section
            carname="Model X"
            tagline="Order Online for Touchless Delievery"
            lbuttontext="Custom Order"
            rbuttontext="Existing Inventory"
            bgimage="model-x.jpg"
        />

        <Section
            carname="Solar Panels"
            tagline="Lowest Cost Solar Panels in America"
            lbuttontext="Order Now"
            rbuttontext="Learn More"
            bgimage="solar-panel.jpg"
        />

        <Section
            carname="Solar Roof"
            tagline="Produce Clean Energy From Your Roof"
            lbuttontext="Order Now"
            rbuttontext="Learn More"
            bgimage="solar-roof.jpg"
        />

        <Section
            carname="Accessories"
            lbuttontext="Shop Now"
            bgimage="accessories.jpg"
            
        />
        </>
    )
}