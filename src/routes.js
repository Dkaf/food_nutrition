import React from 'react';
import { Route, IndexRoute } from 'react-router';

import FoodApp from './components/foodApp';
import QuizForm from './components/quizForm';
import Question from './components/question';
import Results from './components/results';
import IndexPage from './components/indexPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={FoodApp}>
    <IndexRoute component={IndexPage}/>
    <Route path="quiz" component={QuizForm}>
		<IndexRoute component={Question}/>
		<Route path="results" component={Results}/>
    </Route>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
