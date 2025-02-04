import React from "react";
//styles
import styles from "../styles/home.module.scss";

// swiper.scss
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "../styles/swiper.scss";

//components
import HomeMain from "../components/HomeBox/HomeMain.jsx";
import HomeDayBox from "../components/HomeBox/HomeDayBox.jsx";
import HomeWeekBox from "../components/HomeBox/HomeWeekBox.jsx";
import HomeSunRiseSet from "../components/HomeBox/HomeSunRiseSet.jsx";
import HomeDust from "../components/HomeBox/HomeDust.jsx";
import HomeRadar from "../components/HomeBox/HomeRadar.jsx";
import HomeNews from "../components/HomeBox/HomeNews.jsx";
import HomeVideo from "../components/HomeBox/HomeVideoBox.jsx";

const Home = () => {
  return (
    <article className={styles.article_container}>
      {/* 카카오맵, 초단기데이터 표시 */}
      <HomeMain />
      {console.log("Home")}
      <div className={styles.weather_wrapper}>
        {/* 단기 데이터 오늘, 모레 내일 */}
        <HomeDayBox />
        {/* 특보 속보데이터 */}
        <HomeNews />

        {/* 주간데이터 3일후~ 10일후까지 */}
        <HomeWeekBox />

        {/* 일출일몰 */}
        <HomeSunRiseSet />

        {/* 미세먼지 초미세먼지 */}
        <HomeDust />

        {/* 레이더 영상 */}
        <HomeRadar />

        {/* 오늘 비와? */}
        <HomeVideo />
      </div>
    </article>
  );
};
export default Home;
