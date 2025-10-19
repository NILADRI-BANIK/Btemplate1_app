import comment from "../../assets/business/image/Comment.png";
import heart from "../../assets/business/image/Hearts.png";
import share from "../../assets/business/image/Share.png";
import styles from "../Btemplate1.module.scss";

const Posts = ({ data }) => {
	return (
		<div className={styles.postMainContainer}>
			<div className={styles.media}>
				<img src={data.mediaUrl[0]} alt="" />
			</div>

			<div className={styles.profile}>
				<img src={data.userId.ProfilePic} alt="" />
				<div className={styles.profileDetails}>
					<h4>{data.userId.displayName}</h4>
					<h5>{data.userId.GetstatedName}</h5>
				</div>
			</div>

			<div className={styles.details} id="details">
				<p>{data.postDesc}</p>

				<div className={styles.actions}>
					<div className={styles.like}>
						<img src={heart} alt="" />
						<h3>{data.postLike}</h3>
					</div>

					<div className={styles.comment}>
						<img src={comment} alt="" />
						<h3>{data.postComment}</h3>
					</div>

					<div className={styles.share}>
						<img src={share} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Posts;
