/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/computer.jpg";

const imageAltText = "Laptop on desk with coffee cup and plant.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My Blog Website",
    description:
      "This is to showcase my blog posts and articles which I have written after my learnings in tech industry. ",
    url: "https://samyakshah-portfolio.netlify.app/blogs",
  },
  {
    title: "Honest Emoji",
    description:
      "Know your emotions. This will interpret emojis. Put an emoji and it will tell what that means.",
    url: "https://know-emotions.netlify.app/",
  },
  {
    title: "Ferb Latin Speak",
    description:
      "Made a translation web app that will translate your sentences into Ferb-Latin language.",
    url: "https://ferb-latin-translator-bysamyak.netlify.app/",
  },
  {
    title: "Horror Movie Recommendor",
    description:
      "Made a ReactJS recommendation app : Horror Universe in which there are top movies,series and books recommended",
    url: "https://horror-universe.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
