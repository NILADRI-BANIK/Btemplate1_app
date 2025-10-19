import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import setting from "../assets/images/Setting.svg";
import Lodging from "../components/Lodging/Lodging";
import NavBar from "../components/NavBar/NavBar";
import Rating from "../components/Rating/Rating";
import styles from "./Btemplate1.module.scss";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import Container5 from "./Container5";
import { useLocation } from "react-router-dom";

const BTemplate1 = () => {
	document.documentElement.style.setProperty("--base-font-size", "100%");
	const { user, templateData, isLoading, currentUserId, userId } = useSelector((state) => state.auth);
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const { state } = useLocation();

	useEffect(() => {
		function handelResize() {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}
		window.addEventListener("resize", handelResize);
		return () => window.removeEventListener("resize", handelResize);
	}, [width, height]);

	if (width < 1728) document.documentElement.style.setProperty("--base-font-size", "90%");
	if (width < 1500) document.documentElement.style.setProperty("--base-font-size", "80%");
	if (width < 1350) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 1250) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 1150) document.documentElement.style.setProperty("--base-font-size", "65%");
	if (width < 1024) document.documentElement.style.setProperty("--base-font-size", "60%");
	if (width < 900) document.documentElement.style.setProperty("--base-font-size", "55%");
	if (width < 800) document.documentElement.style.setProperty("--base-font-size", "50%");
	if (width > 650 && height < 750) document.documentElement.style.setProperty("--base-font-size", "60%");
	if (height < 600) document.documentElement.style.setProperty("--base-font-size", "50%");

	const [editable, setEditable] = useState(true);
	const [showNav, setShowNav] = useState(false);
	const [showRating, setShowRating] = useState(false);

	const [ratingData, setRatingData] = useState(0);
	const [postCount, setPostCount] = useState(0);
	const [subscriberCount, setSubscriberCount] = useState(0);
	// const [isSubscribed, setIsSubscribed] = useState(false);

	const [businessName, setBusinessName] = useState("");
	const [businessLogo, setBusinessLogo] = useState("");
	const [coverImage, setCoverImage] = useState("");
	const [coverImageMobile, setCoverImageMobile] = useState("");
	const [aboutCompanyText, setAboutCompanyText] = useState("");
	const [aboutCompanyImg1, setAboutCompanyImg1] = useState("");
	const [aboutCompanyImg2, setAboutCompanyImg2] = useState("");
	const [aboutCompanyImg3, setAboutCompanyImg3] = useState("");
	const [aboutCompanyImg1Mobile, setAboutCompanyImg1Mobile] = useState("");
	const [aboutCompanyImg2Mobile, setAboutCompanyImg2Mobile] = useState("");
	const [aboutCompanyImg3Mobile, setAboutCompanyImg3Mobile] = useState("");
	const [whyChooseUsText, setWhyChooseUsText] = useState();
	const [whyChooseUsImg, setWhyChooseUsImg] = useState("");
	const [whyChooseUsImgMobile, setWhyChooseUsImgMobile] = useState("");
	const [iconData, setIconData] = useState({});
	const [companyLogos, setCompanyLogos] = useState({});
	const [hiring, setHiring] = useState(true);

	const [coverImgPosition, setCoverImgPosition] = useState("");
	const [aboutCompanyImg1Position, setAboutCompanyImg1Position] = useState("");
	const [aboutCompanyImg2Position, setAboutCompanyImg2Position] = useState("");
	const [aboutCompanyImg3Position, setAboutCompanyImg3Position] = useState("");
	const [whyChooseUsImgPosition, setWhyChooseUsImgPosition] = useState("");

	useEffect(() => {
		if (templateData === null) return;
		if (state.viewMode) setEditable(false);
		setRatingData(user?.Rating === undefined ? "0" : user?.Rating);
		setPostCount(user?.postCount || "0");
		setSubscriberCount(user?.Followers || "0");
		setBusinessName(
			user?.businessName === "" || user?.businessName === undefined ? templateData?.businessName : user?.businessName
		);
		setBusinessLogo(
			user?.businessLogo === "" || user?.businessLogo === undefined ? templateData?.businessLogo : user?.businessLogo
		);
		setCoverImage(templateData?.coverImage);
		setCoverImageMobile(templateData?.coverImageMobile);
		setAboutCompanyText(templateData?.aboutCompanyText);
		setAboutCompanyImg1(templateData?.aboutCompanyImg1);
		setAboutCompanyImg2(templateData?.aboutCompanyImg2);
		setAboutCompanyImg3(templateData?.aboutCompanyImg3);
		setAboutCompanyImg1Mobile(templateData?.aboutCompanyImg1Mobile);
		setAboutCompanyImg2Mobile(templateData?.aboutCompanyImg2Mobile);
		setAboutCompanyImg3Mobile(templateData?.aboutCompanyImg3Mobile);
		setWhyChooseUsText(templateData?.whyChooseUsText);
		setWhyChooseUsImg(templateData?.whyChooseUsImg);
		setWhyChooseUsImgMobile(templateData?.whyChooseUsImgMobile);
		setIconData(templateData?.iconData);
		setCompanyLogos(templateData?.companyLogos);
		setHiring(templateData?.hiring);
		setCoverImgPosition(templateData?.coverImgPosition);
		setAboutCompanyImg1Position(templateData?.aboutCompanyImg1Position);
		setAboutCompanyImg2Position(templateData?.aboutCompanyImg2Position);
		setAboutCompanyImg3Position(templateData?.aboutCompanyImg3Position);
		setWhyChooseUsImgPosition(templateData?.whyChooseUsImgPosition);
	}, [user, templateData]);

	const templateUpdatedData = {
		businessName,
		businessLogo,
		coverImage,
		coverImageMobile,
		aboutCompanyText,
		aboutCompanyImg1,
		aboutCompanyImg2,
		aboutCompanyImg3,
		aboutCompanyImg1Mobile,
		aboutCompanyImg2Mobile,
		aboutCompanyImg3Mobile,
		whyChooseUsText,
		whyChooseUsImg,
		whyChooseUsImgMobile,
		iconData,
		companyLogos,
		coverImgPosition,
		aboutCompanyImg1Position,
		aboutCompanyImg2Position,
		aboutCompanyImg3Position,
		whyChooseUsImgPosition,
		hiringData: {
			hiring,
		},
	};

	return (
		<>
			{isLoading && <Lodging />}
			<NavBar {...{ editable, setEditable, showNav, setShowNav, templateUpdatedData }} />
			{showRating && <Rating {...{ setShowRating, setRatingData }} />}

			<div className={styles.TemplateWrapper} id="Template5">
				{!showNav && currentUserId === userId && user && !state.viewMode && (
					<img src={setting} alt="" className={styles.Setting} onClick={() => setShowNav(true)} />
				)}

				<div className={styles.Btemplate1}>
					<Container1
						{...{
							editable,
							setShowRating,
							ratingData,
							businessName,
							setBusinessName,
							businessLogo,
							coverImage,
							setCoverImage,
							coverImageMobile,
							setCoverImageMobile,
							postCount,
							subscriberCount,
							iconData,
							companyLogos,
							coverImgPosition,
							setCoverImgPosition,
						}}
					/>

					<Container2
						{...{
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
						}}
					/>

					<Container3
						{...{
							editable,
							whyChooseUsText,
							setWhyChooseUsText,
							whyChooseUsImg,
							setWhyChooseUsImg,
							whyChooseUsImgMobile,
							setWhyChooseUsImgMobile,
							whyChooseUsImgPosition,
							setWhyChooseUsImgPosition,
						}}
					/>

					<Container4 />
					<Container5 />
				</div>
			</div>
		</>
	);
};

export default BTemplate1;
