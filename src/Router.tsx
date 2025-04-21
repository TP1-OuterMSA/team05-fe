import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ReviewLayout from './components/layout/ReviewLayout';
import ViewReviewPage from './pages/ViewReviewPage';
import WantedMenu from './components/WantedMenu';
import WriteReview from './components/WriteReview';




const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/team5" element={<ReviewLayout />}>
						<Route path="review" element={<WriteReview />} />
						<Route path="wantMenu" element={<WantedMenu />} />
					</Route>
					<Route path="/team5/evaluation" element={<ViewReviewPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default Router;
