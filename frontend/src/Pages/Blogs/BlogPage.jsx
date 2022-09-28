import React from "react";
import BlogNavbar from "../../Components/BlogNavbar/BlogNavbar";
import { BlogData } from "./BlogData";
import BlogItem from "./BlogItem";
import "./BlogPage.css";
const BlogPage = () => {
  return (
    <div>
      <BlogNavbar />

      <div className="heroimage-box">
        <div className="sub-heading">
          <p>
            PRODUCTIVITY ARTICLES TO HELP YOU INCREASE PRODUCTIVITY AT WORK.
          </p>
        </div>

        <div className="heroimg">
          <img
            src="https://trackingtime.co/wp-content/uploads/2022/09/Ilustraciones-Blog-Post-New-Image_240x146px-BlogPost-A-3.svg"
            alt="heroimg"
          />
        </div>

        <div className="main-heading">
          <h1>Introducing Our Fresh New Look and Roadmap</h1>
        </div>

        <div className="btn">
          <button>READ ARTICLE</button>
        </div>
      </div>

      <div className="Blog-Container">
        {BlogData.map((item) => (
          <BlogItem title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
