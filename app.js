
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
    
    export default function Mint() {
        return (
            <CrossmintPayButton
                collectionTitle="Mad Cowz Multiverse"
                collectionDescription="4,999 of the MEANEST, CraZiEsT, Psychpathic, and outright degenerate cattle, you've ever messed with! They've even got their own SUPERNATURAL herd.  (... word is, if you find the cow they were BEFORE they were killed, you can collect a $2,000 bounty! ... More info below ... Shhh!)"
                collectionPhoto="https://www.instagram.com/p/CdrPrMOMAzJ/"
                clientId="070bca89-390a-48f3-b3a1-f976ecf7a04f"
                mintConfig={{"type":"erc-721","totalPrice":"<SELECTED_PRICE_IN_MATIC>","_mintAmount":"<_MINTAMOUNT>"}}
            />
        );
    }
