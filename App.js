import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectMetamask, connectCoinbase, connectClover } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import targetTime from "./config";
import logo from "./assets/logo_.png";
import one from "./assets/one.png";
import five from "./assets/five.png";
import ten from "./assets/ten.png";
import bg from "./assets/bg.png";
import clover from "./assets/clover.png"
import metamask from "./assets/metamask.svg"
import coinbase from "./assets/coinbase.svg"

require("dotenv").config();

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function App() {
  const dispatch = useDispatch();
  const walletSelect = useRef(null);
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [claimingOne, setClaimingOne] = useState(false);
  const [claimingFive, setClaimingFive] = useState(false);
  const [claimingTen, setClaimingTen] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [leftTime, setLeftTime] = useState({
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });
  const [feedback, setFeedback] = useState(
    `Maximum 5 Mints, to mint your NFT.`
  );
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: true,
  });

  const claimNFTs = (e, amount) => {
    console.log(amount);
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      let cost = CONFIG.WEI_COST;
      let gasLimit = CONFIG.GAS_LIMIT;
      let totalCostWei = String(cost * amount);
      let totalGasLimit = String(gasLimit * amount);
      console.log("Cost: ", totalCostWei);
      console.log("Gas limit: ", totalGasLimit);
      setFeedback(`MAXIMUM 5 Mints for your ${CONFIG.NFT_NAME}...`);
      setClaimingNft(true);
      blockchain.smartContract.methods
        .mint(amount)
        .send({
          gasLimit: String(totalGasLimit),
          to: CONFIG.CONTRACT_ADDRESS,
          from: blockchain.account,
          value: totalCostWei,
        })
        .once("error", (err) => {
          console.log(err);
          setFeedback("Sorry, something went wrong please try again later.");
          setClaimingNft(false);
          e.target.innerHTML = "MINT NOW";
        })
        .then((receipt) => {
          console.log(receipt);
          setFeedback(
            `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
          );
          setClaimingNft(false);
          if (amount === 1) {
            setClaimingOne(true);
          }
          else if (amount === 5) {
            setClaimingFive(true);
          }
          else if(amount === 10) {
            setClaimingTen(true);
          }
          dispatch(fetchData(blockchain.account));
        });
    }
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const selectWallet = (e) => {
    console.log("select");
    walletSelect.current.style.display = "block";
  };
  const walletClose = (e) => {
    walletSelect.current.style.display = "none";
  }
  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };
  const mintNow = (e, amount) => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      e.target.innerHTML = "CLAIMING";
    }
    setMintAmount(amount);
    claimNFTs(e, amount);
    getData();
  }
  useEffect(() => {
    getConfig();
    let currentDate = new Date();
    let diff_Time = parseInt((targetTime - currentDate) / 1000);
    console.log("time diff", diff_Time, currentDate, targetTime);
    if (diff_Time > 0) {
      setCountdown(diff_Time);
    }
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    setInterval(() => {
      if (diff_Time > 0) {
        let data = {
          second: diff_Time % 60,
          minute: parseInt(diff_Time / 60) % 60,
          hour: parseInt(diff_Time / 3600) % 24,
          day: parseInt(diff_Time / 86400),
        };
        diff_Time--;
        setLeftTime(data);
        setCountdown(diff_Time);
      } else {
        let data = {
          second: 0,
          minute: 0,
          hour: 0,
          day: 0,
        };
        setLeftTime(data);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  /*configure this for use*/
  const allowedAdd = [
    "",
    "0x922985EB13048639866022e14d01E31B5a792b4A",
    "0x93b8893e482faF7472e25b5994Acb6CA3631caE6",
    "0x3aa109761f5047c83c76ac4e61a07fa8ca9db959",
    "0x8425beb485c711E6D2db691577413a9812C9FeD5",
    "0x99DA0e75f62511ee615B36b1a463085D9b13024D",
    "0xB6C5B1a489606028Da263EDa28063186f96fa921",
    "0x0ED7643fb4EDA6a98Da2A942DA73132ad03581Ea",
    "0x19E909737E5cA7fF3A032E8b15BFa82E8F892b6f",
    "0x48Ec0b0b07Dec69DF7e1b1d0BD8bE1Eaf123901d",
    "0x4fc7398EBf80804797Ca735938f972D98736246e",
    "0x5a9DC3F62B089aC07718aD23a0311E1e8283ba72",
    "0x8AAc7De9201f731d046F11e43037bA26A59b2548",
    "0x9bbb34445b8e490faa4ec7eca3b12670dd630539",
    "0xA283b6810C2b6c24e0D06A854586d652D8E602b4",
    "0xAB2575851fBa7d4B6Df7E1A0588aa54E72c48feA",
    "0xB95731D8960164cdF68484439c65A634e471AA60",
    "0xbf22FA288baCd7ad784814D3a6c2f593c2d51698",
    "0xD60742d6332e8D01265D75e4eFb118DFE5385275",
    "0xd866432668d7a0d19125332622677cd4f626c4be",
    "0xebcee6204eeeef21e406c0a75734e70f342914e0",
  ];
  const arrAllowedAddresses = allowedAdd.map((address) =>
    address.toLowerCase()
  );

  return (
    <s.Screen image={bg}>
      <s.Header>
        <s.LogoContain>
          <s.Logo src={logo}></s.Logo>
        </s.LogoContain>
        <s.Menu>
          <s.MenuItem href="#">HOME</s.MenuItem>
          <s.MenuItem href="#">DISCORD</s.MenuItem>
          <s.MenuItem href="#">TWITTER</s.MenuItem>
          <s.MenuItem href="#">INSTAGRAM</s.MenuItem>

          {blockchain.account === "" || blockchain.smartContract === null ? (
            <s.MenuActiveItem
              onClick={(e) => {
                selectWallet(e);
              }}
            >
              CONNECT
            </s.MenuActiveItem>
          ) : (
            <></>
          )}
        </s.Menu>
      </s.Header>
      <s.Wallet ref={walletSelect}>
        <s.WalletContent>
          <s.Close onClick={walletClose}>&times;</s.Close>
          <s.WalletButton
            onClick={(e) => {
              e.preventDefault();
              dispatch(connectMetamask());
              getData();
              walletClose();
            }}
          >
            MetaMask
            <s.WalletIcon src={metamask}></s.WalletIcon>
          </s.WalletButton>
          <s.WalletButton
            onClick={(e) => {
              e.preventDefault();
              dispatch(connectCoinbase());
              getData();
              walletClose();
            }}
          >
            Coinbase Wallet
            <s.WalletIcon src={coinbase}></s.WalletIcon>
          </s.WalletButton>
          <s.WalletButton
            onClick={(e) => {
              e.preventDefault();
              dispatch(connectClover());
              getData();
              walletClose();
            }}
          >
            Clover
            <s.WalletIcon src={clover}></s.WalletIcon>
          </s.WalletButton>
        </s.WalletContent>
      </s.Wallet>
      <s.Timerblock>
        <s.TimerText>
          <s.ItemContain>
            <s.TimerValue>
              {parseInt(leftTime.day / 10)}
              {leftTime.day % 10}
            </s.TimerValue>
            <s.Timertitle>DAYS</s.Timertitle>
          </s.ItemContain>
          <s.ItemContain>
            <s.TimerValue>
              {parseInt(leftTime.hour / 10)}
              {leftTime.hour % 10}
            </s.TimerValue>
            <s.Timertitle>HRS</s.Timertitle>
          </s.ItemContain>
          <s.ItemContain>
            <s.TimerValue>
              {parseInt(leftTime.minute / 10)}
              {leftTime.minute % 10}
            </s.TimerValue>
            <s.Timertitle>MIN</s.Timertitle>
          </s.ItemContain>
          <s.ItemContain>
            <s.TimerValue>
              {parseInt(leftTime.second / 10)}
              {leftTime.second % 10}
            </s.TimerValue>
            <s.Timertitle>SEC</s.Timertitle>
          </s.ItemContain>
        </s.TimerText>
      </s.Timerblock>

      <s.CommentText>
        On February 3rd at 6PM PST, you will be able to mint your own Bear
      </s.CommentText>
      <s.MintBlock>
        <s.Card>
          <s.CardImg src={one}></s.CardImg>
          <s.CardText>Mint 1 Bear</s.CardText>
          {countdown === 0 ? (
            <s.CardButton
              disabled={claimingNft ? 1 : 0}
              onClick={ (e) => mintNow(e, 1)}
            >
              {claimingOne ? "CLAIMED" : "MINT NOW"}
            </s.CardButton>
          ) : (
            <s.CardButton>MINT SOON</s.CardButton>
          )}
        </s.Card>
        <s.Card>
          <s.CardImg src={five}></s.CardImg>
          <s.CardText>Mint 2 Bears</s.CardText>
          {countdown === 0 ? (
            <s.CardButton
              disabled={claimingNft ? 1 : 0}
              onClick={ (e) => mintNow(e, 5)}
            >
              {claimingFive ? "CLAIMED" : "MINT NOW"}
            </s.CardButton>
          ) : (
            <s.CardButton>MINT SOON</s.CardButton>
          )}
        </s.Card>
        <s.Card>
          <s.CardImg src={ten}></s.CardImg>
          <s.CardText>Mint 3 Bears</s.CardText>
          {countdown === 0 ? (
            <s.CardButton
              disabled={claimingNft ? 1 : 0}
              onClick={ (e) => mintNow(e, 10)}
            >
              {claimingTen ? "CLAIMED" : "MINT NOW"}
            </s.CardButton>
          ) : (
            <s.CardButton>MINT SOON</s.CardButton>
          )}
        </s.Card>
      </s.MintBlock>
    </s.Screen>
  );
}

export default App;
