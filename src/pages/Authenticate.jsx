import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, register } from "../redux/authRedux/action";
import { baseURL } from "../utils/api";
// import styles from "../styles/Authenticate.module.css";

const loginInit = {
  email: "",
  pass: "",
};
const Login = () => {
  const [data, setData] = useState(loginInit);
  const toast = useToast();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.authReducer);
  const { email, pass } = data;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || pass === "") {
      toast({
        title: `All fields are required!`,
        status: "error",
        isClosable: true,
      });
    } else if (pass.length < 6) {
      toast({
        title: `Password must be at least 6 characters!`,
        status: "error",
        isClosable: true,
      });
    } else {
      await dispatch(login(data));
    }
  };
  useEffect(() => {
    if (store.isAuth) {
      toast({
        title: "Login Success!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/");
    } else if (store.isError) {
      toast({
        title: store.isError,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else if (store.isLoading) {
      toast({
        title: "Loading...",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [store]);
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Email..."
        name="email"
        m={"1rem 0"}
        type="email"
        value={data.email}
        onChange={handleChange}
      />
      <br />
      <Input
        placeholder="Password..."
        name="pass"
        type="password"
        m={"1rem 0"}
        value={data.pass}
        onChange={handleChange}
      />
      <Input
        value={"Submit"}
        cursor={"pointer"}
        mt={"2rem"}
        w={"fit-content"}
        type="submit"
        _hover={{
          backgroundColor: "brand.600",
          color: "brand.400",
        }}
      />
    </form>
  );
};

const signInit = {
  email: "",
  name: "",
  pass: "",
};
const Register = () => {
  const [data, setData] = useState(signInit);
  const { email, name, pass } = data;
  const toast = useToast();
  const store = useSelector((store) => store.authReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || name === "" || pass === "") {
      toast({
        title: `All fields are required!`,
        status: "error",
        isClosable: true,
      });
    } else if (pass.length < 6) {
      toast({
        title: `Password must be at least 6 characters!`,
        status: "error",
        isClosable: true,
      });
    } else {
      await dispatch(register(data));
    }
  };

  useEffect(() => {
    if (store.isAuth) {
      toast({
        title: "Register Success!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate("/");
    } else if (store.isError) {
      toast({
        title: store.isError,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else if (store.isLoading) {
      toast({
        title: "Loading...",
        status: "info",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [store]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Name..."
          name="name"
          m={"1rem 0"}
          type="text"
          value={data.name}
          onChange={handleChange}
        />
        <br />
        <Input
          placeholder="Email..."
          name="email"
          m={"1rem 0"}
          type="email"
          value={data.email}
          onChange={handleChange}
        />
        <br />
        <Input
          placeholder="Password..."
          name="pass"
          type="password"
          m={"1rem 0"}
          value={data.pass}
          onChange={handleChange}
        />
        <Input
          value={"Submit"}
          cursor={"pointer"}
          w={"fit-content"}
          mt={"2rem"}
          _hover={{
            backgroundColor: "brand.600",
            color: "brand.400",
          }}
          type="submit"
        />
      </form>
    </>
  );
};
export const Authenticate = () => {
  const [clicks, setClicks] = useState(true);
  useEffect(() => {
    console.log(baseURL);
  }, []);
  const handleClick = (e) => {
    const { value } = e.target;
    if (value === "login") {
      setClicks(true);
    } else if (value === "register") {
      setClicks(false);
    }
  };

  return (
    <Flex
      minHeight={"100vh"}
      maxW={"100vw"}
      flexDirection={["column", "column", "row", "row", "row", "row"]}
      // flexDirection={clicks ? "row" : "row-reverse"}
      p={["1rem 4rem", "1rem 4rem", "0"]}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image
        src={
          "https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=740&t=st=1692421388~exp=1692421988~hmac=99041c33842caf47ba4deb9d24ea33149626ca808142d13b6b2b3fad8009fba5"
        }
        w={"25rem"}
        bg={"brand.400"}
        mixBlendMode={"multiply"}
      />
      <Box>
        <Flex gap={"1px"}>
          <Button
            variant={clicks ? "SimpleBlue" : "SimpleWhite"}
            value={"login"}
            padding={"2rem"}
            borderRadius={"none"}
            onClick={handleClick}
          >
            Login In
          </Button>
          <Button
            variant={!clicks ? "SimpleBlue" : "SimpleWhite"}
            value={"register"}
            padding={"2rem"}
            borderRadius={"none"}
            onClick={handleClick}
          >
            Register
          </Button>
        </Flex>
        <Box mt={"1rem"}>{clicks ? <Login /> : <Register />}</Box>
      </Box>
    </Flex>
  );
};
