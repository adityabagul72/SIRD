import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';
import Footer from './Footer';

const InternationalCollaborations = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP animation for section entrance
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power4.out', stagger: 0.2 }
    );

    // GSAP animation for each card entrance
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out', delay: 0.5 }
    );

    // GSAP animation for card hover effects
    cardsRef.current.forEach((card) => {
      gsap.fromTo(
        card,
        { scale: 1, boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' },
        {
          scale: 1.05,
          boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
          duration: 0.3,
          paused: true,
          ease: 'power2.out',
        }
      );
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, boxShadow: '0px 8px 20px rgba(0,0,0,0.2)' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' });
      });
    });
  }, []);

  const collaborations = [
    {
      img: "https://www.ulethbridge.ca/sites/default/files/2021/08/campus.jpg",
      title: "Lethbridge University",
      description: "Joint research in climate change and environmental sciences.",
      link: "https://www.uleth.ca/"
    },
    {
      img: "https://amu.edu.pl/__data/assets/image/0025/557134/varieties/w300.jpg",
      title: "Poznan University",
      description: "Student exchange programs for biological sciences.",
      link: "https://www.put.poznan.pl/"
    },
    {
      img: "https://static.timesofisrael.com/www/uploads/2014/10/shenkar.jpg",
      title: "Shekher University",
      description: "Innovative learning methods for computer science students.",
      link: "https://en.shenkar.ac.il/"
    },
    {
      img: "https://www.finduniversity.ph/_resources/business/6869/tarlac-college-of-agriculture-256.jpg",
      title: "Tarlac Agricultural University",
      description: "Collaborating on agricultural research and student exchange programs.",
      link: "https://www.tau.edu.ph/"
    },
    {
      img: "https://job-assets-prod.storage.googleapis.com/004912867/20181130104736Z/Headerbild_RWTH_2_neu_91.jpg",
      title: "RWTH Aachen University",
      description: "Joint research initiatives in engineering and technology.",
      link: "https://www.rwth-aachen.de/"
    },
    {
      img: "https://logosworld.com/files/inline-images/50Experts2022-bigtext-Logos-light.jpg",
      title: "Global Collaborations",
      description: "Partnerships with various institutions worldwide.",
      link: "#"
    },
    {
      img: "https://smapse.com/storage/2018/10/ural-federal-university-1-1.jpg",
      title: "Ural Federal University",
      description: "Collaborative projects focusing on environmental engineering.",
      link: "https://urfu.ru/"
    },
    {
      img: "https://cdn2-b3f6.kxcdn.com/wp-content/uploads/2019/12/NWU-1.jpg",
      title: "North-West University",
      description: "Exchange programs in business and economics.",
      link: "https://www.nwu.ac.za/"
    },
    {
      img: "https://image.free-apply.com/gallery/l/uni/gallery/lg/1011600017/e2fb5b03087eedd2b8e13414b7b966074d2969fc.jpg?s=640",
      title: "ITC University",
      description: "Collaborations in telecommunications and IT.",
      link: "https://www.itc.edu/"
    },
  ];

  return (
    <>
      <Navbar />
      <div ref={sectionRef} className="px-16 py-8  mt-10 min-h-screen">
        {/* Top content section */}
        <section className="text-center mt-4 mb-16">
          <h1 className="text-3xl mb-4 font-bold text-blue-500">International Collaborations</h1>
          <p className="text-md text-gray-600">
            At Sanjivani College of Engineering, we partner with renowned institutions around the world to create
            transformative learning experiences. Our international collaborations focus on innovative research, student
            exchange programs, and collaborative projects to prepare our students for global challenges.
          </p>
        </section>

        {/* Grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborations.map((collab, index) => (
            <a
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              href={collab.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-bordered shadow-lg bg-white ">
              <figure>
                <img src={collab.img} alt={collab.title} className="rounded-t-lg h-40 object-cover" />
              </figure>
              <div className="card-body p-4 text-center">
                <h2 className="card-title text-lg font-semibold">{collab.title}</h2>
                <p className="text-gray-600">{collab.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default InternationalCollaborations;
