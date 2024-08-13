import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='w-4/12 mx-auto'>
            <h6 className='text-[#D99904] text-center italic my-4'>---{subHeading}---</h6>
            <h1 className='text-center border-y-4 text-4xl my-8 py-4'>{heading}</h1>

        </div>
    );
};

export default SectionTitle;