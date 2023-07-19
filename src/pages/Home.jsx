import React, { useEffect } from 'react'
import { ConnectWallet, useSigner, useAddress } from "@thirdweb-dev/react";
import { Button } from 'semantic-ui-react'
import { Placeholder } from 'semantic-ui-react'
import Examples from './Examples';

const Home = () => {
    const signer = useSigner();
    const address = useAddress();
  
    
  
    useEffect(() => {
      console.log(address)
    }, [address])

    return(
      <main className="w-full">
        <Examples />
        
      </main>
    )
  }

export default Home