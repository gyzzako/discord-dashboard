import { useState } from 'react';
import '../styles/globals.scss'
import { GuildContext } from '../utils/contexts/GuildContext';
import { LoggedInContext } from '../utils/contexts/LoggedInContext';
import { AppPropsWithLayout, PartialGuild } from '../utils/types'

type Props = {
}

function MyApp({ Component, pageProps }: AppPropsWithLayout<Props>) {
  const [ guild, setGuild ] = useState<PartialGuild>();
  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean | null>(null);
  
  const getLayout = Component.getLayout ?? ((page) => page);
  
  return (
    <LoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <GuildContext.Provider value={{guild, setGuild}}>
        {getLayout(<Component {...pageProps} />)}
      </GuildContext.Provider>
    </LoggedInContext.Provider>
  );
}

export default MyApp
