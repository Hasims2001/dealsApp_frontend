import { Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const Headers = () => {
  const store = useSelector((store) => store.authReducer);
  useEffect(() => {}, [store]);
  return (
    <Flex justifyContent={"space-between"} p={".5rem 1.5rem"}>
      <Heading>Deals</Heading>
      <Flex alignItems={"center"} gap={"1rem"}>
        <Link to={"/"}>Home</Link>
        <Link to="/about">About</Link>
        <Link to={"/contact"}>Contact</Link>
        {!store.isAuth && <Link to={"/login"}>login/signup</Link>}
        {store.isAuth && <Link to={"/profile"}>Profile</Link>}
      </Flex>
    </Flex>
  );
};
