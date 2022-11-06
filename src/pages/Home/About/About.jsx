import person from '../../../assets//images/about_us/person.jpg';
import parts from '../../../assets//images/about_us/parts.jpg';

const About = () => {

  return (
    <div className="hero mb-36 mt-20">
      <div className="hero-content flex-col lg:flex-row p-0">
        <div className="relative w-1/2 top-[-35px]">
          <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={parts} alt="" className="absolute w-3/5 right-5 top-1/2 rounded-lg shadow-2xl border-8" />
        </div>
        <div className="w-1/2">
          <p className="text-xl text-orange-600 font-bold mb-5">About Us</p>
          <h1 className="text-5xl font-bold">We are qualified<br />& of experience<br />in this field</h1>
          <p className="pt-8 pb-4 text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
          <p className="pb-8 text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn btn-warning">Get more info</button>
        </div>
      </div>
    </div>
  );
}

export default About;
