const DiscountEmail = () => {
    return (
        <div className="w-full py-8 bg-[#ECEDF3] flex flex-col justify-center items-center">
            <h2>Get A Special Discount</h2>
            <div className="mt-4 block w-16 h-1 bg-[#A7A7A7]"></div>
            <div className="flex flex-col items-center text-xs font-thin">
                <p className="mt-2">Update news and lastest promotions and</p>
                <p>receive exclusive discount</p>
            </div>
            <div className="mt-2 pb-6 flex gap-4 items-center">
                <input type="text" className="w-72 h-7 border-none" placeholder=" Your email" />
                <button className="px-5 py-2 bg-black text-white hover:cursor-pointer">ĐĂNG KÝ</button>
            </div>
        </div>
    );
}

export default DiscountEmail;