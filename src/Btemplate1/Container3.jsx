import React from "react";
import EditTextIcon from "../assets/images/EditTextIcon.svg";
import { ContentEditableDiv, CreateSanitizeCallback } from "../components/ContentEditable/ContentEditable";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import styles from "./Btemplate1.module.scss";
import ImageRender from "../components/EditingTool/ImageRender";
import { useSelector } from "react-redux";

function Container3({
	editable,
	whyChooseUsText,
	setWhyChooseUsText,
	whyChooseUsImg,
	setWhyChooseUsImg,
	whyChooseUsImgMobile,
	setWhyChooseUsImgMobile,
	whyChooseUsImgPosition,
	setWhyChooseUsImgPosition,
}) {
	const { width, height } = useSelector((state) => state.auth);
	const onContentBlur = CreateSanitizeCallback(setWhyChooseUsText);

	return (
		<div className={styles.Container3}>
			{!editable && (
				<ImageUpload
					className={styles.chooseusChangeIcon}
					setImage={setWhyChooseUsImg}
					image={whyChooseUsImg}
					setImageMobile={setWhyChooseUsImgMobile}
					imageMobile={whyChooseUsImgMobile}
					activeId={"whyChooseUsImgPosition"}
					initialPosition={whyChooseUsImgPosition}
					setInitialPosition={setWhyChooseUsImgPosition}
				/>
			)}

			<div className={styles.imageSection}>
				<ImageRender initialPosition={whyChooseUsImgPosition} editable={editable} currentId={"whyChooseUsImgPosition"}>
					{width < 700 && height > 400 ? (
						<img src={whyChooseUsImgMobile} alt="" loading="lazy" />
					) : (
						<img src={whyChooseUsImg} alt="" loading="lazy" />
					)}
				</ImageRender>
			</div>

			<h2>Why Choose Us</h2>

			<div className={styles.content}>
				{!editable && <img src={EditTextIcon} alt="" className={styles.EditTextIcon} />}

				<ContentEditableDiv
					className={styles.chooseusText}
					text={whyChooseUsText}
					onChange={onContentBlur}
					contentEditable={!editable}
				/>
			</div>
		</div>
	);
}

export default Container3;
