

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
// import { loginUser } from "../services/userService";
import { loginUser } from "../../services/userService";

import { loginSchema } from "../../validations/userSchema";
import toast from "react-hot-toast";
import InputField from "../../components/inputField";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { user, login } = useAuth(); // use login function instead of setUser
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  //Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/userdashboard");
    }else{
      return;
    }
  }, [user, navigate]);


  // setTimeout(() => {
  //   if(user){
  //     navigate("/dashboard");
  //   }
    
  // }, 2400);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const { message, token, user } = await loginUser(data);
      toast.success(message);

      // Save to localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // Update context using login helper
      login(user);

      reset();

      // Navigate immediately after context is updated
      // navigate("/dashboard");
    } catch (error) {
      const errorMessage = typeof error === "string" ? error : error.message;
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contain">
      <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
        <h2 className="registration-title">Login</h2>  
        <InputField
          name="email"
          control={control}
          label="Email"
          error={errors.email?.message}
        />
        <InputField
          name="password"
          control={control}
          label="Password"
          type="password"
          error={errors.password?.message}
        />
        <button
          type="submit"
          className="registration-button"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

