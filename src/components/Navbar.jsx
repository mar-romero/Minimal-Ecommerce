import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge} from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import { NavLink} from "react-router-dom";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;


const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Lenguage = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SeachContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 10px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
  text-decoration:none;
`;

const Logo = styled.h1`
  font-weight: bold;

  ${mobile({ fontSize: "24px",marginLeft:"20px" })}
`;

const Right = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  cursor: ponter;
  font-size: 14px;
  margin-left:15px;
  ${mobile({ fontSize: "12px", marginLeft: "5px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lenguage>ES</Lenguage>
          <SeachContainer>
            <Input placeholder="Buscar" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }}/>
          </SeachContainer>
        </Left>
        <Center>
        <NavLink to='/'>
          <Logo>MINIMAL</Logo>
          </NavLink>
        </Center>
        <Right>
          <MenuItem>Registro</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <NavLink to='/carrito'>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
          </NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
