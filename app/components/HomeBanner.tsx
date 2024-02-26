const HomeBanner = () => {
    return (
        <div className="relative w-full max-w-7xl mx-auto bg-[url('/assets/images/home-banner-bg.png')] aspect-[3/2] bg-cover bg-center bg-no-repeat" >
            <div className="absolute w-full text-center bottom-8">
                <h2>KHÁM PHÁ TRẢI NGHIỆM ÂM THANH TUYỆT NHẤT</h2>
                <p className="w-1/2 max-w-[640px] mx-auto">
                    Loa Marshall Kilburn 2 (II) được phân phối tại Marshall Store VN. Chiếc loa di động này là phiên bản cập nhật mẫu loa Bluetooth Marshall Kilburn trước đó. Phiên bản mới này kế thừa những điểm mạnh và thành công của phiên bản trước đó.
                </p>
            </div>
        </div>
    );
}

export default HomeBanner;
