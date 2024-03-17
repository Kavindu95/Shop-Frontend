import SignUpCard from "../components/SignUpCard";
import backgroundImage from "../assets/food-signup.jpg";

import "../styles/Signup.css";

const SignUp = () => {
  return (
    <div className="" style={{ height: "100vh" }}>
      <div
        className="container-fluid h-custom"
        style={{ backgroundImage: `url(${backgroundImage})`, height: "100%" ,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}
      >
        <div className="row">
          <div className="col">
            <h1
              style={{
                color: "white",
                fontSize: "45px",
                textAlign: "center",
                marginTop: "20px",
                fontFamily: "'Dancing Script', cursive",
              }}
            >
              REGISTER TO HOT SHOP
            </h1>
          </div>

          <div className="col">
            {" "}
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-6 col-xl-6 mt-5">
                <SignUpCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
