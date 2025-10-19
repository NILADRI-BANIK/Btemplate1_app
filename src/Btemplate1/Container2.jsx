import React, { useState } from "react";
import EditTextIcon from "../assets/images/EditTextIcon.svg";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import ImageRender from "../components/EditingTool/ImageRender";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import styles from "./Btemplate1.module.scss";
import { useSelector } from "react-redux";

function Container2({
	editable,
	aboutCompanyText,
	setAboutCompanyText,
	aboutCompanyImg1,
	setAboutCompanyImg1,
	aboutCompanyImg2,
	setAboutCompanyImg2,
	aboutCompanyImg3,
	setAboutCompanyImg3,
	aboutCompanyImg1Mobile,
	setAboutCompanyImg1Mobile,
	aboutCompanyImg2Mobile,
	setAboutCompanyImg2Mobile,
	aboutCompanyImg3Mobile,
	setAboutCompanyImg3Mobile,
	hiring,
	aboutCompanyImg1Position,
	setAboutCompanyImg1Position,
	aboutCompanyImg2Position,
	setAboutCompanyImg2Position,
	aboutCompanyImg3Position,
	setAboutCompanyImg3Position,
}) {
	const { width, height } = useSelector((state) => state.auth);
	const [activeProduct, setActiveProduct] = useState("2");
	const products = [
		{
			id: "1",
			imgUrl: width < 700 && height > 400 ? aboutCompanyImg1Mobile : aboutCompanyImg1,
		},
		{
			id: "2",
			imgUrl: width < 700 && height > 400 ? aboutCompanyImg2Mobile : aboutCompanyImg2,
		},
		{
			id: "3",
			imgUrl: width < 700 && height > 400 ? aboutCompanyImg3Mobile : aboutCompanyImg3,
		},
	];

	const onContentBlur = CreateSanitizeCallback(setAboutCompanyText);

	return (
		<div className={styles.Container2}>
			<div className={styles.leftSection}>
				<div className={styles.activeProduct}>
					<img src={activeProduct ? products.find((product) => product.id === activeProduct).imgUrl : ""} alt="" />
				</div>

				<div className={styles.products}>
					<div
						className={`${styles.product} ${activeProduct === "1" ? styles.active : ""}`}
						onClick={() => setActiveProduct("1")}>
						<ImageRender
							initialPosition={aboutCompanyImg1Position}
							editable={editable}
							currentId={"aboutCompanyImg1Position"}>
							<img src={products[0].imgUrl} alt="product1" loading="lazy" />
						</ImageRender>

						{!editable && (
							<ImageUpload
								className={styles.img1ChangeIcon}
								setImage={setAboutCompanyImg1}
								image={aboutCompanyImg1}
								setImageMobile={setAboutCompanyImg1Mobile}
								imageMobile={aboutCompanyImg1Mobile}
								activeId={"aboutCompanyImg1Position"}
								initialPosition={aboutCompanyImg1Position}
								setInitialPosition={setAboutCompanyImg1Position}
							/>
						)}
					</div>

					<div
						className={`${styles.product} ${activeProduct === "2" ? styles.active : ""}`}
						onClick={() => setActiveProduct("2")}>
						<ImageRender
							initialPosition={aboutCompanyImg2Position}
							editable={editable}
							currentId={"aboutCompanyImg2Position"}>
							<img src={products[1].imgUrl} alt="product2" loading="lazy" />
						</ImageRender>

						{!editable && (
							<ImageUpload
								className={styles.img2ChangeIcon}
								setImage={setAboutCompanyImg2}
								image={aboutCompanyImg2}
								setImageMobile={setAboutCompanyImg2Mobile}
								imageMobile={aboutCompanyImg2Mobile}
								activeId={"aboutCompanyImg2Position"}
								initialPosition={aboutCompanyImg2Position}
								setInitialPosition={setAboutCompanyImg2Position}
							/>
						)}
					</div>

					<div
						className={`${styles.product} ${activeProduct === "3" ? styles.active : ""}`}
						onClick={() => setActiveProduct("3")}>
						<ImageRender
							initialPosition={aboutCompanyImg3Position}
							editable={editable}
							currentId={"aboutCompanyImg3Position"}>
							<img src={products[2].imgUrl} alt="product3" loading="lazy" />
						</ImageRender>

						{!editable && (
							<ImageUpload
								className={styles.img3ChangeIcon}
								setImage={setAboutCompanyImg3}
								image={aboutCompanyImg3}
								setImageMobile={setAboutCompanyImg3Mobile}
								imageMobile={aboutCompanyImg3Mobile}
								activeId={"aboutCompanyImg3Position"}
								initialPosition={aboutCompanyImg3Position}
								setInitialPosition={setAboutCompanyImg3Position}
							/>
						)}
					</div>
				</div>
			</div>

			<div className={styles.rightSection}>
				<h1>About Company</h1>
				<div className={styles.content}>
					{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}
					<ContentEditableDiv
						className={styles.aboutusText}
						text={aboutCompanyText}
						onChange={onContentBlur}
						contentEditable={!editable}
					/>
				</div>

				{hiring && (
					<div className={styles.hiring}>
						<p>we're hiring</p>
					</div>
				)}
			</div>
		</div>
	);
}

export default Container2;
