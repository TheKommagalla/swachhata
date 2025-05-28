import React, { useState } from 'react';
import img1 from './images/BirlaMandir.jpg';
import img2 from './images/golconda.jpg';
import img3 from './images/charminar.jpg';
import img4 from './images/Telangana_Secretariat.jpg'; // example additional image
import img5 from './images/hussainSagar.jpg'; // example additional image

function TouriestPlaces() {
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setShowMore(true);
    setTimeout(() => {
      const target = document.getElementById("more-places");
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <div className='container bg-white  my-1 mx-auto justify-center-center align-item-start'>
        <p className="text-left fw-bold">Tourist Places</p>

        {/* Initial Places */}
        {[{
          title: "Birla Mandir, Hyderabad",
          desc1: "Birla Mandir in Hyderabad is a beautiful Hindu temple dedicated to Lord Venkateswara. It is made of white marble and built on a hill called Naubat Pahad....",
          desc2: "The temple offers a peaceful atmosphere and a stunning view of the city and Hussain Sagar Lake. It's a popular place for both tourists and devotees....",
          location: "https://www.google.com/maps?sca_esv=c5ccfde27b9667e3&rlz=1C1ONGR_enIN1096IN1096&output=search&q=Birla+Mandir,&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetxLMeWi1u_d0OMRvkClUbalBeyXa8ssyRd_VUj5FQB2orc_91wYCtVawaLNWtsSduS5mUJudDN6Xwi5REd7v6dTe2rYQTEJ17YcJwB_BAI750yute0TwlgDoAUC93mpFZeUKpZg8izpqDEXIThPS2KJ7P2YKcU4nCuj0SyWipL9BUi8rQ&entry=mc&ved=1t:200715&ictx=111",
          img: img1
        }, {
          title: "Golconda, Hyderabad",
          desc1: "Golconda Fort is a historic fort located in Hyderabad. It was once the capital of a powerful kingdom and is known for its strong walls, large gates, and unique acoustics....",
          desc2: "Visitors enjoy exploring its ancient halls and climbing to the top for a scenic view. The evening light and sound show tells the rich history of the fort, making it a must-visit for history lovers...",
          location: "https://www.google.com/maps?sca_esv=c5ccfde27b9667e3&rlz=1C1ONGR_enIN1096IN1096&output=search&q=Golconda&source=lnms&fbs=AIIjpHxU7SXXniUZfeShr2fp4giZ1Y6MJ25_tmWITc7uy4KIetxLMeWi1u_d0OMRvkClUba76WL62NDKV-tuv6_wPYBC9v7ob7zIjaDzKC7u3qUzfD7e7YM11gPmU080OmUCW2ra6dnp670CRAaKtkLzGbsTDSqnsqGdRqpRgn7m8J8sRSSZQGr1gsZNygXo3gegFkXRGx97PLV94iHXkSHBuVAPRbU0rg&entry=mc&ved=1t:200715&ictx=111",
          img: img2
        }, {
          title: "Charminar, Hyderabad",
          desc1: "Charminar is a famous monument in the heart of Hyderabad, built in 1591 by Sultan Muhammad Quli Qutb Shah. It has four tall minarets and beautiful arches, making it a symbol of the city...",
          desc2: "The area around Charminar is always lively with local markets and street food. It attracts many tourists who come to admire its architecture and cultural significance...",
          location: "https://www.google.com/maps/search/Charminar,/@17.3616985,78.4693178,18z?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D",
          img: img3
        }].map((place, index) => (
          <PlaceCard key={index} {...place} />
        ))}

        {/* View More Section */}
        {showMore && (
          <div id="more-places" className="fade-in">
            {[{
              title: "Telangana-Secretariat,Hyderabad",
              desc1: "The Telangana Secretariat, officially known as Dr. B.R. Ambedkar Telangana Secretariat, is the administrative headquarters of the Government of Telangana. It is located in Hyderabad near the Hussain Sagar Lake.",
              desc2: "locatiThe new building was inaugurated in 2023 and is known for its modern design and advanced facilities. It houses the offices of the Chief Minister, Ministers, and top government officials, and serves as the main center for governance and decision-making in the state.",
              location: "https://www.google.com/maps/search/Telangana+Secretariat/@17.4097901,78.4670547,17z?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3Dhttps://maps.app.goo.gl/ZR7jX2MGLXqQqfxy9",
              img: img4
            }, {
              title: "Hussain Sagar Lake",
              desc1: "Hussain Sagar Lake is a large artificial lake located in Hyderabad, Telangana. It was built in 1562 by Ibrahim Quli Qutb Shah and is named after Hussain Shah Wali....",
              desc2: "The lake is famous for the giant Buddha statue in the center and connects the twin cities of Hyderabad and Secunderabad. It is a popular tourist spot known for boating, beautiful views, and evening lights....",
              location: "https://www.google.com/maps/search/hussain+sagar+lake/@17.4241044,78.453917,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D",
              img: img5
            }].map((place, index) => (
              <PlaceCard key={index} {...place} />
            ))}
          </div>
        )}

        {!showMore && (
          <div className="d-flex justify-content-center align-items-center">
            <button
              type="button"
              className="btn btn-outline-success m-2"
              onClick={handleViewMore}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function PlaceCard({ title, desc1, desc2, location, img }) {
  return (
    <div className='container d-flex flex-column m-auto my-2 p-2' style={{ minHeight: '50vh', transition: 'all 0.5s ease-in-out' }}>
      <div className="col-12 col-md-6 mb-3 w-100">
        <p className="px-2 pt-3 fw-bold">{title}</p>
        <div className="p-2 rounded-4 d-flex flex-column flex-md-row mb-2">
          <div className="p-0">
            <p className='p-2 mb-0'>{desc1}</p>
            <p className='p-2 mb-0'>{desc2}</p>
            <p className="text-left m-0 fw-bold">Location:</p>
            <a href={location} target="_blank" rel="noopener noreferrer">Shown in map</a>
          </div>
          <img src={img} className='img-fluid rounded-4 ms-auto' alt="location" style={{ width: '400px', height: 'auto', maxHeight: '300px' }} />
        </div>
      </div>
    </div>
  );
}

export default TouriestPlaces;
