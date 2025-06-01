import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 1px 10px rgb(0, 0, 0, 0.1);
  z-index: 10;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 40px;
  
  @media (max-width: 850px) {
    height: 60px;
    padding: 0 20px;
  }
`;

export const MenuImg = styled.img`
  width: 40px;
  height: 40px; 
  margin-right: 20px;
  
  @media (max-width: 850px) {
    width: 20px;
    height: 20px; 
  }
`

export const LogoImg = styled.img`
  margin-left: 10px;
  height: 40px; 
  margin-right: auto;
  cursor: pointer;
  
  @media (max-width: 850px) {
    margin-left: 0;
    height: 30px; 
  }
`
export const Text = styled.p`
  color: #6D717D;
  font-weight: bold;
  font-size: 15px;
  
  @media (max-width: 850px) {
    font-size: 12px;
  }
`
export const LoginBtn = styled.button`
  display: flex;
  margin-left: 20px;
  background-color: black;
  padding: 10px 20px;
  border-radius: 6px;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  
  @media (max-width: 850px) {
    padding: 5px 10px;
    line-height: 20px;
    font-size: 12px;
  }
`
export const LoginImg = styled.img`
  height: 20px;
  margin-right: 10px;
  
  @media (max-width: 850px) {
    height: 15px;
    margin: auto 5px auto 0;
  }
`
export const Sidebar = styled.div`
 position: absolute;       
  top: 80px;   
  left: 0;
  width: 350px; 
  height: 100%;
  background-color: white;
  border-right: 2px solid #e0e0e0;
  padding: 40px 30px;
  z-index: 1000;
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    width: 300px;
    padding: 30px 20px;
  }
`;


export const SidebarLogo = styled.img`
  height: 36px;
  margin-bottom: 40px;

  @media (max-width: 850px) {
    height: 28px;
    margin-bottom: 30px;
  }
`;
export const SidebarMenu = styled.div`
  font-size: 25px;
  font-weight: 800;
  color: black;
  padding: 20px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 14px;        
    pointer-events: none; 
	
  }

  &:hover {
    color: black;          
    text-decoration: none;
  }

  @media (max-width: 850px) {
    font-size: 24px;
    margin-bottom: 22px;
  }
`;

export const Backdrop = styled.div`
 position: absolute;   
  top: 80px; 
  left: 0;
  z-index: 900;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);      
`;
