import Banner from '../../components/Banner/Banner';
import Feedback from '../../components/Feedback/Feedback';
import Items from '../../components/Items/Items';
import Reviews from '../../components/Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Reviews></Reviews>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;