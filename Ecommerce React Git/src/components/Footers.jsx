import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,

    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}

  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}

  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 20%;
      margin-left:35px;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>MINIMAL</Logo>
          <Desc>
            Vendo maquillajes
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Secciones</Title>
          <List>
            <ListItem>Inicio</ListItem>
            <ListItem>Carrito</ListItem>
            <ListItem>Base</ListItem>
            <ListItem>Labial</ListItem>
            <ListItem>Mi Cuenta</ListItem>
            <ListItem>Pedidos</ListItem>
            <ListItem>Lo más vendidos</ListItem>
            <ListItem>Terminos y condiciones</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> Arredondo 5283
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +54 9 11 6651-4481
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> Minimal@minimal.com
          </ContactItem>
          <Payment src="https://img2.freepng.es/20180204/plq/kisspng-mastercard-payment-visa-credit-card-emv-credit-card-visa-and-master-card-transparent-backg-5a77bb4a42a195.9274531015177961702729.jpg" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;