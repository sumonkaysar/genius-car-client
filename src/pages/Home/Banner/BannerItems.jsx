const BannerItems = ({slide}) => {
  const {image, id, prev, next} = slide;

  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className='carousel-img'>
        <img src={image} className="w-full rounded-xl" />
      </div>
      <div className="absolute transform -translate-y-1/2 left-24 top-1/2 w-2/5">
        <h1 className='text-6xl font-bold text-white mb-12'>
          Affordable <br />
          Price for Car <br />
          Servicing
        </h1>
        <p className='text-xl text-white'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
        <div className='mt-12'>
          <button className="btn btn-warning">Discover More</button>
          <button className="btn btn-outline btn-warning ml-8">Latest Project</button>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5">
        <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
        <a href={`#slide${next}`} className="btn btn-circle">❯</a>
      </div>
    </div>
  );
}

export default BannerItems;
