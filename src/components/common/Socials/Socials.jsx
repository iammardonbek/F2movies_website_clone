import React from "react";
import Button from "../Button/Button";
import { Social } from "./SocialsStyle";
import { ReactComponent as Facebook } from "../../../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Email } from "../../../assets/icons/email.svg";
import { ReactComponent as Pinterest } from "../../../assets/icons/pinterest.svg";
import { ReactComponent as WhatssApp } from "../../../assets/icons/WhatssApp.svg";
import { ReactComponent as Telegram } from "../../../assets/icons/telegram.svg";

const Socials = () => {
  return (
    <Social>
      <a target="blank" href="https://facebook.com">
        <Button
          width={"auto"}
          height={"auto"}
          type="social"
          borderRadius={"0"}
          bgcolor="rgb(59, 89, 152)"
          fontColor={"white"}
          fontSize="14px"
          svg={<Facebook />}
          transform={"translateY(-8px)"}
          flexD
        >
          facebook
        </Button>
      </a>
      <a target="blank" href="https://twitter.com/">
        <Button
          width={"auto"}
          transform={"translateY(-8px)"}
          height={"auto"}
          type="social"
          borderRadius={"0"}
          bgcolor="rgb(29, 161, 242)"
          fontColor={"white"}
          fontSize="14px"
          svg={<Twitter />}
          flexD
        >
          twitter
        </Button>
      </a>
      <a target="blank" href="https://mail.google.com/">
        <Button
          width={"auto"}
          height={"auto"}
          type="social"
          borderRadius={"0"}
          bgcolor="#848484"
          transform={"translateY(-8px)"}
          fontColor={"white"}
          fontSize="14px"
          svg={<Email />}
          flexD
        >
          email
        </Button>
      </a>
      <a target="blank" href="https://pinterest.com/">
        <Button
          width={"auto"}
          height={"auto"}
          type="social"
          borderRadius={"0"}
          bgcolor="#CB2027"
          fontColor={"white"}
          transform={"translateY(-8px)"}
          fontSize="14px"
          svg={<Pinterest />}
          flexD
        >
          pinterest
        </Button>
      </a>
      <a target="blank" href="https://www.whatsapp.com/">
        <Button
          width={"auto"}
          transform={"translateY(-8px)"}
          height={"auto"}
          type="social"
          borderRadius={"0"}
          bgcolor="#4DC247"
          fontColor={"white"}
          fontSize="14px"
          svg={<WhatssApp />}
          flexD
        >
          whatsApp
        </Button>
      </a>
      <a target="blank" href="https://telegram.org/">
        <Button
          width={"auto"}
          height={"auto"}
          type="social"
          borderRadius={"0"}
          bgcolor="#0088CC"
          transform={"translateY(-8px)"}
          fontColor={"white"}
          fontSize="14px"
          svg={<Telegram />}
          flexD
        >
          Telegram
        </Button>
      </a>
    </Social>
  );
};

export default Socials;
