import { MealPlannerPage } from './app.po';

describe('meal-planner App', () => {
  let page: MealPlannerPage;

  beforeEach(() => {
    page = new MealPlannerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
