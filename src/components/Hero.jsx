import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="hero bg-gradient-to-t from-white to-gray-100 min-h-90 mt-5 rounded-4xl border-2 border-slate-200">
                <div className="hero-content text-center py-40 flex-col">
                    <div className="w-9/12">
                        <h1 className="text-3xl md:text-5xl font-bold"> <span className='text-blue-500'>Dependable Care,</span> Backed by Trusted Professionals.</h1>
                        <p className="py-6 text-gray-500">
                            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                        </p>
                        <form>
                            <input type="text" placeholder="Search Doctor By Name" className="input rounded-full m-2" />
                            <button type='submit' className="btn btn-primary rounded-full m-2">Search Here</button>
                        </form>
                    </div>

                    <div className='flex flex-col md:flex-row mt-10 gap-3 items-center justify-center'>
                        <div className='w-full md:w-6/12 flex items-center justify-center'>
                            <img src="https://greatcitymedical.com/wp-content/uploads/2021/02/What-is-a-Primary-Care-Doctor.jpg" alt="img" className='h-70 rounded-2xl' />
                        </div>
                        <div className='w-full md:w-6/12 flex items-center justify-center'>
                            <img src="https://www.conwaymedicalcenter.com/wp-content/uploads/2020/12/ten-reasons-you-must-have-a-primary-care-doctor.jpg" alt="img" className='h-70 rounded-2xl' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;