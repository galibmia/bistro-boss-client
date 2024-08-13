import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div>
            <h6 className='text-[#D99904] text-center italic mb-4'>---{subHeading}---</h6>
            <hr className='w-[242px] mx-auto border-2 border-[#E8E8E8] mb-5' />
            <h1 className='text-center text-4xl text-[#151515]'>{heading}</h1>
            <hr className='w-[242px] mx-auto border-2 border-[#E8E8E8] mt-4 mb-10' />

        </div>
    );
};

export default SectionTitle;