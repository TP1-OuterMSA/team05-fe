import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ReviewPage from './pages/WriteReviewPage';




const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/team5/review" element={<ReviewPage />}
					/>
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default Router;
