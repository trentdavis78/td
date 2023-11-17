import { createSignal, onMount } from 'solid-js';
import { SessionKit, BrowserLocalStorage } from '@wharfkit/session';
import { WebRenderer } from '@wharfkit/web-renderer';
import { WalletPluginAnchor } from '@wharfkit/wallet-plugin-anchor';
import { WalletPluginCloudWallet } from '@wharfkit/wallet-plugin-cloudwallet';
import LoginComponent from './components/LoginComponent';
import './input.css';
import './output.css';
 
const App = (props) => {
    console.log(props)
    const [session, setSession] = createSignal(null);
    const [sessionStorage, setSessionStorage] = createSignal(null);
    let sessionKit = null;

    const initializeSessionKit = async () => {
        const chains = [
            {
                id: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
                url: "https://wax.greymass.com"
            }
        ];
        const walletPlugins = [new WalletPluginAnchor(), new WalletPluginCloudWallet()];
        const storage = new BrowserLocalStorage('wharfkit-storage');

        sessionKit = new SessionKit({
            appName: 'NFTG.TV',
            chains: chains,
            ui: new WebRenderer(),
            walletPlugins: walletPlugins
        }, { storage: storage });

        try {
            const restoredSession = await sessionKit.restore();
            setSession(restoredSession || null);
        } catch (error) {
            console.error('Error restoring session:', error);
        }
    };

    const login = async () => {
        try {
            const newSession = await sessionKit.login();
            console.log(newSession)
            setSession(newSession);
            window.location.reload();
         } catch (error) {
            console.error('Error during login:', error);
        }
    };
    const logout = async () => {
        try {
            await sessionKit.logout();
            setSession(null);
            window.location.reload();
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    onMount(async () => {
        initializeSessionKit();
     const _sessionStorage = async () => {
        return localStorage.getItem('wharf-wharfkit-storage-session');
     }
       const result =  await _sessionStorage();
      
        setSessionStorage(JSON.parse(result))
      
    });
 
    return ( 
     
        <LoginComponent data={sessionStorage()} actor={sessionStorage() ? sessionStorage().actor : null} logout={() => logout()} login={() => login()} /> 
    
    
    );
};

export default App;
