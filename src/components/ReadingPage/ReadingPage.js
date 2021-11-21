import React from "react";
import articleData from "./articleContent";
import VRimage from "./VRimage.svg";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import "./ReadingPage.css";
const ArticleTitle = () => {
  return (
    <>
      <div className="article_page_container">
        {articleData.map((ele, index) => {
          const { articleTag, title, userName, date, content } = ele;
          return (
            <>
            <Navbar/>
              <span className="article_page_tag">{articleTag}</span>
              <h1 className="article_page_title">{title}</h1>
              <div className="article_page_user">
                <div className="article_page_titlename">
                  <div className="article_page_titleusername">👤{userName}</div>
                  <div className="article_page_titledate">{date}</div>
                </div>
                <div className="article_page_titleicons">🏷️</div>
              </div>
              <body>
                <div className="main">
                  <div className="card-pic">
                    <img src={VRimage} alt=" " />
                  </div>
                  <div className="second-main">
                    <div className="small-para">
                      {/*{content}*/}
                      Visual reality is the new craze for our generation.
                      Whoever ever watched a VR movie or played a VR game knows
                      that.
                      <br />
                      <br />
                      With every passing day, coders are discovering new ways to
                      explore it and newer sectors to apply VR. Take a peek to
                      know how you can expect this awesome technology to change
                      your reality you have always seen!
                      <br />
                      <br />
                      • Medical-
                      <br />
                      <br />
                      Remember the “boggart” concept? A creature that can turn
                      into the object of your worst nightmare and you have to
                      face it to know how to fight with the “dementors”. While
                      JK Rowling actually took the idea of dementers from her
                      depression, her thoughts can be implemented using VR. You
                      can face your worst fears and find a way to deal with it.
                      It will be really grateful to fight with phobia, anxiety,
                      PTSD, autism and other mental illness. It can be used to
                      sooth a stressed mind too. This VR can also work like a
                      virtual 3-D printing. Newbies can be trained digitally to
                      have a clear idea of what actually happens at the OT
                      whereas professionals can use it to visualize a complex
                      operational procedure. VR is surely going to bring a
                      revolution in the medical field.
                      <br />
                      <br />
                      • Movies and video games-
                      <br />
                      <br />
                      OK, some of us have already an idea of how can it impact
                      our movie watching or game playing experience, especially
                      the once who have watched a 3-D movie. The horror movie
                      becomes 3-4 times more horrific and the content will seem
                      real.
                      <br />
                      Remember how many people died while playing the
                      Pokémon-Go? VR makes anything way more engaging and
                      addictive. While the market will make its full use to bag
                      their profit, we need to be cautious for our own shake.
                      <br />
                      <br />
                      • Automobile-
                      <br />
                      <br />
                      Yeah, we can be well-versed with real-life traffic within
                      our training period. Apart from that, they can build 3-D
                      image of the prototype. Who knows, maybe you can take a
                      ride with a car not even built in reality! It will be a
                      convenient and cheap option too.
                      <br />
                      Ford is already on their way to implement it.
                      <br />
                      <br />
                      • military and sports-
                      <br />
                      <br />
                      The army can be trained really well and they can be
                      well-versed with all types of equipment using visual
                      reality. Their training will be a lot more effective.
                      <br />
                      Similarly, sport players can also be trained. Even the
                      audience can enjoy the thrill of the gallery right from
                      their home.
                      <br />
                      <br />
                      • Tourism-
                      <br />
                      <br />
                      You can have a proper look of your destination before
                      deciding where you go! Even the people with leg injuries
                      or who are unable to go to a trip can have the feeling of
                      going out.
                      <br />
                      You can easily have access to 360 degree view of your
                      hotels too.
                      <br />
                      Even some museums are organizing a VR trip of that place.
                      <br />
                      <br />
                      • Education-
                      <br />
                      <br />
                      And last but not the least use of VR- is our education and
                      training. Visualize a time when you can virtually go to
                      another place while reading about it. You can witness the
                      experiments right in front of you. Education will be so
                      much fun, right?
                    </div>
                  </div>
                </div>
              </body>
              <Footer />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ArticleTitle;
