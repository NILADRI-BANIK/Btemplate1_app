import React from "react";
import comment from "../assets/business/image/Comment.png";
import heart from "../assets/business/image/Hearts.png";
import share from "../assets/business/image/Share.png";
import styles from "./Btemplate1.module.scss";
import { defaultProductData } from "../redux/store";

const products = [
	{
		id: 1,
		imgUrl: "https://res.cloudinary.com/dzarrma99/image/upload/v1701949011/w9bfpwco9xjhurzohnju.png",
	},
	{
		id: 2,
		imgUrl: "https://res.cloudinary.com/dzarrma99/image/upload/v1701949040/ntnvxsvlvdom8nvffwsv.png",
	},
	{
		id: 3,
		imgUrl: "https://res.cloudinary.com/dzarrma99/image/upload/v1701949059/ybp0zrhzyvs6oyne9zag.png",
	},
	{
		id: 4,
		imgUrl: "https://res.cloudinary.com/dzarrma99/image/upload/v1701949011/w9bfpwco9xjhurzohnju.png",
	},
	{
		id: 5,
		imgUrl: "https://res.cloudinary.com/dzarrma99/image/upload/v1701949040/ntnvxsvlvdom8nvffwsv.png",
	},
	{
		id: 6,
		imgUrl: "https://res.cloudinary.com/dzarrma99/image/upload/v1701949059/ybp0zrhzyvs6oyne9zag.png",
	},
	{
		id: 7,
		imgUrl: "https://res.cloudinary.com/dzarrma99/image/upload/v1701949011/w9bfpwco9xjhurzohnju.png",
	},
	{
		id: 8,
		imgUrl: "https://res.cloudinary.com/dzarrma99/image/upload/v1701949040/ntnvxsvlvdom8nvffwsv.png",
	},
];

function Container4() {
	return (
		<div className={styles.Container4}>
			<div className={styles.headSection}>
				<h2>Our Products</h2>
				<p>View All</p>
			</div>

			<div className={styles.productContainer}>
				<div className={styles.products}>
					<img src={defaultProductData[0].mediaUrl} alt="" />
					<div className={styles.hover}>
						<h2>Product</h2>
						<div className={styles.interactions}>
							<div className={styles.like}>
								<img src={heart} alt="" />
							</div>
							<div className={styles.comment}>
								<img src={comment} alt="" />
							</div>
							<div className={styles.share}>
								<img src={share} alt="" />
							</div>
						</div>
					</div>
				</div>

				<div className={styles.products}>
					<img src={defaultProductData[1].mediaUrl} alt="" />
					<div className={styles.hover}>
						<h2>Product</h2>
						<div className={styles.interactions}>
							<div className={styles.like}>
								<img src={heart} alt="" />
							</div>
							<div className={styles.comment}>
								<img src={comment} alt="" />
							</div>
							<div className={styles.share}>
								<img src={share} alt="" />
							</div>
						</div>
					</div>
				</div>

				<div className={styles.products}>
					<img src={defaultProductData[2].mediaUrl} alt="" />
					<div className={styles.hover}>
						<h2>Product</h2>
						<div className={styles.interactions}>
							<div className={styles.like}>
								<img src={heart} alt="" />
							</div>
							<div className={styles.comment}>
								<img src={comment} alt="" />
							</div>
							<div className={styles.share}>
								<img src={share} alt="" />
							</div>
						</div>
					</div>
				</div>

				{/* <div className={styles.products}>
					<img src={products[3].imgUrl} alt="" />
					<div className={styles.hover}>
						<h2>Product</h2>
						<div className={styles.interactions}>
							<div className={styles.like}>
								<img src={heart} alt="" />
							</div>
							<div className={styles.comment}>
								<img src={comment} alt="" />
							</div>
							<div className={styles.share}>
								<img src={share} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.products}>
					<img src={products[4].imgUrl} alt="" />
					<div className={styles.hover}>
						<h2>Product</h2>
						<div className={styles.interactions}>
							<div className={styles.like}>
								<img src={heart} alt="" />
							</div>
							<div className={styles.comment}>
								<img src={comment} alt="" />
							</div>
							<div className={styles.share}>
								<img src={share} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.products}>
					<img src={products[5].imgUrl} alt="" />
					<div className={styles.hover}>
						<h2>Product</h2>
						<div className={styles.interactions}>
							<div className={styles.like}>
								<img src={heart} alt="" />
							</div>
							<div className={styles.comment}>
								<img src={comment} alt="" />
							</div>
							<div className={styles.share}>
								<img src={share} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.products}>
					<img src={products[6].imgUrl} alt="" />
					<div className={styles.hover}>
						<h2>Product</h2>
						<div className={styles.interactions}>
							<div className={styles.like}>
								<img src={heart} alt="" />
							</div>
							<div className={styles.comment}>
								<img src={comment} alt="" />
							</div>
							<div className={styles.share}>
								<img src={share} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.products}>
					<img src={products[7].imgUrl} alt="" />
					<div className={styles.hover}>
						<h2>Product</h2>
						<div className={styles.interactions}>
							<div className={styles.like}>
								<img src={heart} alt="" />
							</div>
							<div className={styles.comment}>
								<img src={comment} alt="" />
							</div>
							<div className={styles.share}>
								<img src={share} alt="" />
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default Container4;
