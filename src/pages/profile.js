import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile } from "../store/profile";
import { ProfileForm } from "../components";
import { Button } from "@mui/material";
import styles from "./profile.module.css";

export const ProfilePage = () => {
  const { isVisibleProfile, firstName, lastName, ...profile } = useSelector(
    (state) => {
      return state.profile;
    }
  );

  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <h1>Profile</h1>

      
        <div className={styles.wraptext}>
          <h2>{firstName} {lastName}</h2>
          <h2>role: {profile.role}</h2>
          <h2>country: {profile.country}</h2>
          <h2>phone: {profile.phone}</h2>
        </div>
      

      <Button variant="contained" onClick={() => dispatch(toggleVisibleProfile())}>
        Edit profile
      </Button>

      {isVisibleProfile && (
      <ProfileForm firstName={firstName} lastName={lastName} {...profile} />
      )}
    </div>
  );
};
