import React from "react";
import comment from "../../../assets/business/image/comment.svg";
import heart from "../../../assets/business/image/heartLike.svg";
import share from "../../../assets/business/image/share.svg";
import styles from "../Btemplate1.module.scss";

function Con4MobileCarousel({ data, active, setactive }) {
	return (
		<div className={styles.mobileCarousel}>
			<div className={styles.activeItem}>
				<img src={active.mediaUrl} alt="" />
				<h2>{active.productName}</h2>
				<div className={styles.actions}>
					<div className={styles.heart}>
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
			<div className={styles.allItems}>
				{data &&
					data.map((item, i) => (
						<div className={styles.Products}>
							<img src={item.mediaUrl} alt="" />
							<h2>{item.productName}</h2>
							<div className={styles.actions}>
								<div className={styles.heart}>
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
					))}
			</div>
		</div>
	);
}

export default Con4MobileCarousel;
