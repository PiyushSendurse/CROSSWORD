const About = (props) => {
    return (
        <>

            <div id="aboutContainer">
                <h2>About the Company</h2>
                <p id="about">The Title Project is one of those "What I wish I had when I was learning" resources.
                    Not everyone has access to a computer science education or the funds to attend
                    an intensive coding school and neither of those is right for everyone anyway.
                    This project is designed to fill in the gap for people who are trying to hack
                    it on their own but still want a high quality education. </p>


            <h1></h1>

                <div class="beliefs">
                    <div class="image">
                        <img src="Images/logo.jpg" alt=""/>
                    </div>
                    <div class="content">
                        <h3> 24*7 Help </h3>
                        <p>This service is availe for 24*7. Kindly use our service anytime when you want help. </p>
                    </div>
                </div>


           

                <div class="beliefs">
                    <div class="image">
                        <img src="Images/belief-image3.svg" alt=""/>
                    </div>
                    <div class="content">
                        <h3>Motivation is fueled by working with others </h3>
                        <p>We're committed to connecting students together so they can stay motivated
                            and learn faster. </p>
                    </div>
                </div>


                <div class="beliefs">
                    <div class="image">
                        <img src="Images/belief-image4.svg" alt=""/>
                    </div>
                    <div class="content">
                        <h3>Open source is best </h3>
                        <p>Our curriculum and website are available on GitHub and we encourage students
                            to actually contribute to the project itself! </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;