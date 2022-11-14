import React, { useState } from 'react';
// import './MovieDetail.css'

import {
    Input,
    Button,
    Tag,
    Avatar,
    Divider,
    Breadcrumb,
    Layout,
    Menu,
    Image
} from 'antd';




import { Link, useLocation } from 'react-router-dom'

const { Header, Content, Footer } = Layout;
const { Search } = Input

function MovieDetail(props) {

    let logo = "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-ODJrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331997-myeqyuplfu-portrait.jpg";

    const location = useLocation()
    const { title, likes, poster, language, format } = location.state;



    const movie = {
        title: "Uunchai",
        description: "Three friends take a trek to the Everest Base Camp which becomes a personal, emotional and spiritual journey while battling their physical limitations and discovering the true meaning of freedom.",
        cast: [
            {
                firstName: "Amitabh",
                lastName: "Bachchan",
                image: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/amitabh-bachchan-138-12-09-2017-02-34-37.jpg"
            },
            {
                firstName: "Rekha",
                lastName: "Bachchan",
                image: "https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/rekha-1864-22-09-2017-03-36-15.jpg"
            }

        ],
        releaseDate: "11 Nov 2022",
        length: 129,
        language: "Hindi",
        ageRating: "U",
        format: "2D/3D",
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/uunchai-et00335262-1665386678.jpg",
        genre: [
            "Adventure", "Drama", "Family"
        ]
    }
    return (<>
        <div>Movies Titile is- {title}</div>
        <div>Total likes for this Movies  is- {likes}k</div>
        <div>Movies poster url is- {poster}</div>
        <div>Movies language is- {language}</div>
        <div>Movies formate- {format}</div>


        <Layout className="layout">
            <Header >
                <div style={{ marginLeft: 200, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <div style={{ marginBottom: 15 }}>

                        <a href="/">
                            <Image
                                width={200}
                                height={50}
                                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-ODJrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00331997-myeqyuplfu-portrait.jpg"
                            />
                        </a>
                    </div>
                    <div style={{ marginLeft: 30, marginTop: 15 }}>
                        <Search placeholder="input search text" enterButton />
                    </div>
                </div>
            </Header>
            <Content>
                <Breadcrumb
                    style={{
                        margin: '5px 10px',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ backgroundColor: 'silver' }}>
                    <div style={{ marginLeft: 450, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                        <Image
                            width={250}
                            height={350}
                            style={{
                                boxShadow: 'inset 0 0 100px black'
                            }}
                            src={movie.poster}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'left', marginLeft: 50 }}>
                            <h1 style={{ fontWeight: 'bold', fontSize: 30 }}>
                                {title}

                            </h1>
                            <Tag color="volcano">{movie.format}</Tag>
                            <Tag color="volcano">{movie.language}</Tag>
                            <Tag color="volcano">{movie.length.toString()}</Tag>
                            <Tag color="volcano">{movie.ageRating}</Tag>
                            <Tag color="volcano">{movie.releaseDate}</Tag>
                            <Divider />
                            <Link to='/movie-details/Hall-name_and_date-time'
                                state={{
                                    title: title,
                                    language: language,
                                    format: format
                                    // likes: props.MovieDetails.likes,
                                    // poster: props.MovieDetails.poster,
                                }}>
                                <Button type="primary">Book Show</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="site-layout-content">
                    <div style={{ marginLeft: 300, marginRight: 300 }}>
                        <h1 style={{ fontWeight: 'bold' }}>About the movie</h1>
                        <p>{movie.description}</p>
                        <Divider />
                        <h1 style={{ fontWeight: 'bold' }}>Cast</h1>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            {
                                movie.cast.map((actor) => (
                                    <div style={{ margin: 10 }}>
                                        <Avatar size={100} src={actor.image} />
                                        <h1>{actor.firstName + " " + actor.lastName}</h1>
                                    </div>
                                ))
                            }
                        </div>
                        <Divider dashed />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
                            probare, quae sunt a te dicta? Refert tamen, quo modo.
                        </p>
                    </div>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    </>)
};
export default MovieDetail;












