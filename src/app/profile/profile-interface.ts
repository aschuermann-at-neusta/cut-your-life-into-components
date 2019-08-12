import { ProfileNameInterface } from './profile-name-interface';
import { ProfileAgeInterface } from './profile-age-interface';
import { ProfileAddressInterface } from './profile-address-interface';

export interface ProfileInterface {
    name: ProfileNameInterface;
    address: ProfileAddressInterface;
    age: ProfileAgeInterface;
}
