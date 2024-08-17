import React, { useState } from 'react';
import Cover from '../../Shared/Cover/Cover';
import shopImg from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MenuCard from '../MenuCard/MenuCard';
import './Order.css'
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    return (
        <div>
            <Helmet>
                <title>Order | Bistro Boss</title>
            </Helmet>
            <Cover
                coverImg={shopImg}
                title={'Our Shop'}
                details={'Would you like to try a dish?'}
            ></Cover>

            <div className='my-24'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList style={{ display: 'flex', justifyContent: 'center' }}>
                        <Tab><span className='uppercase'>Salad</span></Tab>
                        <Tab><span className='uppercase'>Pizza</span></Tab>
                        <Tab><span className='uppercase'>Soup</span></Tab>
                        <Tab><span className='uppercase'>Desserts</span></Tab>
                        <Tab><span className='uppercase'>Drinks</span></Tab>
                    </TabList>
                    <TabPanel>
                        <MenuCard
                            category={'salad'}
                        ></MenuCard>
                    </TabPanel>
                    <TabPanel>
                        <MenuCard
                            category={'pizza'}
                        ></MenuCard>
                    </TabPanel>
                    <TabPanel>
                        <MenuCard
                            category={'soup'}
                        ></MenuCard>
                    </TabPanel>
                    <TabPanel>
                        <MenuCard
                            category={'dessert'}
                        ></MenuCard>
                    </TabPanel>
                    <TabPanel>
                        <MenuCard
                            category={'drinks'}
                        ></MenuCard>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;