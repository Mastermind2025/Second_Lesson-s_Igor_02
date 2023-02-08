

import { Layout } from './Layout/Layout';
import { Product } from './Product/Product';
import { Header } from './Layout/Header/Header';
import { Counter } from './Counter/Counter';
import { Vouter } from './Vouter/Vouter';
import { LoginForm } from './LoginForm/LoginForm';

// const Header = styled.h1`
//      color: ${({colorWhite})=>(colorWhite?'red':'#999')};

// `;


export const App = () => {
  return (
    <Layout>
    
  <Header title="Hello React!" />
      
      <Product />
      <Counter />
      <Vouter />
      <LoginForm />
    
    </Layout>     
  );
};