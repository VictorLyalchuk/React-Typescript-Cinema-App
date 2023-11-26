import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { ILogin } from "./Login-User";

const Login = () => {
    const {register, handleSubmit, formState:{errors}, } = useForm<ILogin>();
    const onSubmit = (user:ILogin) =>{
        alert(`Username: ${user.username}, Password: ${user.password}`);

    }
    return (
        <>
            <h2>Login</h2>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField 
                        {...register("username")}
                        id="username-input"
                        label="Login"
                        type="username"
                        autoComplete="username"
                        style={{ margin: '8px 0'}} 
                        />
                    <br></br>
                    <TextField
                        {...register("password")}
                        id="password-input"
                        label="Password"
                        type="password"
                        autoComplete="password"
                        />
                    <br></br>
                    <Button variant="contained" type="submit">Login</Button>
                </form>
            </Box>
        </>
    )
}
export default Login;