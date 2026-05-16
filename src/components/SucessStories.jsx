import { Container, Row, Col } from "react-bootstrap";
import "./SucessStories.css";

const testimonials = [
  {
    initials: "AO",
    name: "Adaeze Okonkwo",
    role: "Product Designer @ Paystack",
    quote:
      '"I landed my dream role at Paystack in under 2 weeks. The matching is genuinely smart — every job felt tailored to exactly what I was looking for."',
  },
  {
    initials: "TM",
    name: "Tunde Makinde",
    role: "CTO @ Releaf Africa",
    quote:
      '"We posted a Backend Engineer role on a Friday morning and had 30 quality applicants by Monday. The $10 per posting is the best ROI we\'ve seen in hiring."',
  },
  {
    initials: "FK",
    name: "Fatima Kamara",
    role: "Junior UX Designer @ Andela",
    quote:
      '"As a fresh graduate, I was worried job hunting would take months. Hirely got me connected to a great role in 10 days. The one-tap apply made all the difference."',
  },
];

export default function SuccessStories() {
  return (
    <section className="success-section">
      <Container>

        <span className="success-eyebrow">
          Success Stories
        </span>

        <h2 className="success-heading">
          Real people, real{" "}
          <span className="success-italic">
            results
          </span>
        </h2>

        <Row className="g-4 align-items-stretch">

          {testimonials.map((t) => (
            <Col key={t.initials} md={4}>

              <div className="testimonial-card">

                <div>
                  <span className="testimonial-stars">
                    ★★★★★
                  </span>

                  <p className="testimonial-quote">
                    {t.quote}
                  </p>
                </div>

                <div className="testimonial-author-row">

                  <div className="testimonial-avatar">
                    {t.initials}
                  </div>

                  <div>
                    <div className="testimonial-author-name">
                      {t.name}
                    </div>

                    <div className="testimonial-author-role">
                      {t.role}
                    </div>
                  </div>

                </div>

              </div>

            </Col>
          ))}

        </Row>

      </Container>
    </section>
  );
}

