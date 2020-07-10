// 만약 의미없는 테스트라면 에러페이지로 넘어가야합니다.
import React from 'react';
import { render } from '@testing-library/react';
import Search from '../SearchPage/Search'
import { Router} from 'react-router-dom'
import { createMemoryHistory } from "history";
import ProfileRank from '../SearchPage/SubComponent/ProfileRank'


test("Error Page Connect", () => {
  const history = createMemoryHistory();
    const rendered = render(
      <Router history={history}>
        <Search/>
      </Router>
    );

    expect(history.location.pathname).toBe("/404");
});
  
