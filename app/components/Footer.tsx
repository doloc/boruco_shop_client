import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl my-8 flex justify-center items-center">
                <div className="mx-8 grid grid-cols-4 gap-8 items-center">
                    <div className="flex justify-center items-center">
                        <img src="/assets/images/logo-2x.png" alt="logo" className="w-[125px]"/>
                    </div>
                    <div className="w-full">
                        <h2 className="text-2xl font-semibold text-[#0C1132]">Contact us</h2>
                        <h3 className="text-xl font-semibold text-[#475461]">Hanoi Office</h3>
                        <div className="w-full text-base font-thin text-[#475461]">
                            <p>54/130 Tran Xuan Soan St., Ngo Thi Nham, Hai Ba Trung, Hanoi</p>
                            <p>(406) 555-0120</p>
                            <p>vintunes.vn</p>
                        </div>
                        <div className="flex">
                            <ul className="list-none w-1/2 mr-1 flex gap-4">
                                <li className='relative inline-block'><Link href=''><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                                <li className='relative inline-block'><Link href=''><FontAwesomeIcon icon={faYoutube} /></Link></li>
                                <li className='relative inline-block'><Link href=''><FontAwesomeIcon icon={faSkype} /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full text-[#475461]">
                        <h2 className='text-xl font-semibold'>Ho Chi Minh Office</h2>
                        <div className="w-full text-base font-thin">
                            <p>32 Thuy Loi St., Phuong Long A, District 9, HCM</p>
                            <p>(406) 555-0120</p>
                            <p>vintunes.vn</p>
                        </div>
                    </div>
                    <div className="w-full">
                        <h2 className='text-xl font-semibold text-[#0C1132]'>We Are Here</h2>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1935884020236!2d105.81595147699174!3d21.024938687906563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab71ca89a863%3A0x3aaa374a0fd40c4e!2zMTY4IFAuIE5n4buNYyBLaMOhbmgsIEdp4bqjbmcgVsO1LCBCYSDEkMOsbmgsIEjDoCBO4buZaSAxMDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1706973553574!5m2!1svi!2s"
                            width='80%'
                            height='100%'
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;