import * as React from "react"
import { Link, withPrefix } from "gatsby"
import "./style.css"

// Full blog post page for Post 1
const Why2026IsSpecial = () => {
  return (
    <main>
      {/* Hero section used at the top of the individual post page */}
      <header
        className="hero"
        id="home"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 60, 30, 0.85), rgba(0, 60, 30, 0.85)), url(${withPrefix("/stadium-banner.jpg")})`,
        }}
      >
        <div className="hero-content">
          <h1>Why the 2026 World Cup Is Special</h1>
          <p>Post 1 | June 11, 2026 | 10:00 AM</p>
        </div>
      </header>

      {/* Navigation menu for moving around the blog */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/why-2026-is-special/">Why 2026 Is Special</Link>
        <Link to="/caribbean-fans/">Caribbean Fans</Link>
        <Link to="/teams-to-watch/">Teams to Watch</Link>
      </nav>

      {/* Full post content */}
      <section className="full-post">
        <img
          src={withPrefix("/football-special.jpg")}
          alt="Football players gathered in a team huddle"
        />

        <h2>Why the 2026 World Cup Is Special</h2>

        <p>
          The 2026 FIFA World Cup is special because it will be hosted across three
          countries: Canada, Mexico, and the United States. This makes the tournament
          feel larger and more international because fans will experience the event
          across different cities, stadiums, and cultures. It also shows how football
          continues to grow as a global sport.
        </p>

        <p>
          Another important reason this tournament stands out is the expanded format.
          The 2026 edition will be the first FIFA World Cup with 48 teams, which means
          more countries will have the chance to participate on the world stage. This
          can make the tournament more exciting because fans may see new teams,
          unexpected results, and more football stories from different regions.
        </p>

        <p>
          As a St. Lucian football fan, I think this makes the 2026 World Cup even more
          interesting. Even when smaller Caribbean countries are not always represented
          in the final tournament, the World Cup still brings people into the same
          conversation. Fans choose teams to support, debate match results, and enjoy
          the excitement together with friends and family.
        </p>

        <p>
          For me, this is what makes the World Cup special. It is not only about which
          team wins the trophy, but also about how the tournament brings people
          together. The 2026 World Cup feels like a good example of football becoming
          more open, more global, and more connected to fans everywhere.
        </p>

        <div className="highlight">
          The 2026 World Cup stands out because it combines three host countries, an
          expanded 48-team format, and a wider opportunity for fans and nations to be
          part of the global football experience.
        </div>

        {/* Reply section for user feedback */}
        <div className="reply-box">
          <h3>Leave a Reply</h3>
          <input type="text" placeholder="Your name" />
          <textarea placeholder="Share your thoughts about this post"></textarea>
          <button type="button">Post Reply</button>
        </div>

        <Link to="/" className="back-link">
          Back to Home
        </Link>
      </section>

      {/* Footer section */}
      <footer>
        <p>
          <strong>Created by Robin Dwarikasingh</strong>
        </p>
        <p>Web Application Development | Activity: Creating a Blog</p>
      </footer>
    </main>
  )
}

export default Why2026IsSpecial

// Browser tab title for this page
export const Head = () => <title>Why the 2026 World Cup Is Special</title>