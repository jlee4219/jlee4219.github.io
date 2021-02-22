import './Home.css';

function Home(props) {
    return (
        <section className="Home-section">
            <img src={`${process.env.PUBLIC_URL}/sol-lewitt.png`} className="Home-photo" alt="Photo of Jefferson Lee at SF MOMA" />
            <p className="Home-content">
               Jefferson is a software engineer, writer, and artist. He spends time thinking
               about narrative, identity, memory, scale, and place,
               as well as their various intersections. He studied computer science and mathematics at Harvard, and
               has worked as a backend engineer at Airbnb and Addepar.
               He has writing in <cite>
                  <a href="https://maudlinhouse.net/on-the-respective-limitations-of-physical-and-virtual-memory/">Maudlin House</a>
               </cite>, <cite>
                  <a href="https://therumpus.net/2020/06/uncanny-valley-by-anna-wiener/">The Rumpus</a>
               </cite>, and forthcoming in AAWW's <cite>The Margins</cite>.
               He reviews books for <cite>
                  <a href="">Vagabond City Literary</a>
               </cite>, an online literary magazine focused on underrepresented
               voices. He grew up in Canandaigua, New York, and now lives in San Francisco.
            </p>
        </section>
    );
}

export default Home;