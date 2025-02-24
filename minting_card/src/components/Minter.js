'use client'
import { useEffect, useState } from "react";
import Web3 from "web3";
import contract from "../contracts/contract.json";
import Button  from "@/src/components/Button.jsx"


const initialInfoState = {
  connected: false,
  status: null,
  account: null,
  web3: null,
  contract: null,
  address: null,
  contractJSON: null,
};

const initialMintState = {
  loading: false,
  status: `Mint your ${contract.name}`,
  amount: 1,
  supply: "0",
  cost: "0",
};

function Minter() {
  const [info, setInfo] = useState(initialInfoState);
  const [mintInfo, setMintInfo] = useState(initialMintState);

  // console.log(info);

  const init = async (_request, _contractJSON) => {
    if (window.ethereum.isMetaMask) {
      try {
        const accounts = await window.ethereum.request({
          method: _request,
        });
        const networkId = await window.ethereum.request({
          method: "net_version",
        });
        if (networkId == _contractJSON.chain_id) {
          let web3 = new Web3(window.ethereum);
          setInfo((prevState) => ({
            ...prevState,
            connected: true,
            status: null,
            account: accounts[0],
            web3: web3,
            contract: new web3.eth.Contract(
              _contractJSON.abi,
              _contractJSON.address
            ),
            contractJSON: _contractJSON,
          }));
        } else {
          setInfo(() => ({
            ...initialInfoState,
            status: `Change network to ${_contractJSON.chain_id} ${networkId}.`,
          }));
        }
      } catch (err) {
        console.log(err.message);
        setInfo(() => ({
          ...initialInfoState,
        }));
      }
    } else {
      setInfo(() => ({
        ...initialInfoState,
        status: "Please install metamask.",
      }));
    }
  };

  const initListeners = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", async () => {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            setInfo((prevState) => ({ ...prevState, account: accounts[0] }));
          } else {
            setInfo(initialInfoState); // Reset state if no accounts are available
          }
        } catch (error) {
          console.error("Error fetching accounts:", error);
        }
      });
  
      window.ethereum.on("chainChanged", (chainId) => {
        setInfo((prevState) => ({
          ...prevState,
          status: `Network changed to ${chainId}, please reconnect.`,
        }));
      });
    }
  };
  

  const getSupply = async () => {
    const params = {
      to: info.contractJSON.address,
      from: info.account,
      data: info.contract.methods.totalSupply().encodeABI(),
    };
    try {
      const result = await window.ethereum.request({
        method: "eth_call",
        params: [params],
      });
      
      setMintInfo((prevState) => ({
        ...prevState,
        supply: info.web3.utils.hexToNumberString(result),
      }));
    } catch (err) {
      setMintInfo((prevState) => ({
        ...prevState,
        supply: 0,
      }));
    }
  };

  const getCost = async () => {
    const params = {
      to: info.contractJSON.address,
      from: info.account,
      data: info.contract.methods.cost().encodeABI(),
    };
    try {
      const result = await window.ethereum.request({
        method: "eth_call",
        params: [params],
      });
      
      setMintInfo((prevState) => ({
        ...prevState,
        cost: info.web3.utils.hexToNumberString(result),
      }));
    } catch (err) {
      setMintInfo((prevState) => ({
        ...prevState,
        cost: "0",
      }));
    }
  };

  const mint = async () => {
   

    const params = {
      to: info.contractJSON.address,
      from: info.account,
      value: info.web3.utils.toHex(BigInt(mintInfo.cost) * BigInt(mintInfo.amount)),
      data: info.contract.methods
        .mint(mintInfo.amount)
        .encodeABI(),
    };
   
    try {
      setMintInfo((prevState) => ({
        ...prevState,
        loading: true,
        status: `Minting ${mintInfo.amount}...`,
      }));
      const txHash = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [params],
      });
      setMintInfo((prevState) => ({
        ...prevState,
        loading: false,
        status:
          "Nice! Your NFT will show up on MagicEden, once the transaction is successful.",
      }));
      getSupply();
    } catch (err) {
      setMintInfo((prevState) => ({
        ...prevState,
        loading: false,
        status: err.message,
      }));
    }
  };

  const updateAmount = (newAmount) => {
    if (newAmount <= 1 && newAmount >= 1) {
      setMintInfo((prevState) => ({
        ...prevState,
        amount: newAmount,
      }));
    }
  };

  const connectToContract = (_contractJSON) => {
    init("eth_requestAccounts", _contractJSON);
  };

  useEffect(() => {
    connectToContract(contract);
    initListeners();
  }, []);

  useEffect(() => {
    if (info.connected) {
      getSupply();
      getCost();
    }
  }, [info.connected]);

  return (
    
    <div className="w-1/3 sm:w-1/2 md:w-3/4 lg:w-full flex flex-col ">

    
  
        {/* Detail and mint btn */}
        {mintInfo.supply < contract.total_supply ? (
          <div className="card-body bg-blue-500 text-white p-6 rounded-lg shadow-md">
  {/* mint button and add minus */}
            <div className="flex flex-row items-center justify-center my-4 ">
              <Button  
                disabled={!info.connected || mintInfo.cost == "0"}
              className="border-none "
                onClick={() => updateAmount(mintInfo.amount - 1)}
              >
                -
              </Button>
              <div style={{ width: 10 }}></div>
              <Button  
                disabled={!info.connected || mintInfo.cost == "0"}
               
                onClick={() => mint()}
              >
                Mint {mintInfo.amount}
              </Button>
              <div style={{ width: 10 }}></div>
              <Button 
                disabled={!info.connected || mintInfo.cost == "0"}
              className="border-none "
                onClick={() => updateAmount(mintInfo.amount + 1)}
              >
                +
              </Button>
            </div>
              {/* supply and mint price */}
            {info.connected ? (
             <div className="flex flex-row justify-center w-full max-w-4xl mx-auto bg-gray-200 p-4">
                <p className="max-w-2xl text-sm md:text-2xl mt-8 text-center dark:text-neutral-200" style={{ color: "#d4d4d4" }}>
                  {info.web3?.utils.fromWei(mintInfo.cost, "ether") *
                    mintInfo.amount}{" "}
                  {contract.chain_symbol}
                </p>
                <div style={{ width: 20 }}></div>
                <p className="max-w-2xl text-sm md:text-2xl mt-8 text-center dark:text-neutral-200" style={{ color: "#d4d4d4" }}>

                  |
                </p>
                <div style={{ width: 20 }}></div>
                <p className="max-w-2xl text-sm md:text-2xl mt-8 text-center dark:text-neutral-200"style={{ color: "#d4d4d4" }}>

                  {mintInfo.supply}/{contract.total_supply}
                </p>
              </div>
            ) : null}

            {/* text box */}
            {mintInfo.status ? (
              <p  className="max-w-2xl text-sm md:text-2xl mt-8 text-center dark:text-neutral-200" style={{ color: "#d4d4d4" }} >{mintInfo.status}</p>
            ) : null}
            {info.status ? (
              <p  className="max-w-2xl text-sm md:text-2xl mt-8 text-center dark:text-neutral-200" style={{ color: "#7f1d1d" }}>
                {info.status}
              </p>
            ) : null}
          </div>
        ) : (
          <div className="flex justify-around w-full max-w-4xl mx-auto bg-gray-200 p-4">
            <p style={{ color: "var(--statusText)", textAlign: "center" }}>
              {mintInfo.supply}/{contract.total_supply}
            </p>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
              We've sold out! .You can still buy and trade the {contract.name}{" "}
              on marketplaces such as MagicEden.
            </p>
          </div>
        )}
        {/* Wallet connect  */}
        <div className=" text-white p-2 rounded-lg shadow-md">
          <Button
          
            style={{
              backgroundColor: info.connected
                ? "#701a75"
                : "#991b1b",
            }}
            onClick={() => connectToContract(contract)}
          >
            {info.account ? "Connected" : "Connect Wallet"}
          </Button>
          {info.connected ? (
            <p className="text-base  bg-clip-text items-center justify-center text-transparent drop-shadow-2xl  py-4 my-5
             bg-gradient-to-b from-white/80 to-white/20">
              {String(info.account).substring(0, 6) +
                "..." +
                String(info.account).substring(38)}
            </p>
          ) : null}
        </div>
        {/* marketplace link */}<div className="mt-8">
        <a
          
          className=" max-w-2xl text-sm md:text-2xl mt-8 text-center dark:text-neutral-200" style={{ color: "#d4d4d4" }} 
          target="_blank"
          href="https://magiceden.io/collections/monad-testnet/0x4fcf36ac3d46ef5c3f91b8e3714c9bfdb46d63a3"
        >
          Trade on MagicEden
        </a>
        </div>
      </div>
 
  );
}

export default Minter;
