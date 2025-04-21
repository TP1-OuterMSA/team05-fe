import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ReviewPage from './pages/WriteReviewPage';
import ViewReviewPage from './pages/ViewReviewPage';




const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/team5/review" element={<ReviewPage />}
					/>
					<Route path="/team5/evaluation" element={<ViewReviewPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default Router;
