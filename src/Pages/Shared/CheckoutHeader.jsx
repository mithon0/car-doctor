import img from '../../assets/images/checkout/checkout.png'

const CheckoutHeader = () => {
    return (
        <div>
            <div  className="relative w-full mb-10">
                <img src={img} className="w-full h-[300px] rounded-lg" />
                <div className="absolute top-0 flex w-full  transform h-[300px] rounded-lg bg-gradient-to-r from-[#151515] to-[#15151500]">
                    <div className="w-full justify-center absolute top-[253px] left-[540px]">
                        <button className="btn w-44 border-none bg-[#FF3811] bottom-52">Home/Checkout</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CheckoutHeader;