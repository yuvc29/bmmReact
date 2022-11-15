

  import { Button, Tooltip, Table, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import MovieForm from './MovieForm';
  import ShowForm from './ShowForm'
  import { Routes, Route, useNavigate } from 'react-router-dom';
  import TheaterForm from './TheaterForm'
  import MovieList from './MovieList';
  import Actors from './Actors';

  const { Header,  Sider } = Layout;

const Admin = () => {
    
    const [collapsed, setCollapsed] = useState(false);
    const nav = useNavigate()

    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <h1 style={{color:'white', fontSize: 30}}>BookMyShow</h1>
          <Menu theme="dark" 
          onClick={({key})=>{
            if(key==="signout"){

            }
            else{
                nav(key)
            }
          }}
          items={[
            {
                label:"Home", key:"/admin"
            },
            {
              label:"Add Actor", key:"/admin/actor"
            },
            {
                label:"Add Movie", key:"/admin/movie"
            },
            {
                label:"Add Show", key:"/admin/show"
            },
            {
              label:"Add Theater", key:"/admin/theater"
            },
            {
                label:"Sign-Out" , key:"/admin/signout", danger:true
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
                <Route path="/admin/" element = {<MovieList/>}/>
                <Route path="/admin/actor" element = {<Actors />}/>
                <Route path="/admin/movie" element = {<MovieForm/>}/>
                <Route path="/admin/show" element = {<ShowForm/>}/>
                <Route path="/admin/theater" element = {<TheaterForm/>}/>
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

