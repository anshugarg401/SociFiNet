import { useState, useEffect } from "react";
import Web3 from "web3";
import SignInContractABI from "../component/abi/SigninContractAbi.json"; // Import the ABI

const useMetamask = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [signInContract, setSignInContract] = useState(null);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        if (window.ethereum && window.ethereum.selectedAddress) {
          setIsConnected(true);
          setAccount(window.ethereum.selectedAddress);
          const web3 = new Web3(window.ethereum);
          const balance = await web3.eth.getBalance(
            window.ethereum.selectedAddress
          );
          setBalance(web3.utils.fromWei(balance, "ether"));
          const contract = new web3.eth.Contract(
            SignInContractABI,
            "0x4d49663F0A2bee383671F85854C106b538794CA1"
          );
          setSignInContract(contract);
        } else {
          setIsConnected(false);
        }
      } catch (error) {
        console.error("Error checking Metamask connection:", error);
      }
    };

    checkConnection();
  }, []);

  const signIn = async () => {
    try {
      if (signInContract) {
        await signInContract.methods.signIn().send({ from: account });
        alert("Successfully signed in!");
      } else {
        alert("Contract not instantiated. Please connect Metamask first.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Error signing in. Please try again.");
    }
  };

  return { isConnected, account, balance, signIn };
};

export default useMetamask;
