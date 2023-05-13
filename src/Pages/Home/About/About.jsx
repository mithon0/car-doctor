import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='mt-36'> 
            <div className="grid grid-cols-2 h-[557px] card card-side bg-base-100 shadow-xl">
  <div className='relative '>
  <img className='w-[460px] h-[460px] rounded-lg' src={person} />
  <img className='w-[320px] h-[320px] absolute right-10 top-1/3 border-8 rounded-lg border-white' src={parts} />
  </div>

  <div className="mt-0">
    <h5 className="mt-0 text-[#FF3811] ">About Us</h5>
    <h1 className='text-5xl font-bold w-96 leading-snug'>We are qualified & of experience in this field</h1>
    <p className='text-[#737373] w-[489px] mt-7'>
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
    </p>
    <p className='text-[#737373] w-[489px] mt-5' >
    the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
    </p>
    <button className='btn bg-[#FF3811] border-none mt-8'>Get More Info</button>
  </div>
</div>
        </div>
    );
};

export default About;