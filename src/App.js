import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import CardDetails from "./CardDetails";
import Carousel from "./Components/Carousel";
import "./animation.css";
import {useEffect , useRef , useState} from "react";
import Splash from "./Splash";

const App = () => {
  const pricediv = useRef(null);
  const aboutusdiv = useRef(null);
  const contactdiv = useRef(null);
  const whyusdiv = useRef(null);
  const whyusdivheading = useRef(null);
  const pricedivheading = useRef(null);


  const [isloading , setisloading] = useState(true);


  function getdivheights() {
    var height1 = document.getElementById("pricing");
    return height1;
  }
  window.addEventListener('scroll' , () => {
    // console.log(pricediv.current)

    var pricingDiv = document.getElementById("pricing");
    var aboutDiv = document.getElementById("customers-div");
    var contactDiv = document.getElementById("contact-holder");
    var whyDiv = document.getElementById("whyusdiv");


    if (window.scrollY > pricingDiv.offsetTop - 250) {
      if (pricediv.current){
      pricediv.current.style.opacity = '1';
      pricediv.current.style.animation = 'fadein 1s ease';
      pricediv.current.style.animationFillMode = 'forwards';
    }

    if(pricedivheading.current){
      pricedivheading.current.style.opacity = '1';
      pricedivheading.current.style.animation = 'fadein 1s ease';
      pricedivheading.current.style.animationFillMode = 'forwards';
    }
  }

    if (window.scrollY > aboutDiv.offsetTop - 250) {
      if (aboutusdiv.current){
      aboutusdiv.current.style.opacity = '1';
      aboutusdiv.current.style.animation = 'fadein 1s ease';
      aboutusdiv.current.style.animationFillMode = 'forwards';
    }
  }  

  if (window.scrollY > contactDiv.offsetTop - 250) {
    if (contactdiv.current){
    contactdiv.current.style.opacity = '1';
    contactdiv.current.style.animation = 'fadein 1s ease';
    contactdiv.current.style.animationFillMode = 'forwards';
  }
} 

if (window.scrollY > whyDiv.offsetTop - 250) {
  if (whyusdiv.current){
  whyusdiv.current.style.opacity = '1';
  whyusdiv.current.style.animation = 'fadein 1s ease';
  whyusdiv.current.style.animationFillMode = 'forwards';
}

if(whyusdivheading.current){
  whyusdivheading.current.style.opacity = '1';
  whyusdivheading.current.style.animation = 'fadein 1s ease';
  whyusdivheading.current.style.animationFillMode = 'forwards';
}
} 

  })
  
  useEffect(() => {
    setTimeout(() => {
      setisloading(false);
    } , 5600)
  }, [])

  return (<>
  {
    isloading ? <Splash/> :
    <>
      <Navbar />
      <div className="App" id = "home">
        <Carousel/>  
        <h4 className="app_Header" id = "pricing" ref = {pricedivheading}>Choose the plan best suited for your use</h4>
        <div className="app__cards" ref = {pricediv}>
          {
            CardDetails.map((item , index) => {
              return <Card plan = {item} key = {index} cardnumber = {index + 1}/>
            })
          }
        </div>

        <div className="app__clients" id = "customers-div" ref = {aboutusdiv}>
          <h4 className="app_Header" id = "customers">Our Customers</h4>
          <p>
            Get inspired by thousands of beautiful color schemes and make
            something cool!
          </p>
          <div>
            <img src="https://www.hackerrank.com/wp-content/uploads/2019/06/logo-bookingcom.png" />
            <img src="https://www.hackerrank.com/wp-content/uploads/2019/06/logo-icon-stripe.png" />
            <img src="https://www.hackerrank.com/wp-content/uploads/2019/06/logo-icon-vmware.png" />
            <img src="https://www.hackerrank.com/wp-content/uploads/2019/06/logo-icon-linkedin.png" />
            <img src="https://www.hackerrank.com/wp-content/uploads/2019/06/logo-icon-goldman-sachs.png" />
          </div>
        </div>

        <h4 className="app_Header" id = "whyus" ref = {whyusdivheading}>Why choose us?</h4>
        <div className = "app__whatwedo" ref = {whyusdiv} id = "whyusdiv" >
          <div className = "app__whatwedoCard">
            <img src = "https://investyadnya.in/static/assets/images/products/model-portfolio-graphic.png" />
            <p>Ready made stocks and mutual find portfolio</p>
          </div>
          <div className = "app__whatwedoCard">
            <img src = "https://investyadnya.in/static/assets/images/researched-products/invest-yadnya-block-icon.png" />
            <p>Ready made stocks and mutual find portfolio</p>
          </div>
          <div className = "app__whatwedoCard">
            <img src = "https://investyadnya.in/static/assets/images/researched-products/mf-yadnya-block-icon.png" />
            <p>Ready made stocks and mutual find portfolio</p>
          </div>
          <div className = "app__whatwedoCard">
            <img src = "https://investyadnya.in/static/assets/images/researched-products/tax-yadnya-block-icon.png" />
            <p>Ready made stocks and mutual find portfolio</p>
          </div>
          <div className = "app__whatwedoCard">
            <img src = "https://investyadnya.in/static/assets/images/researched-products/fineplan-yadnya-block-icon.png" />
            <p>Ready made stocks and mutual find portfolio</p>
          </div>
          <div className = "app__whatwedoCard">
            <img src = "https://investyadnya.in/static/assets/images/home-images/-e-ebook.png" />
            <p>Ready made stocks and mutual find portfolio</p>
          </div>
        </div>
        <div className = "app__knowallabout" id = "contact-holder" ref = {contactdiv}>
          <h4 className="app_Header" id = "contact">Know All About Personal Financial Planning</h4>

          <p>
          Invest Yadnya is one of the best stock analysis websites in India that provides financial planning and financial advisory services to simplify the concept of personal finance. As one of the best financial websites in India, we offer various financial tools to extend investment planning & personal financial planning services to our users. Being one of the leading investment advice websites, we have amalgamated technology with financial planning expertise to help individuals meet their financial objectives. We invest time, money and knowledge to build financial literacy in India.

As online financial advisors, we offer unbiased and transparent financial advice using India specific proprietary calculation and methodology. All the financial information, financial reports, charts available on the website are regularly updated. We offer investment advisory services at pocket-friendly prices, making us the country’s best stock valuation website. Achieve your personal financial goals and gain financial literacy with Invest Yadnya!

Our share analysis website offers personalized financial planning, research-based products and e-books. For a pleasant personalized financial planning, we, as free stock advisors, offer services like financial plan creation, financial goal planning, investment portfolio planning and other advice for free. Avail the best financial products & services from one of the best investment websites in India.

Our research-based products include model portfolios.<br/><br/>
As they say, “A goal without a plan is just a wish”. With planning, you take the first step of making your dream turn into reality.

We at Yadnya, help our clients create a practical plan by incorporating every aspect of investments, insurance, taxation as well as ease of execution. We aim to construct a financial plan that not only directs our clients towards the path of financial freedom but also gears them up to face any unanticipated financial stress situation through relevant asset allocation strategies. With realistic projections of savings, income, expenses, inflation, portfolio returns and incorporation of multiple “What-If” scenarios, Yadnya helps clients with a financial plan that can help them sail through a storm with a margin of safety.

Let us help to find right plan for you

          </p>
        </div>
        
        <Footer/>
      </div>
    </>
     
  }
    </>
  );
}

export default App;
