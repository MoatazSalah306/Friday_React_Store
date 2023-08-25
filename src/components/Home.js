import HOME_IMG from "../assets/gg.svg"

function Home (){
    return(
        <>
        <section className="text-gray-600 body-font mt-4">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={HOME_IMG} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold
              <br className="hidden lg:inline-block" /> shop now and catch our offers
            </h1>
            <p className="mb-8 leading-relaxed">here in friday store we've a lot of offers make you shop now without any hesitate waiting for what let's shop now !!</p>
            <div className="flex justify-center">
              <button className="cta inline-flex items-center text-white py-2 px-6 focus:outline-none rounded text-lg">
                <span>Sop Friday Store</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5" />
                  <polyline points="8 1 12 5 8 9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        </section>
        </>
    )
}

export default Home;