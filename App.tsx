import * as React from 'react';
import AppNavigation from './src/routes/AppNavigation';
import { NewsRealmContext } from './src/data/realm-models';


export default function App() {
  const {RealmProvider} = NewsRealmContext;
  
  return ( 
    <RealmProvider>
      <AppNavigation />
    </RealmProvider>
  );
}