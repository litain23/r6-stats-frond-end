import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});


/**
 * 테스팅 라이브러리
 * 
 * Enzyme
 * https://github.com/enzymejs/enzyme/issues/208
 * 
 * Jest-dom
 * https://testing-library.com/docs/dom-testing-library/api-queries
 * https://jestjs.io/docs/en/getting-started
 * https://www.daleseo.com/react-testing-library/#react-testing-library-%EC%84%A4%EC%A0%95 
 * https://velopert.com/3587
 */

/**
 * 1. 테스트
 * 1-1. 단위테스트.
 *  - UI, 서버 상태와는 상관없으며,
 *    의존성이 없다고 생각할 수 있으며 + 내가 아닌 다른개발자가 했을시 놓칠 수 있는 부분에 대해서만 테스트코드를 작성한다.
 *    코드의 재사용을 최대한 지양하고 테스트 내용을 모두 코드로 기술한다.
 *     
 *    - React가 하는 부분을 제외하고, 1) React 함수들을 오버라이딩한 부분의 로직 2) public (혹은 렌더링 후의 로직) 에 대한 테스팅. 3) 혹은 상태들.
 *    - html태그들은 ta_(testable)을 붙여서 개발자가 className을 변경시키지 못하게 해야한다.
 * 
 *  에시)
 *  - 의존성이 거의 없는경우.
 * 
 *    - 랜더된 데이터의 개수 체크. (서버 데이터에 의존하고 퓨어한 함수 실행 여부를 체크.)
 *      -> 서버데이터가 잘 들어오는 한 데이터에 의존하나, 상식적이라면 당연히 모든 데이터를 도는 for문을 사용하므로 개수를 체크할 필요가 없다.
 * 
 *    - 랜더된 데이터의 정렬 여부 체크. (서버 데이터에 의존 퓨어한 함수 실행 여부를 체크.)
 *      -> 정렬이 안되어서 들어오는 경우, 서버 데이터가 정렬을 해준다고 생각할 수 없는 경우. 어떤 개발자는 개발시에 정렬을 빠트릴 수 있으므로 정렬기능을 테스트로 추가하는건 적절하다.
 * 
 *    - 개발팀 언어 => 사용자 언어로 바꾸는지. 
 *      -> "ncsa"같은 개발팀에서 사용하는 지역언어는 정상적으로 사용자가 알아 볼 수 있는 언어로 바꾸는지 테스트를 해준다. (서버데이터에 의존하지만, 테스트 코드 변경 가능성은 낮다.)
 * 
 *    - 상태가 중요한 컴포넌트의 경우. (state를 변경하는 component 혹은 state를 변경했을때 재 랜더링하는경우)
 *      -> 상태에 관한 변수는 필수적이므로, 
 * 
 *    - 상태가 중요하지 않은 컴포넌트의 경우 (서브 컴포넌트)
 *      -> 데이터를 중심으로 체크. 서브컴포넌트의 존재와 목적이 바뀌면 테스트코드를 변경해야하므로, 이부분은 주의해야할것.
 * 
 *  - 의존성이 조금 있는경우. (디자인/기획 단계에서 정해진경우 테스트하기 용이)
 *    - 이벤트 발생시 원하는대로 랜더링이 나오는지 (특정 이벤트에 의존)
 *    - State나 Props의 데이터가 상태변화 체크 (state와 props의 인터페이스에 의존)
 *    - 컴포넌트를 체크 (특정 컴포넌트의 존재 여부에 의존 퓨어함 함수대신에 접근성 높은 컴포넌트로 체크)
 *      -> 컴포넌트를 새로 만들기때문에 컴포넌트에 대한 체크를 해줘야함.
 * 
 *  - 의존성이 높은 경우. (짜는 사람에 따라 천차만별이 될 수 있고, 변경가능성이 높음.)
 *    - 데이터에 따른 UI변화
 *    - UI의 상태.
 *    - 
 * 
 * 
 * 1-2. 통합테스트.
 *  - 통합테스트는 별도로 구성하며, 단위테스트가 통과 되었다는 가정하에 테스트할것.
 *  - 다만 http 리퀘스트는 fail되어도 워닝만 줘야할것.
 */
