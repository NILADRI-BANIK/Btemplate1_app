import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../components/Hooks/axios";
import { defaultPostData } from "../redux/store";
import styles from "./Btemplate1.module.scss";
import "./Btemplate1.scss";
import Posts from "./components/Posts";

const responsive = {
	0: { items: 1 },
};

const responsive1 = {
	0: { items: 1 },
};

function Container5() {
	const navigate = useNavigate();
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const { userId } = useSelector((state) => state.auth);
	const [postData, setPostData] = useState([]);

	useEffect(() => {
		function handelResize() {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}
		window.addEventListener("resize", handelResize);
		return () => window.removeEventListener("resize", handelResize);
	}, [width, height]);

	const paddingRightVW = 30;
	const paddingRightPixel = (width * paddingRightVW) / 100;

	useEffect(() => {
		if (userId === "") return setPostData(defaultPostData);
		axios
			.get(`/post/${userId}`)
			.then(({ data }) => {
				if (data.length === 0) setPostData(defaultPostData);
				else setPostData(data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, [userId]);

	const items = postData.map((post) => <Posts key={post.id} data={post} />);

	return (
		<section className={styles.Container5}>
			<div className={styles.topSection}>
				<h2>our gallery</h2>
				<p onClick={() => navigate("/Gallery")}>view all</p>
			</div>

			<div className={styles.carousel} id="carouselB1">
				{width < 950 && height > 600 ? (
					<AliceCarousel
						items={items}
						responsive={responsive}
						autoPlay
						autoPlayStrategy="none"
						autoPlayInterval={1000}
						animationDuration={1000}
						animationType="fadeout"
						infinite
					/>
				) : (
					<AliceCarousel
						items={items}
						responsive={responsive1}
						autoPlay
						autoPlayInterval={1000}
						animationDuration={1000}
						paddingRight={paddingRightPixel}
						infinite
					/>
				)}
			</div>

			<div className={styles.thankYou}>
				<p>Thank you ! Visit Again</p>
			</div>
		</section>
	);
}

export default Container5;
