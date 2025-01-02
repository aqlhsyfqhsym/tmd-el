import React from 'react';

const ContactCard = () => {
    return (
        <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden">
            <div className="bg-[#272361] text-white p-6 w-1/2">
                <h2 className="text-xl font-bold">Contact Information</h2>
                <p>Say something to start a live chat!</p>
                <div className="mt-4">
                    <p>📞 (+603) 6419 1266</p>
                    <p>✉️ corporate@tmdel.com</p>
                    <p>TMD Energy Limited</p>
                    <p>B-10-06, Block B, Plaza Mont Kiara, No 2, Jalan Kiara, Mont Kiara, 50480 Kuala Lumpur, Wilayah Persekutuan, West Malaysia</p>
                </div>
            </div>

            <div className="p-6 w-1/2 mx-6 mt-6 mb-12">
                <form className="mt-6 grid grid-cols-2 gap-4">
                    <div className="col-span-1">
                        <label htmlFor="firstName" className="block mb-1 text-black font-semibold">First Name</label>
                        <input id="firstName" type="text" placeholder="John" className="border-b border-gray-300 rounded-none p-2 w-full mb-2 focus:outline-none focus:ring-0 focus:border-blue-500" />
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="lastName" className="block mb-1 text-black font-semibold">Last Name</label>
                        <input id="lastName" type="text" placeholder="Doe" className="border-b border-gray-300 rounded-none p-2 w-full mb-2 focus:outline-none focus:ring-0 focus:border-blue-500" />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="email" className="block mb-1 text-black font-semibold">Email</label>
                        <input id="email" type="email" placeholder="example@gmail.com" className="border-b border-gray-300 rounded-none p-2 w-full mb-2 focus:outline-none focus:ring-0 focus:border-blue-500" />
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="phone" className="block mb-1 text-black font-semibold">Phone Number</label>
                        <input id="phone" type="tel" placeholder="012-34567890" className="border-b border-gray-300 rounded-none p-2 w-full mb-2 focus:outline-none focus:ring-0 focus:border-blue-500" />
                    </div>
                    
                    <div className="col-span-2 mb-2">
                        <p className="mb-1 text-black font-semibold">Select Subject?</p>
                        <div className="flex items-center">
                            <input type="radio" id="generalInquiry" name="subject" value="General Inquiry" className="mr-2" />
                            <label htmlFor="generalInquiry" className="mr-4 text-black">General Inquiry</label>
                            
                            <input type="radio" id="support" name="subject" value="Support" className="mr-2" />
                            <label htmlFor="support" className="mr-4 text-black">Support</label>
                            
                            <input type="radio" id="feedback" name="subject" value="Feedback" className="mr-2" />
                            <label htmlFor="feedback" className="text-black">Feedback</label>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="message" className="block mb-1 text-black font-semibold">Message</label>
                        <textarea id="message" placeholder="Write your message.." className="text-black border-b border-gray-300 rounded-none p-2 w-full mb-2 focus:outline-none focus:ring-0 focus:border-blue-500" rows={4}></textarea>
                    </div>
                    
                    <div className="col-span-2 flex justify-end">
                        <button type="submit" className="bg-gradient-to-r from-[#00A99D] to-[#1172BA] text-white rounded py-3 px-8 font-inter font-semibold" style={{ fontSize: '12px' }}>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactCard;
