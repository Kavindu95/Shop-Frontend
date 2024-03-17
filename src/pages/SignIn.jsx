import "../App.css";
import SignInCard from "../components/SignInCard";
import backgroundImage from "../assets/food.jpg";

const SignIn = () => {
  return (
    <div className="" style={{ height: "100vh" }}>
      <div
        className="container-fluid h-custom"
        style={{ backgroundImage: `url(${backgroundImage})`, height: "100vh",backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat' }}
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
              WELCOME TO HOT SHOP
            </h1>
          </div>

          <div className="col">
            {" "}
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-6  mt-5">
                <SignInCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
