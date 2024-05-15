import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import SigninContractAbi from '../abi/SigninContractAbi.json'; // Import the ABI for the PointAward contract

const ContractInteraction = () => {
    const [contract, setContract] = useState(null);
    const [points, setPoints] = useState(0);
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState('');

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

    const getAllEvents = async (eventName, filter) => {
        const events = [];
        const latestBlock = Number(await web3.eth.getBlockNumber()); // Convert BigInt to Number
        const step = 10000;
        for (let i = 0; i <= latestBlock; i += step) {
            const fromBlock = i;
            const toBlock = Math.min(i + step - 1, latestBlock);
            const partialEvents = await contract.getPastEvents(eventName, {
                filter,
                fromBlock,
                toBlock,
            });
            events.push(...partialEvents);
        }
        return events;
    };

    useEffect(() => {
        const getPoints = async () => {
            try {
                if (contract && account) {
                    const signInEvents = await getAllEvents('SignedIn', { user: account });
                    const signOutEvents = await getAllEvents('SignedOut', { user: account });

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
            <p>SociFi Loyalist Mined: <b>{points}</b></p>

            
        </div>
    );
};

export default ContractInteraction;
