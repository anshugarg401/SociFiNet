import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import SigninContractAbi from '../abi/SigninContractAbi.json'; // Import the ABI for the PointAward contract

const ContractInteraction = () => {
    const [contract, setContract] = useState(null);
    const [points, setPoints] = useState(0);
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                try {
                    // Request account access if needed
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    // Get the current account
                    const accounts = await web3Instance.eth.getAccounts();
                    setAccount(accounts[0]);
                } catch (error) {
                    console.error('Error loading web3:', error);
                }
            } else {
                console.error('MetaMask not detected.');
            }
        };

        loadWeb3();
    }, []);

    useEffect(() => {
        if (web3) {
            const loadContract = async () => {
                try {
                    const contractAddress = '0x4d49663F0A2bee383671F85854C106b538794CA1'; // Replace with your PointAward contract address
                    const contractInstance = new web3.eth.Contract(SigninContractAbi, contractAddress);
                    setContract(contractInstance);
                } catch (error) {
                    console.error('Error loading contract:', error);
                }
            };

            loadContract();
        }
    }, [web3]);

    useEffect(() => {
        const getPoints = async () => {
            try {
                if (contract) {
                    const signInEvents = await contract.getPastEvents('SignedIn', {
                        filter: { user: account },
                        fromBlock: 0,
                        toBlock: 'latest'
                    });

                    const signOutEvents = await contract.getPastEvents('SignedOut', {
                        filter: { user: account },
                        fromBlock: 0,
                        toBlock: 'latest'
                    });

                    const earnedPoints = Math.min(signInEvents.length, signOutEvents.length);
                    setPoints(earnedPoints);
                }
            } catch (error) {
                console.error('Error getting points:', error);
            }
        };

        getPoints();
    }, [contract, account]);

    const handleInteraction = async () => {
        try {
            if (contract) {
                // Perform the interaction, like signing in or out
            }
        } catch (error) {
            console.error('Error interacting with contract:', error);
        }
    };

    return (
        <div className="App">
            <h1>YOUR TOTAL SociFi</h1>
            <p>SociFi Loyalist OG : <b>Nil</b></p>
            <p>SociFi Loyalist Reward: <b>Nil</b></p>
            <p>SociFi Loyalist Mined: <b>{points}</b> </p>


            {/* <button onClick={handleInteraction}>Interact with Contract</button> */}
        </div>
    );
};

export default ContractInteraction;
