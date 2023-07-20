export const Banner = () => {
  return(
    <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
      <div className="banner-description w-full md:1/2 p-3">
      
      </div>
      <div className="banner-image w-full"> 
      <img src={require("../assets/images/food.png")} alt="banner" max-h-95/>
      </div>
    </div>
  )
}