import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../hooks/useAuth';
import { GiWallet, GiCook } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { CiDeliveryTruck } from "react-icons/ci";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const pieColors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const { _id } = payload[0].payload; // Access the data here
        return (
            <div className="custom-tooltip bg-white p-2 border rounded">
                <p className="intro">{`Count: ${_id}`}</p>
            </div>
        );
    }

    return null;
};

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats, isLoading: statsLoading } = useQuery({
        queryKey: ['stats', user?.email],
        enabled: !!user?.email && localStorage.getItem('access-token') !== null,
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            console.log('Stats data:', res.data);
            return res.data;
        }
    });

    const { data: graph = [], isLoading: graphLoading, error: graphError } = useQuery({
        queryKey: ['graph', user?.email],
        enabled: !!user?.email && localStorage.getItem('access-token') !== null,
        queryFn: async () => {
            const res = await axiosSecure.get('/category-stats');
            console.log('Graph data:', res.data);
            return res.data;
        }
    });

    console.log(stats);
    console.log(graph);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='w-full mt-12 pb-24'>
            <Helmet>
                <title>Admin Home | Bistro Boss</title>
            </Helmet>

            <h1 className='text-4xl cinzel-font'>Hi, Welcome Back <span className='font-semibold'>{user.displayName}</span></h1>
            {
                statsLoading || graphLoading ? <p>Loading...</p> :
                graphError ? <p>Error loading graph data</p> :
                !stats || !graph.length ? <p>No data available</p> :
                <div className='flex justify-between gap-6 my-20'>
                    <div className='w-full md:w-1/4 px-10 py-5 bg-[#BB34F5] text-white flex gap-5 items-center rounded-lg justify-center'>
                        <GiWallet className='text-6xl text-white' />
                        <div>
                            <h6 className="text-4xl font-bold">{stats.revenue}</h6>
                            <p className='text-2xl'>Revenue</p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/4 px-10 py-5 bg-[#D3A256] text-white flex gap-5 items-center rounded-lg justify-center'>
                        <FaUsers className='text-6xl text-white' />
                        <div>
                            <h6 className="text-4xl font-bold">{stats.customers}</h6>
                            <p className='text-2xl'>Customer</p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/4 px-10 py-5 bg-[#FE4880] text-white flex gap-5 items-center rounded-lg justify-center'>
                        <GiCook className='text-6xl text-white' />
                        <div>
                            <h6 className="text-4xl font-bold">{stats.products}</h6>
                            <p className='text-2xl'>Products</p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/4 px-10 py-5 bg-[#6AAEFF] text-white flex gap-5 items-center rounded-lg justify-center'>
                        <CiDeliveryTruck className='text-6xl text-white font-bold' />
                        <div>
                            <h6 className="text-4xl font-bold">{stats.orders}</h6>
                            <p className='text-2xl'>Orders</p>
                        </div>
                    </div>
                </div>
            }

            {
                graph.length > 0 && (
                    <div className='flex gap-6 py-10'>
                        <div className='w-full md:w-1/2'>
                            <BarChart
                                width={600}
                                height={400}
                                data={graph}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="_id" />
                                <YAxis />
                                <RechartsTooltip />
                                <Bar dataKey="totalPrice" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                    {graph.map((entry, index) => (
                                        <Cell name={entry._id} key={`cell-${index}`} fill={colors[index % colors.length]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <ResponsiveContainer width="100%" height={400}>
                                <PieChart>
                                    <Legend></Legend>
                                    <Pie
                                        data={graph}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={150}
                                        fill="#8884d8"
                                        dataKey="count"
                                    >
                                        {graph.map((entry, index) => (
                                            <Cell name={entry._id} key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                        ))}
                                    </Pie>
                                    <RechartsTooltip content={<CustomTooltip />} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AdminHome;
