export default interface IUser extends Partial<User>  {}

interface User {
    id: string; // Conditionally Sent
    username: string;
    email: string;
    emailVisibility: boolean;
    password: string;
    passwordConfirm: string; // Only Sent
    avatar: string;
    verified: boolean; // Only recieved
};
