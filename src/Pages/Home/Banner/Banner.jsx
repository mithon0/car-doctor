import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {

    const bannerText =<>
     <div className="absolute flex w-full  transform h-full rounded-lg bg-gradient-to-r from-[#151515] to-[#15151500]">
                    <div className="w-[432px] justify-center mt-[99px] ml-28">
                        <h1 className='font-bold text-6xl text-white leading-snug'>
                            Affordable Price For Car Servicing
                        </h1>
                        <p className='text-white  leading-8 mt-8 mb-8'>
                            There are many variations of passages of  available, but the majority have suffered alteration in some form
                        </p>

                        <button className="btn btn-secondary w-44 mr-5">Discover More</button>
                        <button className="btn btn-outline w-44 btn-warning">Latest Project</button>
                    </div>
                </div>
    </>

    return (
        <div className="carousel w-full h-[600px] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-lg" />
                {bannerText}



                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle ml-7">❯</a>
                </div>
            </div>



            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-lg" />
               {bannerText}


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle ml-7">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-lg" />
                {bannerText}



                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle ml-7">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-lg" />

                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle ml-7">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-lg" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle ml-7">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-lg" />
                {bannerText}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle ml-7">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;