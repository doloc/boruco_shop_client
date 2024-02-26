import Link from 'next/link'

const Header = () => {
    return (
        <div className="w-full bg-black flex justify-center">
            <div className="w-full max-w-7xl h-[10vh] max-h-[150px] text-white flex items-center justify-between">
                <div className="flex items-center cursor-pointer">
                    <img src="/assets/images/logo.png" alt="logo" className="w-[65px] ml-8"/>
                    <h1 className="ml-2 tracking-tighter">BORUCO</h1>
                </div>
                
                {/* <div className="flex justify-between mr-8"> */}
                    <ul className="list-none w-1/2 mr-8 flex justify-between">
                        <li className='relative inline-block'><Link href='' className='text-white no-underline'>Products</Link></li>
                        <li className='relative inline-block'><Link href='' className='text-white no-underline'>About us</Link></li>
                        <li className='relative inline-block'><Link href='' className='text-white no-underline'>en vn</Link></li>
                        <li className='relative inline-block'><Link href='' className='text-white no-underline'>Login/Signup</Link></li>
                        <li className='relative inline-block'><Link href='' className='text-white no-underline'>Cart</Link></li>
                    </ul>
                {/* </div> */}
            </div>
            
        </div>
    );
}

export default Header;