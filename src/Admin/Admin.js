

  import { Button, Tooltip, Table, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import MovieForm from './MovieForm';
  import ShowForm from './ShowForm'
  import { Routes, Route, useNavigate } from 'react-router-dom';
  import TheaterForm from './TheaterForm'
  import MovieList from './MovieList';
  import Actors from './Actors';
  import axios from 'axios';
  import AllComponent from '../AllComponent'

  const { Header,  Sider } = Layout;

const Admin = ({mainNav}) => {
    
    const [collapsed, setCollapsed] = useState(false);
    const nav = useNavigate()

    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <h1 style={{margin:10, color:'white', fontSize: 30}}>BookMyMovie</h1>
          <Menu theme="dark" 
          onClick={({key})=>{
            if(key==="signout"){
                //////////////////////////////////axios
                const response =  axios.get("http://localhost:8080/logout")
                console.log("signouts")
                // cookies.remove('Token');
                // window.location.href = '/'
                // console.log(response)
                // setUser("")
                window.localStorage.removeItem("user")
                mainNav("/")
            }
            else{
                nav(key)
            }
          }}
          items={[
            {
                label:"Home", key:""
            },
            {
              label:"Add Actor", key:"actor"
            },
            {
                label:"Add Movie", key:"movie"
            },
            {
                label:"Add Show", key:"show"
            },
            {
              label:"Add Theater", key:"theater"
            },
            {
                label:"Sign-Out" , key:"signout", danger:true
            }
          ]} />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              height : '46px'
            }}
          />
          <Content/>
        </Layout>
      </Layout>
    );
  };

function Content(){
    return (
        <div>
            <Routes>
                <Route path="" element = {<MovieList/>}/>
                <Route path="actor" element = {<Actors />}/>
                <Route path="movie" element = {<MovieForm/>}/>
                <Route path="show" element = {<ShowForm/>}/>
                <Route path="theater" element = {<TheaterForm/>}/>
                <Route path="signout" element = {<AllComponent/>}/>
            </Routes>
        </div>
    )
}
export default Admin

{/* <Content
            style={{
              margin: '16px 16px',
            }}
          >{
            page === "movie"?(
                <div>
                    <MovieForm/>
                    
                    <Button onClick={()=>{setPage("show")}}>Select Show</Button>
                </div>
            ): (<div>
                    <ShowForm/>
                    <Button onClick={()=>{setPage("movie")}}>Back</Button>
                </div>
            )
          }
          </Content> */}

