import * as React from "react"
import { Link } from "gatsby"
import "./style.css"

// Full blog post page for Post 3
const TeamsToWatch = () => {
  return (
    <main>
      {/* Hero section used at the top of the individual post page */}
      <header className="hero">
        <div className="hero-content">
          <h1>Teams and Players to Watch in 2026</h1>
          <p>Post 3 | June 13, 2026 | 6:00 PM</p>
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
          src="/teams-to-watch.jpg"
          alt="Graphic showing football nations to watch"
        />

        <h2>Teams and Players to Watch in 2026</h2>

        <p>
          Every World Cup brings attention to famous football nations,
          experienced players, and rising young talents. Teams such as
          Argentina, Brazil, France, Germany, Spain, and England are often
          followed closely because of their football history and strong
          performances in major tournaments.
        </p>

        <p>
          At the same time, one of the most exciting parts of the World Cup is
          seeing unexpected teams perform well. Sometimes a smaller or less
          traditional football nation can surprise fans by reaching the knockout
          rounds or defeating a stronger opponent. These moments are part of
          what makes the tournament memorable.
        </p>

        <p>
          Players will also be a major focus in 2026. Some fans will be watching
          experienced stars, while others will be looking for new talents who
          could become the next big names in football. This mix of experience
          and youth makes the tournament exciting because every match can create
          a new story.
        </p>

        <div className="highlight">
          One of the best parts of the World Cup is seeing both favorites and
          underdogs create unforgettable football moments.
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

export default TeamsToWatch

// Browser tab title for this page
export const Head = () => <title>Teams and Players to Watch in 2026</title>