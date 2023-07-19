import React, { useEffect } from 'react'
import { ConnectWallet, useSigner, useAddress } from "@thirdweb-dev/react";

const Home = () => {
    const signer = useSigner();
    const address = useAddress();
  
    
  
    useEffect(() => {
      console.log(address)
    }, [address])

    return(
      <main className="w-full">
        <div className="w-full">teswt</div>
      </main>
    )
  }

export default Home