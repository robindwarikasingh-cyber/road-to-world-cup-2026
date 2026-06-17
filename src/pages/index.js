import * as React from "react"
import { Link, withPrefix } from "gatsby"
import "./style.css"

// Main Gatsby homepage component for the World Cup blog
const IndexPage = () => {
  return (
    <main>
      {/* Hero section: displays the main title and short blog description */}
      <header
        className="hero"
        id="home"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 60, 30, 0.85), rgba(0, 60, 30, 0.85)), url(${withPrefix("/stadium-banner.jpg")})`,
        }}
      >
        <div className="hero-content">
          <h1>Road to World Cup 2026</h1>
          <p>
            A St. Lucian football fan blog about the excitement, culture, and
            global impact of the FIFA World Cup.
          </p>
        </div>
      </header>

      {/* Navigation menu: links users to each full blog post page */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/why-2026-is-special/">Why 2026 Is Special</Link>
        <Link to="/caribbean-fans/">Caribbean Fans</Link>
        <Link to="/teams-to-watch/">Teams to Watch</Link>
      </nav>

      {/* Introduction section: explains the purpose of the blog */}
      <section className="intro">
        <h2>Welcome to My Football Blog</h2>
        <p>
          Football is more than just a sport. It brings people together, creates
          conversations, and gives fans around the world something exciting to
          look forward to. This blog focuses on the road to the 2026 FIFA World
          Cup and explores why this tournament is special, how Caribbean fans
          connect with the game, and some of the teams and players that may
          attract attention.
        </p>
      </section>

      {/* Blog container: holds the three blog preview cards */}
      <section className="blog-container">
        {/* Preview card for Post 1 */}
        <article className="post-card">
          <img
            src={withPrefix("/football-special.jpg")}
            alt="Football players gathered in a team huddle"
          />

          <div className="post-content">
            <p className="post-date">Post 1 | June 11, 2026 | 10:00 AM</p>

            <h2>
              <Link to="/why-2026-is-special/" className="post-title-link">
                Why the 2026 World Cup Is Special
              </Link>
            </h2>

            <p>
              The 2026 FIFA World Cup is expected to be one of the most exciting
              tournaments because it will be hosted across Canada, Mexico, and
              the United States.
            </p>

            <Link to="/why-2026-is-special/" className="read-more">
              Read full post
            </Link>
          </div>
        </article>

        {/* Preview card for Post 2 */}
        <article className="post-card">
          <img
            src={withPrefix("/football-fans.jpg")}
            alt="Football fans celebrating and supporting teams"
          />

          <div className="post-content">
            <p className="post-date">Post 2 | June 12, 2026 | 2:30 PM</p>

            <h2>
              <Link to="/caribbean-fans/" className="post-title-link">
                Football and Caribbean Fans
              </Link>
            </h2>

            <p>
              In the Caribbean, football is followed with passion. World Cup
              season often becomes a time for discussion, friendly rivalry, and
              community.
            </p>

            <Link to="/caribbean-fans/" className="read-more">
              Read full post
            </Link>
          </div>
        </article>

        {/* Preview card for Post 3 */}
        <article className="post-card">
          <img
            src={withPrefix("/teams-to-watch.jpg")}
            alt="Graphic showing football nations to watch"
          />

          <div className="post-content">
            <p className="post-date">Post 3 | June 13, 2026 | 6:00 PM</p>

            <h2>
              <Link to="/teams-to-watch/" className="post-title-link">
                Teams and Players to Watch in 2026
              </Link>
            </h2>

            <p>
              Every World Cup brings attention to famous football nations,
              experienced players, rising talents, and possible underdog
              stories.
            </p>

            <Link to="/teams-to-watch/" className="read-more">
              Read full post
            </Link>
          </div>
        </article>
      </section>

      {/* Footer section: displays student and course activity information */}
      <footer>
        <p>
          <strong>Created by Robin Dwarikasingh</strong>
        </p>
        <p>Web Application Development | Activity: Creating a Blog</p>
      </footer>
    </main>
  )
}

export default IndexPage

// Gatsby Head export: controls the title shown in the browser tab
export const Head = () => <title>Road to World Cup 2026</title>