import { Link } from "react-router-dom";
import announcements from "../../data/announcements";
import "./Announcements.css";

export default function Announcements() {
  function renderText(announcement) {
    let text = announcement.text;

    // Sort longest phrases first so "robot section" gets found before "robot"
    const links = [...(announcement.links || [])].sort(
      (a, b) => b.phrase.length - a.phrase.length,
    );

    let parts = [text];

    links.forEach((link) => {
      parts = parts.flatMap((part) => {
        if (typeof part !== "string") return [part];

        const split = part.split(link.phrase);

        if (split.length === 1) {
          return [part];
        }

        let result = [];

        split.forEach((section, index) => {
          result.push(section);

          if (index !== split.length - 1) {
            if (link.type === "internal") {
              result.push(
                <Link
                  key={index}
                  to={link.url}
                  className="announcement-link-internal"
                >
                  {link.phrase}
                </Link>,
              );
            } else {
              result.push(
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="announcement-link-external"
                >
                  {link.phrase}
                </a>,
              );
            }
          }
        });

        return result;
      });
    });

    return parts;
  }

  return (
    <div className="heroAnnouncements" id="heroRightContainer">
      <h1 id="heroRightTitle">Announcements</h1>

      <div className="announcements">
        {announcements.map((announcement, index) => (
          <div className="announcement" key={index}>
            <div className="announcement-date">{announcement.date}</div>

            {renderText(announcement)}
          </div>
        ))}
      </div>
    </div>
  );
}
