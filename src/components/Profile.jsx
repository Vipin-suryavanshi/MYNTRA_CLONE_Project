import { Link } from "react-router-dom";
const Profile = () => {
  {   window.scrollTo(0, 0)}
  return (

    <div className="profile">
      <div className="Login-info">
        <img src="../images/profile.png" alt="profile-img" />
        <p className="prof-para" id="para-margin">
          <span className="text-bold">Login</span>or
          <span className="text-bold">Signup</span>
        </p>
        <div className="input-group mb-3 inp-field">
          <span className="input-group-text " id="basic-addon1 index-span" >
            +91
          </span>
          <input
            type="number"
            id="index"
            className="form-control"
            placeholder="Mobile Number ⁎"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="prof-cent">
          <p className="prof-para" id="para-marg">
            By Continuing, I agree to the
            <span className="bold-pink">Terms of use</span> & 
            <span className="bold-pink">Privacy Policy</span>
          </p>
        <Link to={"/Bag"}>
          <button type="button" className="btn btn-danger " id="prof-btn">
            Continue
          </button>
          </Link>
          <p className="prof-para" id="para-marg">
            Have Trouble logging in ?{" "}
            <span className="bold-pink">Get help</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
