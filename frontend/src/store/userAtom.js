import { atom } from 'recoil';
import FollowersPopup from '../Compnents/FollowersPopup';

export const registrationState = atom({
    key: 'registrationState', // unique ID (with respect to other atoms/selectors)
    default: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

export const profileState = atom({
  key: "profileState",
  default: {
    username: '',
    fullName: '',
    bio: '',
  }
})

