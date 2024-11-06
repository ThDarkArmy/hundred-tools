import React from 'react';
import "./AboutUs.module.css";

const AboutUs: React.FC = () => {
    return (
        <div>
            <header>
                <h3>About Us - Hundred Tools</h3>
            </header>
            <section id="vision">
                <h2>Our Vision</h2>
                <p>At Hundred Tools, our vision is to empower individuals with a hundred different ways to conquer their daily challenges. We believe that small tools can have a big impact, making tasks easier, more efficient, and enjoyable. Our goal is to be your go-to resource for a plethora of tools that cover a multitude of needs.</p>
            </section>
            <section id="offerings">
                <h2>Explore Our Offerings</h2>
                <p>We take pride in curating an extensive range of tools that cater to a diverse audience. Whether you're a student, a professional, a parent, or simply someone who loves practical solutions, Hundred Tools has something for everyone. From calculators, planners, and converters to reference guides, productivity boosters, and utility widgets, we've got you covered.</p>
            </section>
            <section id="why-choose-us">
                <h2>Why Choose Hundred Tools</h2>
                <ul>
                    <li>Wide Selection: Our website offers a hundred different tools and counting, ensuring that you find precisely what you need for any task.</li>
                    <li>Intuitive Design: We've designed our platform with user-friendliness in mind. Navigating through the tools is seamless, and each tool comes with clear instructions for effortless usage.</li>
                    <li>Continuous Improvement: We are committed to constant innovation and regularly add new tools based on user feedback and emerging needs.</li>
                    <li>Privacy and Trust: Your privacy and security are of utmost importance to us. Rest assured, any information you provide is treated with the utmost confidentiality.</li>
                    <li>Free of Charge: All our tools are available to use free of charge. We believe in democratizing access to practical solutions for everyone.</li>
                </ul>
            </section>
            <section id="for-every-walk-of-life">
                <h2>For Every Walk of Life</h2>
                <p>Hundred Tools is designed to benefit individuals from all walks of life. Whether you're a student looking for quick reference guides, a professional in need of specialized calculators, or a homemaker seeking organization planners, we have tools that cater to your unique needs.</p>
            </section>
            <section id="team">
                <h2>Meet Our Team</h2>
                <p>Behind Hundred Tools is a passionate and dedicated team of developers, designers, and enthusiasts. We are driven by a common goal: to make your life easier and more enjoyable through the power of a hundred tools.</p>
            </section>
            <section id="community">
                <h2>Join the Hundred Tools Community</h2>
                <p>We invite you to join us on this exciting journey of exploration and innovation. Your feedback is invaluable to us, as it helps us improve and expand our collection of tools. Together, let's build a vibrant community that thrives on practicality and efficiency.</p>
            </section>
            {/* <footer>
        <p>Contact Us: <a href="mailto:contact@hundredtools.com">contact@hundredtools.com</a></p>
        <p>Follow Us on Social Media: <a href="#">(Links to social media profiles)</a></p>
      </footer> */}
        </div>
    );
};

export default AboutUs;
