import * as React from "react"
import { Link } from "gatsby"
import "./style.css"

// Full blog post page for Post 2
const CaribbeanFans = () => {
  return (
    <main>
      {/* Hero section used at the top of the individual post page */}
      <header className="hero">
        <div className="hero-content">
          <h1>Football and Caribbean Fans</h1>
          <p>Post 2 | June 12, 2026 | 2:30 PM</p>
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
          src="/football-fans.jpg"
          alt="Football fans celebrating and supporting teams"
        />

        <h2>Football and Caribbean Fans</h2>

        <p>
          In the Caribbean, football is followed with a lot of passion. Even
          when our own countries are not always part of the tournament, fans
          still find teams to support and matches to enjoy. The World Cup often
          becomes a shared experience where people discuss results, predict
          winners, and celebrate memorable goals.
        </p>

        <p>
          Football also creates friendly rivalry. Some fans support Brazil,
          Argentina, England, France, or other major football nations, while
          others support underdogs. This makes conversations exciting because
          everyone has different opinions about which team will go far in the
          tournament.
        </p>

        <p>
          As a St. Lucian football fan, I think the World Cup is special because
          it brings people together. Friends, families, and communities gather
          to watch games, share reactions, and enjoy the atmosphere of the
          tournament. It shows that football is not only about competition, but
          also about connection and culture.
        </p>

        <div className="highlight">
          For many Caribbean fans, the World Cup is not only about the teams on
          the field, but also about the conversations, excitement, and memories
          created around the game.
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

export default CaribbeanFans

// Browser tab title for this page
export const Head = () => <title>Football and Caribbean Fans</title>