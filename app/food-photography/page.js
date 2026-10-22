'use client'

import Image from 'next/image'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import HoneyBook from '../components/HoneyBook'
import PageHeroSlideshow from '../components/PageHeroSlideshow'
import QuickContact from '../components/QuickContact'
import TrustStrip from '../components/TrustStrip'

const OFFERS = [
  ['Menu & dish photography', 'Appetizers to entrées to dessert, plated and overhead, styled to look irresistible.'],
  ['Interiors & ambiance', 'The room, the bar, the details, the feeling of dining with you, not just the food.'],
  ['Delivery & menu crops', 'Images sized and cropped for your menus, website, and delivery apps like DoorDash and Yelp.'],
  ['Social-ready content', 'Scroll-stopping shots formatted for Instagram, stories, and reels.'],
  ['Chef & team', 'The people and craft behind the plates, the story guests connect with.'],
  ['Seasonal refreshes', 'Keep your menu and feed current with ongoing shoots as dishes change.'],
]

const STEPS = [
  ['Tell me about your spot', 'Share your restaurant, the dishes you want to feature, and where you’ll use the photos.'],
  ['Plan the shot list', 'We pick the dishes and shots that matter most, on-site at your restaurant.'],
  ['The shoot', 'Fast and low-disruption, often between services, with professional lighting and styling.'],
  ['Delivery', 'Edited, mouthwatering images in menu, web, delivery-app, and social crops, ready to use.'],
]

const FAQ = [
  ['How much does restaurant food photography cost in Los Angeles?', 'Food shoots start at $500 for a focused menu session. Larger shoots, interiors, and monthly content are quoted based on the number of dishes, locations, and how you’ll use the images.'],
  ['How many dishes can you shoot?', 'A starter session covers a focused selection of your signature dishes. For a full menu, we’ll plan a half or full day so every plate gets the attention it deserves.'],
  ['Do you shoot at my restaurant?', 'Yes. I shoot on-site at your restaurant, using your plating, your space, and your light, usually between services so it doesn’t disrupt your guests.'],
  ['Can I use the photos for delivery apps and menus?', 'Absolutely. Every image comes cropped and sized for your menus, website, and delivery platforms like DoorDash, Uber Eats, and Yelp, plus social, with a commercial usage license.'],
  ['How soon will I get the photos?', 'Edited galleries are delivered quickly so you can get your new menu and social content live without a long wait.'],
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function FoodPhotography() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav variant="overlay" />
      <Reveal />

      <PageHeroSlideshow
        label="Restaurant & Food"
        title={<>Food photography that<br />makes people hungry</>}
        slides={[
          { src: '/images/food-pc-3.jpg', alt: 'Plated pasta at an LA restaurant' },
          { src: '/images/food-pc-5.jpg', alt: 'Colorful salad plated at a restaurant' },
          { src: '/images/food-pc-1.jpg', alt: 'Fried appetizer with marinara, overhead' },
          { src: '/images/food-pc-12.jpg', alt: 'Iced coffee and muffin at a café' },
          { src: '/images/food-pc-8.jpg', alt: 'Warm restaurant dining room interior' },
          { src: '/images/food-pc-9.jpg', alt: 'Restaurant storefront at dusk' },
        ]}
      />

      <QuickContact />

      <section className="section wrap approach reveal">
        <div className="label">For restaurants & chefs</div>
        <p className="serif">
          Mouthwatering food and restaurant photography that fills tables, built to look like
          <em> your</em> place, not a stock photo.
        </p>
        <p style={{ marginTop: '20px', color: 'var(--taupe)', lineHeight: 1.7, maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto' }}>
          Great photos are the first thing a hungry guest sees, on Google, on delivery apps, on
          your menu, and in the feed. I shoot on-site at your restaurant and turn your dishes into
          images that make people want to book a table or place an order.
        </p>
      </section>

      <section className="wrap" style={{ padding: '10px 48px 110px' }}>
        <div className="reveal center" style={{ marginBottom: '56px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>What I shoot</div>
          <h2 className="h2">From the curb to the plate</h2>
        </div>
        <div className="offers reveal">
          {OFFERS.map(([t, d], i) => (
            <div key={i} className="offer"><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="wrap" style={{ paddingBottom: '110px' }}>
        <div className="reveal center" style={{ marginBottom: '40px' }}>
          <div className="label">Recent work</div>
        </div>
        <div className="gal gal-3 reveal">
          {[
            ['/images/food-pc-1.jpg', 'Fried appetizer with marinara at an LA restaurant'],
            ['/images/food-pc-13.jpg', 'Bakery interior with counter and display cases'],
            ['/images/food-pc-3.jpg', 'Plated pasta styled with bread and wine'],
            ['/images/food-pc-19.jpg', 'Claudine Bakeshop storefront sign in Los Angeles'],
            ['/images/food-pc-15.jpg', 'Bakery pastries and cupcakes in a display case'],
            ['/images/food-pc-8.jpg', 'Warm restaurant dining room interior'],
            ['/images/food-pc-18.jpg', 'Server holding a plated wrap with fresh fruit'],
            ['/images/food-pc-9.jpg', 'Il Nido restaurant storefront in Los Angeles'],
            ['/images/food-pc-5.jpg', 'Colorful plated salad, overhead'],
            ['/images/food-pc-16.jpg', 'Warm bakery and café dining interior'],
            ['/images/food-pc-10.jpg', 'Café plate with fresh fruit and greens'],
            ['/images/food-pc-12.jpg', 'Iced coffee and muffin at a Los Angeles café'],
          ].map(([src, alt], i) => (
            <div key={i} className="imgblk" style={{ aspectRatio: '5 / 4', position: 'relative' }}>
              <Image src={src} alt={alt} fill sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* Why it matters */}
      <section className="section wrap reveal" style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', color: 'var(--taupe)', lineHeight: 1.75 }}>
          <p>
            Diners decide with their eyes. Listings with professional photos get noticed, clicked,
            and ordered from far more than ones without, on Google, Yelp, and every delivery app.
            A single shoot gives you months of menu, web, and social content that quietly works for
            you every day.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bone-2)' }}>
        <div className="reveal center" style={{ marginBottom: '60px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>How it works</div>
          <h2 className="h2">Simple, and built around service</h2>
        </div>
        <div className="steps">
          {STEPS.map(([t, d], i) => (
            <div key={i} className="step reveal">
              <div className="sn">{`0${i + 1}`}</div>
              <div><h3>{t}</h3><p>{d}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="section wrap" id="investment">
        <div className="reveal center" style={{ marginBottom: '40px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Investment</div>
          <h2 className="h2">Food & restaurant photography</h2>
        </div>
        <div className="reveal center" style={{ maxWidth: '620px', margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 300, fontSize: 'clamp(40px,7vw,64px)', lineHeight: 1, marginBottom: '14px' }}>
            Starting at $500
          </div>
          <p style={{ color: 'var(--taupe)', lineHeight: 1.75, marginBottom: '26px' }}>
            A focused menu shoot at your restaurant, a selection of your signature dishes,
            professionally lit and styled, delivered as edited high-res images with crops for your
            menu, website, delivery apps, and social, plus a commercial usage license.
          </p>
          <p className="pricing-note">
            Full menus, interiors, and monthly content shoots quoted on request.
          </p>
        </div>
      </section>

      {/* Local SEO content + FAQ */}
      <section className="section wrap reveal">
        <div className="center" style={{ marginBottom: '36px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Los Angeles food photography</div>
          <h2 className="h2">Restaurant & food photography in Los Angeles</h2>
        </div>
        <div style={{ maxWidth: '760px', margin: '0 auto', color: 'var(--taupe)', lineHeight: 1.75 }}>
          <p>
            I&rsquo;m a Los Angeles food and restaurant photographer based in Encino, shooting on-site
            for restaurants, cafés, bakeries, and bars across LA, from the Valley to the Westside and
            Downtown. Whether you need a few hero dishes for delivery apps, a full menu refresh, or
            ongoing content, I&rsquo;ll make your food look as good as it tastes. See a recent
            {' '}<a href="/blog/branding-photography-claudine-bakery">bakery brand shoot</a>, or more of
            my <a href="/brand-photography">Los Angeles brand photography</a>.
          </p>
        </div>
        <div style={{ maxWidth: '760px', margin: '52px auto 0' }}>
          <h2 className="h2" style={{ textAlign: 'center', marginBottom: '30px' }}>Common questions</h2>
          {FAQ.map(([q, a], i) => (
            <div key={i} style={{ borderTop: '1px solid var(--hairline)', padding: '22px 0' }}>
              <h3 style={{ fontFamily: 'var(--font-serif), serif', fontWeight: 400, fontSize: '20px', marginBottom: '10px', color: 'var(--espresso)' }}>{q}</h3>
              <p style={{ color: 'var(--taupe)', lineHeight: 1.7 }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap" id="inquire">
        <div className="reveal center" style={{ marginBottom: '48px' }}>
          <div className="label" style={{ marginBottom: '16px' }}>Begin</div>
          <h2 className="h2">Let&rsquo;s make your menu irresistible</h2>
        </div>
        <TrustStrip />
        <div className="reveal"><HoneyBook placement="12" /></div>
      </section>

      <Footer />
    </>
  )
}
