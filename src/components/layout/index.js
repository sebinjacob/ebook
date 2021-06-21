import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import YouTube from "@material-ui/icons/YouTube";
import GitHub from "@material-ui/icons/GitHub";
import Pinterest from "@material-ui/icons/Pinterest";

import PageList from "../pageList";

function Layout(props) {
    // eslint-disable-next-line react/prop-types
    const { children: Ebook } = props;
    return (
        <>
            <div className='container'>
                <div className='nav'>
                    <PageList />
                </div>
                <div className='main'>{Ebook}</div>
            </div>
            <div className='footer'>
                <Facebook
                    fontSize='small'
                    style={{ color: "#fff", marginLeft: "30px" }}
                />
                <Twitter
                    fontSize='small'
                    style={{ color: "#fff", marginLeft: "30px" }}
                />
                <YouTube
                    fontSize='small'
                    style={{ color: "#fff", marginLeft: "30px" }}
                />
                <GitHub
                    fontSize='small'
                    style={{ color: "#fff", marginLeft: "30px" }}
                />
                <Pinterest
                    fontSize='small'
                    style={{ color: "#fff", marginLeft: "30px" }}
                />
            </div>
        </>
    );
}

export default Layout;
