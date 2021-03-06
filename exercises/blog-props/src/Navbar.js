import React from "react"

const Navbar = () => {
    const title = {
        display:"inline-block",
        overflow:"hidden",
        margin: 0,
        marginTop:"1.4%",
        marginLeft:"12.5%",
        cursor:"pointer"
    }
    const nav = {
        display:"inline-block",
        float:"right",
        marginRight: 160,
        marginTop:20
    }
    const list = {
        display:"inline",
        marginRight: 30,
        frontWeight:"bold",
        fontSize:14,
        cursor:"pointer"
    }
    return (
        <div>
            <h2 className="grayHover" style={title}>Start Bootstrap</h2>
            <div style={nav}>
                <li className="grayHover" style={list}>HOME</li>
                <li className="grayHover" style={list}>ABOUT</li>
                <li className="grayHover" style={list}>SAMPLE POST </li>
                <li className="grayHover" style={list}>CONTACT</li>
            </div>
        </div>
    )
}

export default Navbar