import { FC } from "react";
import useScreenSize, { BreakPoint } from "hooks/useScreenSize";
import Header from "components/Header";
import Side from "components/Side";
import Main from "components/Main";
import Footer from "components/Footer";

const Home: FC<{}> = () => {

	const { width: screenWidth } = useScreenSize();

	return (
		<>
			<Header />
			{ screenWidth > BreakPoint.small && <Side /> }
			<Main />
			<Footer />
		</>
	);
};

export default Home;
