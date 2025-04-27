import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ReviewLayout from './components/layout/ReviewLayout';
import ViewReviewPage from './pages/ViewReviewPage';
import WantedMenu from './components/WantedMenu';
import WriteReview from './components/WriteReview';
import QuizSuccess from './components/QuizSuccess';
import QuizFail from './components/QuizFail';
import QuizPage from './pages/QuizPage';
import FoodListPage from './pages/FoodListPage';
import FoodDetailPage from './pages/FoodDetailPage';




const Router = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/team5" element={<ReviewLayout />}>
						<Route path="review" element={<WriteReview />} />
						<Route path="wantMenu" element={<WantedMenu />} />
					</Route>
					<Route path="/team5/quiz" element={<QuizPage />} />
					<Route path="/team5/quiz/quizSuccess" element={<QuizSuccess />} />
					<Route path="/team5/quiz/quizFail" element={<QuizFail />} />
					<Route path="/team5/foodList" element={<FoodListPage />} />
					<Route path="/team5/foodList/:id" element={<FoodDetailPage />} />
					<Route path="/team5/evaluation" element={<ViewReviewPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default Router;
